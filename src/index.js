import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import ThemeProvider from "./components/ThemeContext";
import Background from "./components/Background";

const root = createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider>
    <Background>
      <main className="h-full overflow-y-hidden">
        <App />
      </main>
    </Background>
  </ThemeProvider>
);
