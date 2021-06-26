import TaskContainer from "./TaskContainer/TaskContainer";

const DayContainer = ({ tasksList }) => {
  return (
    <section className="w-full flex flex-col h-screen">
      <div className="grid gap-8 xl:grid-cols-3 lg:grid-cols-2 overflow-y-auto">
        {tasksList.map((task, index) => {
          return <TaskContainer key={index} task={task} />;
        })}
      </div>
    </section>
  );
};

export default DayContainer;
