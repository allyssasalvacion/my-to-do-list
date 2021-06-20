import React from "react";
import "./App.css";
import { Button } from "antd";
import TaskModal from "./components/TaskModal/TaskModal";
import DayContainer from "./components/DayContainer";

function App() {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  return (
    <div className="p-8 mx-auto font-inter w-full">
      <div className="absolute right-0 top-0 mr-8 mt-8 md:mr-6 md:mt-6">
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
        {visible ? (
          <TaskModal
            visible={visible}
            handleOk={handleOk}
            handleCancel={handleCancel}
            confirmLoading={confirmLoading}
          />
        ) : (
          <div></div>
        )}
      </div>
      <div className="flex flex-col gap-20 justify-center items-center pb-12">
        <DayContainer date="Today" />
        <DayContainer date="Tomorrow" />
        <DayContainer date="June 22, 2021" />
      </div>
    </div>
  );
}

export default App;
