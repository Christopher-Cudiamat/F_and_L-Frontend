import Container from '@/components/Atoms/Container/Container';
import { BuildingOffice2Icon, BuildingOfficeIcon, HomeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

export interface ISubLink {
  label: string;
  link: string;
  icon: any;
}
export interface INavItem {
  label: string;
  link: string;
  subLinks?: ISubLink[];
}

export interface INavItems {
  navItems: INavItem[];
}

const properties = [
  {
    label: "See all properties",
    link: "/condos-for-sale",
    icon: BuildingOfficeIcon,
  },
  {
    label: "Buy a condominium",
    link: "/property-category/condominium",
    icon: BuildingOfficeIcon,
  },
  {
    label: "Buy a house and lot",
    link: "/property-category/house-and-lot",
    icon: HomeIcon,
  },
  {
    label: "Buy a residential office",
    link: "/property-category/residential-office",
    icon: BuildingOffice2Icon,
  },
  {
    label: "Search property by location",
    link: "/property-location",
    icon: MapPinIcon,
  }
]


const connections = [
  {
    label: "About Us",
    link: "/about-us",
  },
  {
    label: "Contact Us",
    link: "/contact-us"
  },
]

const socialMedias = [
  {
    link: "/1",
    icon: MapPinIcon
  },
  {
    link: "/2",
    icon: MapPinIcon
  },
  {
    link: "/3",
    icon: MapPinIcon
  },
]

const Footer = () => {

  return (
    <footer className="bg-slate-700 pt-12">
      <Container className="grid grid-cols-1 md:grid-cols-4">
        <div className="w-full md:col-span-4">
          <Link 
            href="/"
            className="text-white font-bold text-6xl mb-10"
          >
            FL <span className="text-2xl font-normal">Real Estate</span>
          </Link>
          <ul className="flex mb-10">
            {socialMedias.map((item: any) => (
              <li key={item.link} className="mr-5">
                <a href={item.link}>
                  <item.icon className="w-10 text-white" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex flex-col mb-8">
          {properties.map((item: any) => (
            <li 
              key={item.label}
              className="text-lg text-white font-semibold py-3"
            >
              <Link 
                href={item.link}
                className="flex gap-x-2"
              >
                <item.icon className="w-5"/>
                {item.label}
              </Link>
            </li>
            ))}
        </ul>
        <ul className="flex flex-col mb-8">
          {properties.map((item: any) => (
            <li 
              key={item.label}
              className="text-lg text-white font-semibold py-3"
            >
              <Link 
                href={item.link}
                className="flex gap-x-2"
              >
                <item.icon className="w-5"/>
                {item.label}
              </Link>
            </li>
            ))}
        </ul>
        <div className="text-white">
        <h4 className='text-lg font-semibold mb-5'>
          Disclaimer
        </h4>
        <p className='text-sm'>
        To promote SMDC Projects and increase Sales and Marketing of SMDC Condominiums, all information stated are intended to give a general overview of the project only and does not constitute any part of an offer or contract. www.smdc.com is the official website of SMDC.
        </p>
        </div>
      </Container>
      <div className="bg-slate-800 text-white text-xs font-light py-6">
        <Container className="flex flex-col gap-y-4">
          <p>Copyright 2023 FL Real Estate. All Rights Reserved. </p>     
          <p>Designed by: Dev Tops. </p>
        </Container>  
      </div>         
    </footer>
  );
}

export default Footer;