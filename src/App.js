import React from "react";
import "./App.css";
import { Button } from "antd";
import TaskModal from "./components/TaskModal/TaskModal";
import DayContainer from "./components/DayContainer";
import Toggle from "./components/ThemeToggle";

function App() {
  const [visible, setVisible] = React.useState(false);
  const [tasks, setTasksList] = React.useState([]);

  const showModal = () => {
    setVisible(true);
  };

  const saveTask = (task) => {
    setTasksList([...tasks, task]);
  };

  return (
    <div className="flex flex-col p-8 mx-auto font-inter w-full h-full">
      <div className="flex justify-between mb-8">
        <h3 className="font-bold text-4xl m-0 text-light_primary dark:text-dark_primary">
          Good morning, Allyssa!
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
          <TaskModal
            visible={visible}
            setVisible={setVisible}
            saveTask={saveTask}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-col gap-20 justify-center items-center h-full overflow-y-auto">
        <DayContainer tasksList={tasks} />
      </div>
    </div>
  );
}

export default App;
