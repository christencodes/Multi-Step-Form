import { createContext, useContext, useEffect, useState } from "react";

//Context Api allows us to share information without propdrilling

//a box
const ThemeSwitch = createContext();

export function ThemeProvider({ children }) {
  //lazy loading?
  //
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme"))
      : false,
  );

  function themeSwitcher() {
    console.log("switch!");
    setIsDark(!isDark);
  }

  useEffect(() => {
    localStorage.setItem("theme", isDark);
  }, [isDark]);

  //destructuring value from ThemeSwitch value={{isDark, themeSwitcher}}

  return (
    //this is how we insert things into the box
    <ThemeSwitch.Provider value={{ isDark, themeSwitcher }}>
      {children}
    </ThemeSwitch.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeSwitch);
}
