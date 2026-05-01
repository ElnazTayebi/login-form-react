import { useNavigate } from "react-router-dom";
import { getCurrentUser, removeCurrentUser } from "../utils/storage";
import { useEffect } from "react";
import Button from "../widget/Button";

const LogoutForm = () => {
  const navigate = useNavigate();
  const userName = getCurrentUser();

  useEffect(() => {
    if (!userName) navigate("/");
  }, [userName, navigate]);

  const handleLogout = () => {
    removeCurrentUser();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-blue-200 dark:bg-gray-900 flex items-center justify-center">
      <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-80 flex flex-col gap-3 mx-auto mt-10">
        <p className="text-center font-semibold text-lg">
          {userName} welcome to Logout Page
        </p>

        <Button type={"button"} variant="primary" onClick={handleLogout}>
          Logout
        </Button>
      </form>
    </div>
  );
};

export default LogoutForm;
