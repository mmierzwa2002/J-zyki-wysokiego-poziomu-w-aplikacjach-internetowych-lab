import logo from "./logo.svg";
import "./App.css";
import HelloWithProps from "./Hello";
import Counter from "./Counter";
import InputTracker from "./InputTracker";
import LoginStatus from "./LoginStatus";

function App() {
  return (
    <div>
      <HelloWithProps name="Anna" />
      <HelloWithProps name="Bartek" />
      <HelloWithProps name="Celina" />
      <Counter />
      <InputTracker />
      <LoginStatus />
    </div>
  );
}

export default App;
