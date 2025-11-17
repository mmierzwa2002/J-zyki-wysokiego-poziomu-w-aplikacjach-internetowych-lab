import React from "react";
import "./App.css";

import ClickCounter from "./ClickCounter";
import PrimeCalculator from "./PrimeCalculator";
import FormReducer from "./FormReducer";
//import { useTheme, ThemeProvider } from "./ThemeContext";
import LayoutEffectExample from "./LayoutEffectExample";
function ThemeSwitcher() {
  const { dark, toggleTheme } = useTheme();
  return (
    <div
      style={{
        background: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#000",
      }}
    >
      <button onClick={toggleTheme}>Przełącz motyw</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Ćwiczenie 1: ClickCounter</h2>
        <ClickCounter />
        <h2>Ćwiczenie 2: PrimeCalculator</h2>
        <PrimeCalculator />
        <h2>Ćwiczenie 3: FormReducer</h2>
        <FormReducer />
        <h2>Ćwiczenie 4: ThemeContext</h2>
        <h2>Ćwiczenie 5: LayoutEffectExample</h2>
        <LayoutEffectExample />
      </header>
    </div>
  );
}

export default App;
