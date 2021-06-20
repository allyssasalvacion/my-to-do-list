import "./App.css";
import DayContainer from "./components/DayContainer";

function App() {
  return (
    <div className="p-8 mx-auto font-inter max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
      <div className=" flex justify-center items-center">
        <DayContainer date="Today" />
      </div>
    </div>
  );
}

export default App;
