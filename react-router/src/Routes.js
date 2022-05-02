import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Example from "./pages/Example";
import AppNavBar from "./pages/AppNavBar";
import Props from "./pages/Props";
import QueryParams from "./pages/QueryParams";

export default function Router() {
  return (
    <BrowserRouter>
      <AppNavBar />
      <Routes>
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
    </BrowserRouter>
  );
}
