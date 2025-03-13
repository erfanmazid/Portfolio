import { forwardRef } from "react";
import { InputProps } from "./type";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, type, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full gap-1">
        {label && (
          <label className="mb-1 text-sm font-medium text-white">{label}</label>
        )}
        <input
          ref={ref}
          type={type}
          className={`w-full px-3 py-2 border rounded-lg bg-transparent outline-none transition-all ${
            error
              ? "border-red-500 focus:ring focus:ring-red-300"
              : "border-gray-300 focus:ring focus:ring-orenge-yellow"
          } ${className}`}
          {...props}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
