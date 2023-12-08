import React from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { type INavItem, type INavItems, type ISubLink } from "./Header";
import { Bars3Icon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

const MobileMenu: React.FC<INavItems> = ({ navItems }) => {
  return (
    <Menu
      as='nav'
      className='py-5 relative flex items-center md:hidden'
    >
      <Menu.Button as='button'>
        <Bars3Icon className='w-10 text-white' />
      </Menu.Button>
      <Transition
        enter='transition-opacity ease-linear duration-100'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity ease-linear duration-100'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <Menu.Items
          as='ul'
          className='px-6 pt-32 fixed right-0 top-0 h-screen w-[100%] bg-blue-900 z-[999] flex flex-col'
        >
          <Menu.Item
            as='li'
            className='absolute top-6 left-6'
          >
            {({ close }) => (
              <button onClick={close}>
                <XMarkIcon className='w-10 text-white' />
              </button>
            )}
          </Menu.Item>
          {navItems.map((item: INavItem, index: number) => (
            <Menu.Item
              key={item.label}
              as='li'
            >
              {({ close }) => (
                <Link
                  href={item.link}
                  onClick={() => {
                    if (index === 0) return;
                    close();
                  }}
                  className='text-xl text-white'
                >
                  <div className='flex justify-between items-center py-2'>
                    {item.label}
                    <ChevronRightIcon
                      className={`${index === 0 ? "hidden" : "flex"} w-5 text-white`}
                    />
                  </div>
                  {item.subLinks && (
                    <ul>
                      {navItems[0].subLinks?.map((item: ISubLink) => (
                        <Menu.Item
                          key={item.label}
                          as='li'
                        >
                          {({ close }) => (
                            <Link
                              href={item.link}
                              onClick={close}
                            >
                              <div className='flex justify-between items-center py-2'>
                                <div className='flex gap-x-2'>
                                  <item.icon className='w-5' />
                                  {item.label}
                                </div>
                                <ChevronRightIcon className='w-5' />
                              </div>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </ul>
                  )}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MobileMenu;
