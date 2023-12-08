import React from "react";
import { FaStar } from "react-icons/fa";

const Stars: React.FC = () => {
  return (
    <div className='flex gap-x-2 text-yellow-400 mb-3'>
      {Array.from(Array(5), (_, index) => (
        <React.Fragment key={index}>{index < 4 && <FaStar size={15} />}</React.Fragment>
      ))}
      <FaStar />
    </div>
  );
};

export default Stars;
