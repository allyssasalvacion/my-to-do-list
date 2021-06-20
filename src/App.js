import "./App.css";
import DayContainer from "./components/DayContainer";

function App() {
  return (
    <div className="p-8 mx-auto font-inter w-full">
      <div className="flex flex-col gap-20 justify-center items-center pb-12">
        <DayContainer date="Today" />
        <DayContainer date="Tomorrow" />
        <DayContainer date="June 22, 2021" />
      </div>
    </div>
  );
}

export default App;
