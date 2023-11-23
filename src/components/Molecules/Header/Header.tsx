"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/Atoms/Container/Container";
import DesktopMenu from "./DesktopMenu";
export interface ISubLink {
  label: string;
  link: string;
}
export interface INavItem {
  label: string;
  link: string;
  subLinks?: ISubLink[];
}

export interface INavItems {
  navItems: INavItem[];
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

  return (
    <header className="border-b border-blue-600 hidden md:block shadow-md">
      <Container className="flex justify-between items-center">
        <Link 
          href="/"
          className="text-blue-800 font-bold text-2xl"
        >
          FL Real Estate
        </Link>
        <DesktopMenu navItems={navItems}/>
      </Container>
    </header>
  );
}