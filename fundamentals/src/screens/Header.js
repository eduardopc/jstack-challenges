import React from "react";
import PropTypes from 'proptypes';

function Header({ title, children }) {
  return (
    <>
      <h1>{title}</h1>
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
