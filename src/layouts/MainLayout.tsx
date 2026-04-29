import { Outlet } from "react-router-dom";
import useTheme from "../hooks/useTheme";

const MainLayout = () => {
  const {toggleTheme} = useTheme()
  return (
    <div
    className="bg-white dark:bg-black text-black dark:text-white">
      <button onClick={toggleTheme}>🌙 / ☀️</button>
      <Outlet />
    </div>
  );
};
export default MainLayout;
