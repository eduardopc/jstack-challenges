import React from "react";
import { Link } from "react-router-dom";

import * as S from "./styles";

export default function AppNavBar() {
  return (
    <S.Nav>
      <Link to="/">Home</Link> | <Link to="/example">Example</Link> |{" "}
      <Link to="/e">404</Link>
    </S.Nav>
  );
}
