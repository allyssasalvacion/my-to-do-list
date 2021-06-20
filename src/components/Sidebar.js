import Category from "./Category";
import Toggle from "./ThemeToggle";
import { Button } from "antd";

const Sidebar = () => {
  return (
    <div className="flex flex-col flex-shrink-0 p-8 w-full md:w-64">
      <div className="flex flex-row items-center justify-between flex-shrink-0">
        <h1 className="font-bold text-xl m-0 text-light_primary dark:text-dark_primary">
          allyviated
        </h1>
        <Toggle />
      </div>
      <div className="flex-grow py-6 gap-6 md:block md:overflow-y-auto">
        <Category icon="📌" name="Work" />
        <Category icon="✏️" name="School" />
        <Category icon="🏡" name="Home" />
      </div>
      <Button
        type="primary"
        className="hover:opacity-80"
        style={{ background: "#582be8" }}
      >
        Add category
      </Button>
    </div>
  );
};

export default Sidebar;
