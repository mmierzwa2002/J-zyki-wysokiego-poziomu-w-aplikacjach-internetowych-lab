import { useTheme, ThemeProvider } from "./ThemeContext";
import ClickCounter from "./ClickCounter";
import FormReducer from "./FormReducer";
import PrimeCalculator from "./PrimeCalculator";
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
export default function App() {
  return (
    <div>
      <h2>Ćwiczenie 1: useRef</h2>
      <ClickCounter />
      <h2>Ćwiczenie 2: useMemo</h2>
      <PrimeCalculator />
      <h2>Ćwiczenie 3: useReducer</h2>
      <FormReducer />
      <h2>Ćwiczenie 4: useContext</h2>
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
      <h2>Ćwiczenie 5: useLayoutEffect</h2>
      <LayoutEffectExample />
    </div>
  );
}
