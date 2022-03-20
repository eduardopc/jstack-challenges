import React, { useContext } from "react";
import PropTypes from "proptypes";

import Buttom from "./Button";
import { ThemeContext } from "./ThemeContext";

import styles from "./Header.css"; // gera hash unico - verificar h1 abaixo

function Header({ title, children }) {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div style={{ marginBottom: 20 }}>
      <h1 className={styles.title}>{title}</h1>
      <Buttom onClick={toggleTheme}>Alterar tema</Buttom>
      {children}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Header;
