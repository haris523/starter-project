import { Themes, ThemeAttributes, ThemeType, themes } from "./themes";
import React, { useEffect, useState } from "react";

export type ThemeContextProps = {
  [key in Themes]: {
    [key in ThemeAttributes]: string;
  };
};

export const ThemeContext: any = React.createContext(Object.keys(themes)[0]);

interface Props {
  children: React.ReactChild;
  initialTheme?: string;
}

export interface ThemeProps {
  currentTheme: ThemeType;
  setTheme: (selectedTheme: Themes) => void;
}

const ThemeProvider = ({ children, initialTheme }: Props) => {
  const [currentTheme, setTheme] = useState<string | undefined>(
    initialTheme || Object.keys(themes)[0]
  );
  useEffect(() => {
    if (initialTheme) setTheme(initialTheme);
  }, [initialTheme]);

  const chooseTheme = (val: string) => {
    setTheme(val);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme: chooseTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
