import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import ThemeProvider from "./components/ThemeProvider";

const root = createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider>
    <div className="font-inter bg-light_background dark:bg-dark_background transition-all flex-col w-full h-screen md:flex-row overflow-hidden">
      <main className="h-full overflow-y-hidden">
        <App />
      </main>
    </div>
  </ThemeProvider>
);
