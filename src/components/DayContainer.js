import TaskContainer from "./TaskContainer/TaskContainer";

const DayContainer = ({ date }) => {
  return (
    <section className="w-full flex flex-col">
      <h3 className="font-bold text-4xl m-0 text-light_primary dark:text-dark_primary">
        {date}
      </h3>
      <div className="mt-6 grid gap-8 xl:grid-cols-3 lg:grid-cols-2">
        <TaskContainer
          task="Wash dishes"
          note="Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet"
        />
        <TaskContainer task="Wash dishes" note="Lorem ipsum dolor sit amet" />
        <TaskContainer task="Wash dishes" note="Lorem ipsum dolor sit amet" />
        <TaskContainer task="Wash dishes" note="Lorem ipsum dolor sit amet" />
        <TaskContainer task="Wash dishes" note="Lorem ipsum dolor sit amet" />
        <TaskContainer task="Wash dishes" note="Lorem ipsum dolor sit amet" />
        <TaskContainer task="Wash dishes" note="Lorem ipsum dolor sit amet" />
        <TaskContainer task="Wash dishes" note="Lorem ipsum dolor sit amet" />
        <TaskContainer task="Wash dishes" note="Lorem ipsum dolor sit amet" />
        <TaskContainer task="Wash dishes" note="Lorem ipsum dolor sit amet" />
      </div>
    </section>
  );
};

export default DayContainer;
