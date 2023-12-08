import React from "react";
import { TbLoader2 } from "react-icons/tb";

interface ButtonProps {
  children: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({
  children,
  isLoading,
  disabled = false,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      className={`
        ${disabled ? "opacity-70 pointer-events-none" : "opacity-100 pointer-events-auto"} 
        flex justify-center items-center uppercase bg-blue-800 hover:bg-blue-700 font-semibold text-center text-white py-4 px-8 w-full lg:w-fit duration-200 rounded-lg 
        ${className}
      `}
    >
      {isLoading && <TbLoader2 className='animate-spin w-12' />}
      {children}
    </button>
  );
};

export default Button;
