import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addUserInLocalstorage, isUserExist } from "../utils/storage";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type LoginFormData = {
  userName: string;
  password: string;
};

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const navigate = useNavigate();

  const onSubmit = (data: LoginFormData) => {
    const { userName, password } = data;

    if (isUserExist(userName.trim())) {
      alert("User already exist");
      return;
    }
    addUserInLocalstorage({ userName, password });
    alert("Signup successful");
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-red-200 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-lg shadow-md w-80 flex flex-col gap-3 mx-auto mt-10"
      >
        <p className="text-center font-semibold text-lg">
          Welcome to the Signup Page
        </p>

        <label htmlFor="userName">Username</label>
        <input
          type="text"
          id="userName"
          {...register("userName", { required: "Username is required" })}
          className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.userName && (
          <p className="text-red-500">{errors.userName.message}</p>
        )}

        <label htmlFor="password">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            {...register("password", { required: "Password is required" })}
            className="w-full pr-10 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Signup
        </button>
        <button
          type="button"
          onClick={handleLogin}
          className="bg-white text-black py-2 rounded-md hover:bg-blue-100 transition duration-200 border border-gray-300"
        >
          back to Login
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
