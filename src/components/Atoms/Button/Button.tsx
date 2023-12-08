import Link from "next/link";
import React from "react";
import { TbLoader2 } from "react-icons/tb";

interface ButtonProps {
  children: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  href?: string;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({
  children,
  isLoading,
  disabled = false,
  type = "button",
  className = "",
  href = "",
}) => {
  const buttonStyle =
    "flex justify-center items-center uppercase bg-blue-800 hover:bg-blue-700 font-semibold text-center text-white py-4 px-8 w-full lg:w-fit duration-200 rounded-lg";

  return (
    <React.Fragment>
      {!href ? (
        <button
          type={type}
          className={`${
            disabled ? "opacity-70 pointer-events-none" : "opacity-100 pointer-events-auto"
          } ${buttonStyle} ${className}`}
        >
          {isLoading && <TbLoader2 className='animate-spin w-12' />}
          {children}
        </button>
      ) : (
        <Link
          href={href}
          className={`${buttonStyle} ${className}`}
        >
          {children}
        </Link>
      )}
    </React.Fragment>
  );
};

export default Button;
