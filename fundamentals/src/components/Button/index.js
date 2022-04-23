import React, { useContext } from "react";
import PropTypes from "proptypes";

import { ThemeContext } from "../../context/ThemeContext";

export default function Button({ children, onClick }) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      style={{
        color: theme === "dark" ? "#fff" : "#000",
        backgroundColor: theme === "dark" ? "#000" : "#fff",
      }}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
