import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Example from "./pages/Example";
import AppNavBar from "./pages/AppNavBar";

export default function Router() {
  return (
    <>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example" element={<Example />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
}
