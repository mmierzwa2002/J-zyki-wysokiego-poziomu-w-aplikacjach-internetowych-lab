// ThemeContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

// 1. Define a type for what your context will hold
interface ThemeContextProps {
  dark: boolean;
  toggleTheme: () => void;
}

// 2. Create the context.
// Tell it to expect 'ThemeContextProps' OR 'undefined' (for the default state)
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// 3. Define the props for your provider
interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark((prev) => !prev);

  // This 'value' object perfectly matches the 'ThemeContextProps' interface
  const value = { dark, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// 4. Create a custom hook with a safety check
export const useTheme = () => {
  const context = useContext(ThemeContext);

  // This is a safety check. If you try to use useTheme()
  // outside of a <ThemeProvider>, it will give you a clear error.
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  // Now TypeScript knows that 'context' is definitely 'ThemeContextProps'
  return context;
};
