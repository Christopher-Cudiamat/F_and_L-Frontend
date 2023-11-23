import React, { Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { INavItem, INavItems, ISubLink } from './Header';

const DesktopMenu = ({ navItems }: INavItems) => {
    const currentRoute = usePathname();
    const linkStyle = "text-slate-600 font-normal pt-[24px] py-5 border-b-4 duration-200 hover:border-blue-600 flex items-center gap-x-1"; 
    const activeStyle = `${linkStyle} border-blue-600 font-semibold`; 
    const nonActiveStyle = `${linkStyle} border-transparent`;

    return (
        <nav>
            <ul className="flex">
                {navItems.map((navItem: INavItem, index: number) => (
                    <li 
                        key={index} 
                        className="flex items-center relative px-8"
                    >
                        {navItem.subLinks ?
                        <Menu 
                            as="div" 
                            className="relative"
                        >
                            {({ open }) => (
                            <React.Fragment>
                                <Menu.Button 
                                    as="button" 
                                    className={(currentRoute !== "/" && navItem.subLinks?.some((item) => item.link.includes(currentRoute)) || open) ? activeStyle : nonActiveStyle}
                                >
                                    {navItem.label}
                                    <ChevronDownIcon className={`w-4 mt-1 duration-150 ${open ? "rotate-180" : "rotate-0"}`}/>
                                </Menu.Button>
                                <Menu.Items 
                                    as="div" 
                                    className="absolute -bottom-[231px] flex flex-col py-4 rounded-tr-lg rounded-b-lg rounded-tl-0 z-50 bg-blue-600 text-white w-max"
                                >
                                    {navItem.subLinks?.map((item: ISubLink) => (
                                        <Menu.Item 
                                            key={item.link} 
                                            as={Fragment} 
                                        >
                                            <Link
                                                href={item.link}
                                                className={`w-full py-2 px-6 text-white hover:bg-blue-700 ${
                                                    item.link === currentRoute ? 'bg-blue-700' : 'bg-blue-600'
                                                }`}
                                            >
                                                {item.label}
                                            </Link>
                                        </Menu.Item>
                                    ))}
                                </Menu.Items>
                            </React.Fragment>
                            )}
                        </Menu>
                        :
                        <Link 
                            href={navItem.link!}
                            className={currentRoute === navItem.link ? activeStyle : nonActiveStyle}
                        >
                            {navItem.label}
                        </Link>
                        }
                    </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default DesktopMenu;