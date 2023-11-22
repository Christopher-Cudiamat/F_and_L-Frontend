"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Atoms/Container/Container";
import Dropdown from "./Dropdown";
import { Menu } from "@headlessui/react";
export interface ISubLink {
  label: string;
  link: string;
}
interface INavItem {
  label: string;
  link: string;
  subLinks?: ISubLink[];
}

const navItems = [
  {
    label: "Properties",
    link: "",
    subLinks: [
      {
        label: "All",
        link: "/condos-for-sale"
      },
      {
        label: "Condominium",
        link: "/property-category/condominium"
      },
      {
        label: "House and Lot",
        link: "/property-category/house-and-lot"
      },
      {
        label: "Residential Office",
        link: "/property-category/residential-office"
      },
      {
        label: "By Location",
        link: "/property-location"
      }
    ]
  },
  {
    label: "About Us",
    link: "/about-us",
  },
  {
    label: "Contact Us",
    link: "/contact-us"
  },
]

export default function Header() {
  const currentRoute = usePathname();
  const linkStyle = "text-slate-600 font-normal pt-[24px] py-[20px] px-8 border-b-4 duration-200 hover:border-blue-600"; 
  const activeStyle = `${linkStyle} border-blue-600 font-semibold`; 
  const nonActiveStyle = `${linkStyle} border-transparent`; 

  return (
    <header className="border-b border-blue-600 hidden md:block shadow-md">
      <Container className="flex justify-between items-center">
        <Link 
          href="/"
          className="text-blue-800 font-bold text-2xl"
        >
          FL Real Estate
        </Link>
        <nav>
          <ul className="flex">
            {navItems.map((navItem: INavItem, index: number) => (
                <li 
                  key={index} 
                  className="flex items-center relative"
                >
                  {navItem.subLinks ?
                    <Menu as="div" onMouseEnter={({target}: any)=> target.click()}>
                      <Menu.Button className={currentRoute === navItem.link ? activeStyle : nonActiveStyle}>
                        {navItem.label}
                      </Menu.Button>
                      <Dropdown 
                        links={navItem.subLinks}
                      />
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
      </Container>
    </header>
  );
}