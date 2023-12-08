import React from "react";

interface InputProps {
  id: string;
  name: string;
  label: string;
  value: string;
  errorMessage?: string;
  required: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}
const Input: React.FC<InputProps> = ({
  id,
  name,
  label,
  value,
  errorMessage,
  required,
  onChange,
}) => {
  return (
    <div className='relative flex flex-col w-full'>
      <label
        htmlFor={id}
        className={`${
          value === "" ? "text-base text-slate-500 top-[24px]" : "text-sm text-blue-800 top-0"
        } font-semibold absolute duration-200`}
      >
        {label}
        {required && <span className='text-rose-500'>*</span>}
      </label>
      <input
        value={value}
        onChange={onChange}
        autoComplete='off'
        type='text'
        id={id}
        name={name}
        className={`${
          value === "" ? "border-slate-300" : "border-blue-800"
        } border-b focus:border-blue-800 bg-transparent outline-0 h-[40px] text-slate-700 text-base font-semibold mt-4 mb-6`}
      />
      {errorMessage !== "" && (
        <p className='absolute bottom-[5px] text-red-500 text-xs'>{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
