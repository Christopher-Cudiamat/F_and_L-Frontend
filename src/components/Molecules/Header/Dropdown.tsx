import React, { Fragment } from 'react'
import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { ISubLink } from './Header';

const Dropdown = ({links}: any) => {

  return (
        <Menu.Items className="absolute bottom-0 flex flex-col z-50 bg-blue-600 text-white">
            {links.map((item: ISubLink) => (
                /* Use the `active` state to conditionally style the active item. */
                <Menu.Item key={item.link} as={Fragment}>
                {({ active }: any) => (
                    <Link
                    href={item.link}
                    className={`${
                        active ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'
                    }`}
                    >
                        {item.label}
                    </Link>
                )}
                </Menu.Item>
            ))}
        </Menu.Items>
  )
}

export default Dropdown;