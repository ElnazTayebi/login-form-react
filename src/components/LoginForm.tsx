import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

type LoginFormData = {
    userName: string;
    password: string;
};



const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
    const navigate = useNavigate();

    const onSubmit = (data: LoginFormData) => {
        const { userName, password } = data;

        if (!userName || !password) {
            alert("Please enter username and password");
            return;
        }
        localStorage.setItem('userName', userName);
        navigate('/logout');
    }


    return (
        <div className='min-h-screen bg-green-200 flex items-center justify-center'>
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-6 rounded-lg shadow-md w-80 flex flex-col gap-3 mx-auto mt-10">
            <p className="text-center font-semibold text-lg">Welcome to the Login Page</p>

            <label htmlFor="userName">Username</label>
            <input
                type="text"
                id="userName"
                {...register('userName', { required: "Username is required" })}
                className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.userName && (
                <p className="text-red-500">{errors.userName.message}</p>
            )}

            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                {...register('password', { required: "Password is required" })}
                className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
            )}
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
                Login 
            </button>
        </form>
        </div>
    );
};

export default LoginForm;