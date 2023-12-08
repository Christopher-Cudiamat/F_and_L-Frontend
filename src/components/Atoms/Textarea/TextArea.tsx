import React from "react";

interface TextareaProps {
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
const Textarea: React.FC<TextareaProps> = ({
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
          value === "" ? "text-base text-slate-500 top-[24px]" : "text-sm text-blue-800 top-[0px]"
        } font-semibold absolute duration-200`}
      >
        {label}
        {required && <span className='text-rose-500'>*</span>}
      </label>
      <textarea
        value={value}
        onChange={onChange}
        autoComplete='off'
        rows={7}
        id={id}
        name={name}
        style={{ resize: "none" }}
        className={`${
          value === "" ? "border-slate-300" : "border-blue-800"
        } border-b focus:border-blue-800 bg-transparent outline-0 text-slate-700 text-base font-semibold mt-6 mb-10`}
      />
      {errorMessage !== "" && (
        <p className='absolute bottom-[5px] text-red-500 text-xs'>{errorMessage}</p>
      )}
    </div>
  );
};

export default Textarea;
