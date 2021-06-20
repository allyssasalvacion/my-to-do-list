import React from "react";
import { ThemeContext } from "./themeContext";
import { Switch } from "antd";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      <Switch
        checkedChildren="🌼"
        unCheckedChildren="🌙"
        className="cursor-pointer"
        style={{ background: "#582be8" }}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </div>
  );
};

export default Toggle;
