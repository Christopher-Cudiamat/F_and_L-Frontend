"use client";

import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface ISelectProps {
  items: any[];
}

const Select: React.FC<ISelectProps> = ({ items }: any) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <Listbox
      as='div'
      value={selectedItem}
      onChange={setSelectedItem}
      className='relative w-full'
    >
      {({ open }) => (
        <React.Fragment>
          <Listbox.Button className='py-2 px-3 bg-white text-slate-800 w-full lg:w-max text-left flex gap-x-5 justify-between'>
            {selectedItem.name}
            <ChevronDownIcon
              className={`w-4 mt-1 duration-150 ${open ? "rotate-180" : "rotate-0"}`}
            />
          </Listbox.Button>
          <Listbox.Options className='absolute top-[45px] origin-top w-full lg:w-max z-10'>
            {items.map(
              (item: any) =>
                item.value !== null && (
                  <Listbox.Option
                    key={item.id}
                    value={item}
                    as='li'
                  >
                    {({ active, selected }) => (
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
