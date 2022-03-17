import React, { useState } from "react";
import "./App.css";
import { Button } from "antd";
import TaskModal from "./components/TaskModal/TaskModal";
import DayContainer from "./components/DayContainer";
import Toggle from "./components/ThemeToggle";

function App() {
  const [isVisible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  return (
    <div className="flex flex-col mx-auto font-inter w-full h-full p-8 lg:p-24">
      <div className="flex justify-between items-center mb-6 lg:mb-8">
        <h3 className="font-bold text-xl lg:text-4xl md:text-3xl sm:text-xl m-0 mr-12 text-light_primary dark:text-dark_primary">
          Hello, Allyssa 🌼
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
        {isVisible ? (
          <TaskModal isVisible={isVisible} setVisible={setVisible} />
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
