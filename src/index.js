import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Button } from "antd";
import { ThemeProvider } from "./components/ThemeContext";
import Background from "./components/Background";
import Sidebar from "./components/Sidebar";
import reportWebVitals from "./tests/reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <Sidebar />
        <main className="w-full relative overflow-y-auto">
          <div className="absolute right-0 top-0 mr-8 mt-8 md:mr-6 md:mt-6">
            <Button
              type="primary"
              className="hover:opacity-80"
              style={{
                background: "#582be8",
              }}
            >
              Add task
            </Button>
          </div>
          <App />
        </main>
      </Background>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
