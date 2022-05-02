import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const history = useNavigate();

  function handleNavigation() {
    history("/example");
  }

  return (
    <div>
      <h1>Home da aplicação</h1>
      <button onClick={handleNavigation}>Navegação</button>
    </div>
  );
}
