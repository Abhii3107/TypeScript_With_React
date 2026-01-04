import "./App.css";
import BasicProps from "./components/BasicProps";
import Props from "./components/Props";

function App() {
  const PersonName = {
    first: "Abhay",
    second: "Singh",
  };
  const count = [1,2,3];
  return (
    <>
      <Props name="Abhay" age={24} isMonitor={true} />
      <BasicProps name={PersonName} counting ={count}  />

    </>
  );
}

export default App;
