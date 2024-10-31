import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Appコンポーネントをルート要素にレンダリング
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
