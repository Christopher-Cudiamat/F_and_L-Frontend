'use client';

import React from 'react';
import Link from 'next/link';
import Container from '@/components/Atoms/Container/Container';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import {
  BuildingLibraryIcon,
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  HomeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
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

const navItems = [
  {
    label: 'Properties',
    link: '',
    subLinks: [
      {
        label: 'All Properties',
        link: '/properties',
        icon: BuildingLibraryIcon,
      },
      {
        label: 'Condominium',
        link: '/property-category/condominium',
        icon: BuildingOfficeIcon,
      },
      {
        label: 'House and Lot',
        link: '/property-category/house-and-lot',
        icon: HomeIcon,
      },
      {
        label: 'Residential Office',
        link: '/property-category/residential-office',
        icon: BuildingOffice2Icon,
      },
      {
        label: 'By Location',
        link: '/property-location',
        icon: MapPinIcon,
      },
    ],
  },
  {
    label: 'About Us',
    link: '/about-us',
  },
  {
    label: 'Contact Us',
    link: '/contact-us',
  },
];

export default function Header() {
  return (
    <header
      className='bg-blue-800 z-100 w-full'
      id='header'
    >
      <Container className='flex justify-between items-center'>
        <Link
          href='/'
          className='text-white font-bold text-2xl'
        >
          FL <span className='text-base font-normal'>Real Estate</span>
        </Link>
        <DesktopMenu navItems={navItems} />
        <MobileMenu navItems={navItems} />
      </Container>
    </header>
  );
}
