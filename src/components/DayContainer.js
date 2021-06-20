import { Button } from "antd";

const DayContainer = ({ date }) => {
  return (
    <section className="w-full flex flex-col">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-4xl m-0 text-light_primary dark:text-dark_primary">
          {date}
        </h3>
        <Button
          type="primary"
          style={{
            background: "#582be8",
          }}
        >
          Add task
        </Button>
      </div>
    </section>
  );
};

export default DayContainer;
