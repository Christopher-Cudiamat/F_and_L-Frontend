"use client";

import { options } from "@/utils/sorts";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React, { useState } from "react";

const SortBy: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(options[0]);

  return (
    <Menu
      as='div'
      className='relative w-fit mx-auto lg:mx-0'
    >
      {({ open }) => (
        <React.Fragment>
          <Menu.Button className='py-2 text-blue-800 hover:text-blue-700 rounded-lg text-lg font-semibold w-full text-left flex gap-x-2 justify-between items-center'>
            Sort
            <ChevronDownIcon
              className={`w-6 mt-1 duration-150 ${open ? "rotate-180" : "rotate-0"}`}
            />
          </Menu.Button>
          <Menu.Items className='flex flex-col shadow-md absolute top-[45px] right-[50%] lg:right-0 origin-top z-10 shadow-lg w-max border-t-2 border-blue-800'>
            {options.map(
              (item: any) =>
                item.value !== "" && (
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href={item.value}
                        className={`${
                          active ? "bg-blue-600 text-white" : "bg-white text-slate-800"
                        } relative py-3 px-3 text-base`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </Menu.Item>
                )
            )}
          </Menu.Items>
        </React.Fragment>
      )}
    </Menu>
  );
};

export default SortBy;
