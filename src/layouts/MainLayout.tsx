import { Outlet } from "react-router-dom";
import useTheme from "../hooks/useTheme";

const MainLayout = () => {
  const {toggleTheme} = useTheme()
  return (
    <div
    className=" dark:bg-gray-900  text-black dark:text-white">
      <button onClick={toggleTheme}>🌙 / ☀️</button>
      <Outlet />
    </div>
  );
};
export default MainLayout;
