import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getUsersFromLocalStorage, setCurrentUser } from "../utils/storage";

import type { User, LoginForm } from "../entities/user.types";
import InputField from "../widget/InputField";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginForm>();
  const navigate = useNavigate();

  const onSubmit = (data: LoginForm) => {
    const { userName, password } = data;

    const users: User[] = getUsersFromLocalStorage();
    const user = users.find(
      (u) =>
        u.userName.toLowerCase() === userName.trim().toLowerCase() &&
        u.password === password,
    );

    if (!user) {
      setError("userName", { message: "Invalid username or password " });
      return;
    }
    setCurrentUser(user.userName);
    navigate("/logout");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen bg-green-200 dark:bg-gray-900 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-80 flex flex-col gap-3 mx-auto mt-10"
      >
        <p className="text-center font-semibold text-lg">welcome to login </p>

        <InputField
          label="Username"
          name={"userName"}
          register={register}
          error={errors.userName?.message}
          variant="text"
        />
        <InputField
          label="Password"
          name={"password"}
          register={register}
          error={errors.password?.message}
          variant="password"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Login
        </button>
        <button
          type="button"
          onClick={handleSignup}
          className="bg-white text-black py-2 rounded-md hover:bg-blue-100 transition duration-200 border border-gray-300"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
