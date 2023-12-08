import React from "react";
import { FlagIcon } from "react-flag-kit";

interface FlagsProps {
  className?: string;
}

const flagCodes = ["PH", "IT", "ES", "FR", "MC", "GR", "MT", "AT", "CH", "AE", "US", "CA"];

const Flags: React.FC<FlagsProps> = ({ className = "" }) => {
  return (
    <ul
      className={`flex flex-wrap justify-center gap-x-10 gap-y-8 lg:gap-y-10 xl:gap-y-10 w-full md:w-[600px] mx-auto ${className}`}
    >
      {flagCodes.map((flagCode: any) => (
        <li key={flagCode}>
          <FlagIcon
            code={flagCode}
            size={45}
            className='rounded-lg shadow-lg'
          />
        </li>
      ))}
    </ul>
  );
};

export default Flags;
