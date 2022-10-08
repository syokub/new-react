import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Root from "./root/Root.jsx";

const root = createRoot(document.getElementById("root")); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);
