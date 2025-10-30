import logo from "./logo.svg";
import "./App.css";
import HelloWithProps from "./Hello";

function App() {
  return (
    <div>
      <HelloWithProps name="Anna" />
      <HelloWithProps name="Bartek" />
      <HelloWithProps name="Celina" />
    </div>
  );
}

export default App;
