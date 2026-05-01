import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addUserInLocalstorage, isUserExist } from "../utils/storage";

import type { LoginForm } from "../entities/user.types";
import InputField from "../widget/InputField";
import Button from "../widget/Button";
import { useEffect, useState } from "react";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm<LoginForm>();
  const navigate = useNavigate();
  const [successMsg, setSuccessMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const userName = watch("userName");
  const password = watch("password");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!userName) {
        setSuccessMsg("");
        return;
      }
      if (userName.trim().length < 4) {
        setError("userName", {
          message: "Username must be at least 4 charakters",
        });
        return;
      }
      if (isUserExist(userName.trim())) {
        setError("userName", {
          message: "Username already exist",
        });

        setSuccessMsg("");
        return;
      }
      clearErrors("userName");
      setSuccessMsg("Username is available");
    }, 500);
    return () => clearTimeout(timer);
  }, [userName]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!password) {
        setPasswordMsg("");
        return;
      }
      if (password.trim().length < 6) {
        setPasswordMsg("Password is too short");
        return;
      }
      const hasLetter = /[A-Za-z]/.test(password);
      const hasNumber = /\d/.test(password);
      if (!hasLetter || !hasNumber) {
        setPasswordMsg("Use letter and number");
        return;
      }
      setPasswordMsg("Strong password")
    
    },500);
    return () => clearTimeout(timer)
  }, [password]);
  const onSubmit = (data: LoginForm) => {
    const { userName, password } = data;

    if (isUserExist(userName.trim())) {
      setError("userName", { message: "Username already exist" });
      setSuccessMsg("");
      return;
    } else {
      clearErrors("userName");
      setSuccessMsg("Username is available");
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
          success={successMsg}
          rules={{
            required: "Username is required",
            minLength: {
              value: 4,
              message: "Username must be at least 4 charakter",
            },
          }}
        />

        <InputField
          label="Password"
          name={"password"}
          register={register}
          error={errors.password?.message}
          variant="password"
          success={passwordMsg}
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
