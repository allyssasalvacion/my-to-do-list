import React from "react";
import { ThemeContext } from "./ThemeContext";
import { Switch } from "antd";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full">
      <Switch
        checkedChildren="🌼"
        unCheckedChildren="🌙"
        checked={theme === "dark" ? true : false}
        className="cursor-pointer"
        style={{ background: "#582be8" }}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </div>
  );
};

export default Toggle;
