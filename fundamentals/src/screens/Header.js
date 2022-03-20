import React, { useContext } from "react";
import PropTypes from "proptypes";

import Buttom from "./Button";
import { ThemeContext } from "./ThemeContext";
function Header({ title, children }) {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <h1>{title}</h1>
      <Buttom onClick={toggleTheme}>Alterar tema</Buttom>
      {children}
      <hr />
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Header;
