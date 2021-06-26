import React, { useEffect } from "react";
import TaskContainer from "./TaskContainer/TaskContainer";
import { db } from "/Users/allyssaalbores/Documents/Allyssa/01_to-do-list/src/firebase-config.js";

const DayContainer = () => {
  const [tasks, setTasks] = React.useState([]);
  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    db.collection("tasks")
      .orderBy("timestamp", "desc")
      .onSnapshot(function (querySnapshot) {
        setTasks(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            task: doc.data().task,
            note: doc.data().note,
            isFinished: doc.data().isFinished,
          }))
        );
      });
  };

  return (
    <section className="w-full flex flex-col h-full">
      <div className="grid gap-8 xl:grid-cols-3 lg:grid-cols-2 overflow-y-auto">
        {tasks.map((task, index) => {
          return <TaskContainer key={index} task={task} />;
        })}
      </div>
    </section>
  );
};

export default DayContainer;
