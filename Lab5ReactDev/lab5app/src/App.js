import React from "react";
import "./App.css";

import UserList from "./UserList";
import ToggleDetails from "./ToggleDetails";
import ScoreDisplay from "./ScoreDisplay";
import TaskList from "./TaskList";
import TimerCounter from "./TimerCounter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Ćwiczenie 1: ToggleDetails</h2>
        <ToggleDetails />

        <h2>Ćwiczenie 2: ScoreDisplay</h2>
        <ScoreDisplay score={40} />
        <ScoreDisplay score={70} />
        <ScoreDisplay score={90} />

        <h2>Ćwiczenie 3: TaskList</h2>
        <TaskList />
        <h2>Ćwiczenie 4: UserList</h2>
        <UserList />
        <h2>Ćwiczenie 5: TimerCounter</h2>
        <TimerCounter />
      </header>
    </div>
  );
}

export default App;
