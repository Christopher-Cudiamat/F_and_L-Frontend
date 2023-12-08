"use client";

import React, { type Dispatch, type SetStateAction } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface Option {
  disabled: boolean;
  name: string;
  value: string;
}

interface ISelectProps {
  options: Option[];
  selected: Option;
  onChange: Dispatch<SetStateAction<Option>>;
}

const Select: React.FC<ISelectProps> = ({ options, onChange, selected }) => {
  return (
    <Listbox
      as='div'
      value={selected}
      onChange={onChange}
      className='relative w-full'
    >
      {({ open }) => (
        <React.Fragment>
          <Listbox.Button className='py-2 px-3 bg-white text-slate-800 w-full text-left flex gap-x-5 justify-between'>
            {selected.name}
            <ChevronDownIcon
              className={`w-4 mt-1 duration-150 ${open ? "rotate-180" : "rotate-0"}`}
            />
          </Listbox.Button>
          <Listbox.Options className='absolute top-[45px] origin-top w-full z-10 shadow-lg'>
            {options.map(
              (item: Option) =>
                item.value !== "" && (
                  <Listbox.Option
                    key={item.value}
                    value={item}
                    as='li'
                  >
                    {({ active }) => (
                      <p
                        className={`${
                          active ? "bg-blue-600 text-white" : "bg-white text-slate-800"
                        } relative py-3 px-3`}
                      >
                        {item.name}
                      </p>
                    )}
                  </Listbox.Option>
                )
            )}
          </Listbox.Options>
        </React.Fragment>
      )}
    </Listbox>
  );
};

export default Select;
