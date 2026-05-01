type BaseButtonProps = {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  type: "button" | "submit";
  onClick?: () => void;
};
const Button = ({ variant, children, type, onClick }: BaseButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        variant === "primary"
          ? "bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          : "bg-white text-black py-2 rounded-md hover:bg-blue-100 transition duration-200 border border-gray-300 shadow"
      }
    >
      {children}
    </button>
  );
};
export default Button;
