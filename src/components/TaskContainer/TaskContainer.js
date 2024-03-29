import React, { useState } from "react";
import TaskModal from "../TaskModal/TaskModal";

import { Button, Dropdown, Checkbox, message } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import { db } from "../../firebase-config";

import "./index.css";

const TaskContainer = ({ task }) => {
  const [isVisible, setVisible] = useState(false);

  function onChange() {
    db.collection("tasks").doc(task.id).update({
      isFinished: !task.isFinished,
    });
    task.isFinished
      ? message.success("Task unchecked")
      : message.success("Congrats, you finished a task!");
  }

  function handleEditClick() {
    setVisible(true);
  }

  function handleDeleteClick() {
    db.collection("tasks").doc(task.id).delete();
    message.success("Task deleted");
  }

  const items = [
    {
      key: "1",
      label: <div onClick={handleEditClick}>Edit task</div>,
    },
    {
      key: "2",
      label: <div onClick={handleDeleteClick}>Delete task</div>,
    },
  ];

  return (
    <div className="flex flex-col gap-5 p-6 rounded border bg-light_container dark:bg-dark_container border-light_border dark:border-dark_border">
      <header className="w-full flex items-start justify-between">
        <Checkbox checked={task.isFinished} onChange={onChange}>
          <h4 className="text-lg text-semibold break-normal sm:break-words md:break-all lg:truncate xl:break-normal pl-3 m-0 text-light_primary dark:text-dark_primary">
            <span className={task.isFinished ? "line-through" : "no-underline"}>
              {task.task}
            </span>
          </h4>
        </Checkbox>
        <Dropdown menu={{ items }} placement="bottomRight">
          <Button type="link" shape="circle" icon={<MenuOutlined />} />
        </Dropdown>
      </header>
      <div className="w-full py-3 px-4 h-14 whitespace-pre-line overflow-y-auto scrolling-auto rounded bg-light_sub_container dark:bg-dark_sub_container border border-light_border dark:border-dark_border">
        <p className="text-light_tertiary dark:text-dark_tertiary font-normal m-0">
          {task.note}
        </p>
      </div>
      {isVisible ? (
        <TaskModal
          isVisible={isVisible}
          setVisible={setVisible}
          editMode={true}
          task={task}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default TaskContainer;
