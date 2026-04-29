import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import type { UseFormRegister } from "react-hook-form";
import type { LoginForm } from "../entities/user.types";
type InputFieldProps = {
  label: string;
  name: keyof LoginForm;
  register: UseFormRegister<LoginForm>;
  error?: string;
  variant: "text" | "password";
};

const InputField = ({
  label,
  name,
  register,
  error,
  variant,
}: InputFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  let inputType = "text";

  if (variant === "password") {
    if (showPassword) {
      inputType = "text";
    } else {
      inputType = "password";
    }
  }
  return (
    <div>
      <label htmlFor={name}>{label}</label>

      <div className="relative">
        <input
          id={name}
          {...register(name)}
          className={`border rounded-md py-2 px-3 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? "border-red-500  focus:ring-red-500 bg-red-100" : "border-gray-300  focus:ring-blue-500 bg-white"}`}
          type={inputType}
        />
        {variant === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};
export default InputField;
