import React from "react";
import "./App.css";
import { Button } from "antd";
import TaskModal from "./components/TaskModal/TaskModal";
import DayContainer from "./components/DayContainer";
import Toggle from "./components/ThemeToggle";

function App() {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => {
    setVisible(true);
  };

  return (
    <div className="flex flex-col p-8 mx-auto font-inter w-full h-full">
      <div className="flex justify-between items-center mb-4 lg:mb-8">
        <h3 className="font-bold text-xl lg:text-4xl md:text-3xl sm:text-xl m-0 mr-12 text-light_primary dark:text-dark_primary">
          こんにちは、アリッサ 🌼
        </h3>
        <div className="flex gap-8 items-center">
          <Toggle />
          <Button
            type="primary"
            className="hover:opacity-80"
            style={{
              background: "#582be8",
            }}
            onClick={showModal}
          >
            Add task
          </Button>
        </div>
        {visible ? (
          <TaskModal visible={visible} setVisible={setVisible} />
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-col gap-20 justify-center items-center h-full overflow-y-auto">
        <DayContainer />
      </div>
    </div>
  );
}

export default App;
