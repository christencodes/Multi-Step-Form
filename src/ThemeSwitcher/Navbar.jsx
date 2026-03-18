import { useContext } from "react";
import { ThemeSwitch } from "../App";

export default function Navbar() {
  const { isDark, themeSwitcher } = useContext(ThemeSwitch);
  return (
    <div
      className={`w-full border-b shadow-2xl/20 py-10 px-30 flex justify-between items-center h-20 ${isDark ? "bg-black! text-white! " : " "}`}
    >
      <div className="text-3xl font-bold transition-all duration-500">
        BootyX
      </div>
      <div>
        <ul className="flex items-center justify-between gap-5 font-semibold">
          <li className="hover:underline cursor-pointer transition-all duration-300">
            How we work
          </li>
          <li className="hover:underline cursor-pointer transition-all duration-300">
            Pricing
          </li>
          <li className="hover:underline cursor-pointer transition-all duration-300">
            FAQ
          </li>
          <li className="hover:underline cursor-pointer transition-all duration-300">
            Resources
          </li>
        </ul>
      </div>

      {/* Toggle */}
      <div
        onClick={() => themeSwitcher()}
        className={`border-2 relative h-9 w-20  rounded-full bg-black flex items-center ${isDark ? "bg-white" : ""}`}
      >
        <div
          className={`absolute w-6 h-6 bg-white rounded-full transition-all duration-500 ease-in-out ${isDark ? "right-2 bg-black! translate-x-1" : "left-2 "}`}
        ></div>
      </div>
    </div>
  );
}
