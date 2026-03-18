import Navbar from "./ThemeSwitcher/Navbar";
import Hero from "./ThemeSwitcher/Hero";
import Footer from "./ThemeSwitcher/Footer";
import { createContext, useEffect, useState } from "react";

export const ThemeSwitch = createContext();

function App() {
  //false - light theme
  //true - dark theme
  const [isDark, setIsDark] = useState(false);

  function themeSwitcher() {
    console.log("switch!");
    setIsDark(!isDark);
  }

  useEffect(() => {
    console.log(`Dark Mode : ${isDark}`);
  }, [isDark]);

  return (
    <ThemeSwitch.Provider value={{ isDark, themeSwitcher }}>
      <div className="h-full">
        <Navbar></Navbar>
        <Hero></Hero>
        <Footer></Footer>
      </div>
    </ThemeSwitch.Provider>
  );
}

export default App;
