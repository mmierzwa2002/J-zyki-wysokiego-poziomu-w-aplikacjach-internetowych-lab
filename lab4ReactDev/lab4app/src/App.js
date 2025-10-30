import logo from "./logo.svg";
import "./App.css";
import HelloWithProps from "./Hello";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <HelloWithProps name="Anna" />
      <HelloWithProps name="Bartek" />
      <HelloWithProps name="Celina" />
      <Counter></Counter>
    </div>
  );
}

export default App;
