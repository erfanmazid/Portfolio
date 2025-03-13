import { ButtonProps } from "./type";

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  variant = "primary",
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-semibold transition-all ${
        variant === "primary"
          ? "bg-light-gray text-orenge-yellow hover:drop-shadow-lg"
          : variant === "secondary"
          ? "bg-gray-200 text-black hover:bg-gray-300"
          : "bg-red-500 text-white hover:bg-red-600"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
