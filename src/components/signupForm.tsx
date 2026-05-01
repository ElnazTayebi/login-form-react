import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addUserInLocalstorage, isUserExist } from "../utils/storage";

import type { LoginForm } from "../entities/user.types";
import InputField from "../widget/InputField";
import Button from "../widget/Button";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginForm>();
  const navigate = useNavigate();

  const onSubmit = (data: LoginForm) => {
    const { userName, password } = data;

    if (isUserExist(userName.trim())) {
      setError("userName", { message: "Username already exist" });
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
    <div className="min-h-screen bg-red-200 dark:bg-gray-900 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-80 flex flex-col gap-3 mx-auto mt-10"
      >
        <p className="text-center font-semibold text-lg">
          Welcome to the Signup Page
        </p>

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

        <Button type={"submit"} variant="primary">
          Signup
        </Button>
        <Button type={"button"} variant="secondary" onClick={handleLogin}>
          Back to login
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
