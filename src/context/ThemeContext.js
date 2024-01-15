import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  // exported values
  const values = {
    theme,
    setTheme,
  };

  console.log(theme);

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
