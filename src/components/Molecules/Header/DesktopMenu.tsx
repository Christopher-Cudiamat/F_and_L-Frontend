import React, { Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { INavItem, INavItems, ISubLink } from './Header';

const DesktopMenu = ({ navItems }: INavItems) => {
    const currentRoute = usePathname();
    const linkStyle = "text-white font-normal pt-[24px] py-5 border-b-4 duration-200 hover:border-white flex items-center gap-x-1"; 
    const activeStyle = `${linkStyle} border-white font-semibold`; 
    const nonActiveStyle = `${linkStyle} border-transparent`;

    return (
        <nav className="hidden md:block">
            <ul className="flex">
                {navItems.map((navItem: INavItem, index: number) => (
                    <li 
                        key={index} 
                        className="flex items-center relative px-4 lg:px-6"
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
                                    className="absolute -bottom-[239px] flex flex-col py-4 rounded-tr-lg rounded-b-lg rounded-tl-0 z-50 bg-white text-blue-600 w-max"
                                >
                                    {navItem.subLinks?.map((item: ISubLink) => (
                                        <Menu.Item 
                                            key={item.link} 
                                            as="div"
                                        >
                                            <Link
                                                href={item.link}
                                                className={`flex gap-x-4 w-full py-2 px-4 text-blue-600 hover:bg-slate-50 ${
                                                    item.link === currentRoute ? 'bg-slate-50' : 'bg-white'
                                                }`}
                                            >
                                                <item.icon className="w-5 text-blue-600"/>
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