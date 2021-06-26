import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./components/ThemeContext";
import Background from "./components/Background";

ReactDOM.render(
  <ThemeProvider>
    <Background>
      {/* <Sidebar /> */}
      <main className="w-full my-12 mx-24 relative overflow-y-hidden">
        <App />
      </main>
    </Background>
  </ThemeProvider>,
  document.getElementById("root")
);
