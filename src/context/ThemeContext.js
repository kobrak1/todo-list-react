import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("Theme");
  const [theme, setTheme] = useState(
    storedTheme ? JSON.parse(storedTheme) : false
  );

  // set the theme data whenever theme changes
  useEffect(() => {
    localStorage.setItem("Theme", JSON.stringify(theme));
  }, [theme]);

  // exported values
  const values = {
    theme,
    setTheme,
  };

  console.log("Mode:", theme);

  return (
    <ThemeContext.Provider value={values}> {children} </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  // to check if the context used in the correct place
  if (!context) {
    throw new Error(
      "This useTheme hook must be called inside the ThemeProvider!"
    );
  }
  return context;
};
