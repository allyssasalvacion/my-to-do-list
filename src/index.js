import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./components/ThemeContext";
import Background from "./components/Background";
import Sidebar from "./components/Sidebar";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <Sidebar />
        <main className="w-full relative overflow-y-auto">
          <App />
        </main>
      </Background>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
