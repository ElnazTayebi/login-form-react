import { useNavigate } from "react-router-dom";
import { removeUser, getUser } from "../utils/Storage";

const LogoutForm = () => {
    const navigate = useNavigate();

    const userName = getUser();
    const handleLogout = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //localStorage.removeItem('userName');
        removeUser();
        navigate('/');
    };

    return (
        <div className='min-h-screen bg-blue-200 flex items-center justify-center'>
        <form onSubmit={handleLogout} className="bg-white p-6 rounded-lg shadow-md w-80 flex flex-col gap-3 mx-auto mt-10">
            <p className="text-center font-semibold text-lg">
                {userName} welcome to the Logout Page
            </p>
            <button
                type="submit" className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
                Logout
            </button>
        </form>
        </div>
    );
};

export default LogoutForm;