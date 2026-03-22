import { useTheme } from "./useTheme";

export default function Footer() {
  const { isDark, themeSwitcher } = useTheme();
  return (
    <div
      className={` ${isDark ? "bg-black text-white" : ""} w-full h-25 px-30 border-t border-b flex justify-between items-center transition-all duration-500`}
    >
      <div>
        <p className="text-5xl">🍑</p>
      </div>
      <div>
        <ul className="flex gap-4">
          <li>About</li>
          <li>Contact Us</li>
          <li>Careers</li>
          <li>Socials</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-3xl">BootyX</h3>
      </div>
    </div>
  );
}
