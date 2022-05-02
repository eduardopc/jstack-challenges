import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import Home from "./pages/Home";
import Example from "./pages/Example";
import AppNavBar from "./pages/AppNavBar";
import Props from "./pages/Props";
import QueryParams from "./pages/QueryParams";

export default function Router() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: "translateY(50px)", position: "absolute" },
    enter: { opacity: 1, transform: "translateY(0)", position: "absolute" },
    leave: { opacity: 0, transform: "translateY(50px)", position: "absolute" },
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <AppNavBar />
      <Routes location={item}>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<Example />} />
        <Route path="/example/:id/:author" element={<Props />} />
        <Route path="/example/:author" element={<QueryParams />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </animated.div>
  ));
}
