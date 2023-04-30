import React from "react";
import App from "./App";

// NOTE: https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
