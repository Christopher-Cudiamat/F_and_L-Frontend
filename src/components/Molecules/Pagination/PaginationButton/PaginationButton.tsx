import React from "react";
import Link from "next/link";

interface PaginationButtonProps {
  label: "Next" | "Prev";
  href: string;
}
const PaginationButton: React.FC<PaginationButtonProps> = ({ label, href }) => {
  return (
    <Link
      href={href}
      className='bg-blue-800 hover:bg-blue-700 text-sm md:text-base font-normal rounded-md py-1.5 px-4 text-white duration-100'
    >
      {label}
    </Link>
  );
};

export default PaginationButton;
