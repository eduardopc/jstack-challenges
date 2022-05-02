import React from "react";
import { useNavigate } from "react-router-dom";

import Router from "./Routes";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingRight: 10,
        }}
      >
        <header>Header da aplicação</header>
      </div>
      <Router />
      <footer>Footer da aplicação</footer>
    </>
  );
}

export default App;
