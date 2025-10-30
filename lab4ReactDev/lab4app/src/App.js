import logo from "./logo.svg";
import "./App.css";
import HelloWithProps from "./Hello";
import Counter from "./Counter";
import InputTracker from "./InputTracker";
import LoginStatus from "./LoginStatus";
import TodoList from "./TodoList";
import LoginForm from "./LoginForm";

function App() {
  const myTasks = ["Dokończ laboratorium", "Zjedz obiad", "Idź spać"];
  return (
    <div>
      <HelloWithProps name="Anna" />
      <HelloWithProps name="Bartek" />
      <HelloWithProps name="Celina" />
      <Counter />
      <InputTracker />
      <LoginStatus />
      <LoginForm />
      <TodoList todos={myTasks} />
    </div>
  );
}

export default App;
