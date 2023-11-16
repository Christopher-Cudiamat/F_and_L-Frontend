"use client"
import { INavItem } from '@/app/config';
import Link from 'next/link';

interface IFooterProps {
  navItems: INavItem[];
}

export default function Footer({navItems}: IFooterProps) {

  return (
    <footer>
      <p>LOGO</p>
      <ul>
        {
          navItems.map((navItem: INavItem) => (
            <li 
              key={navItem.label}
            >
              <Link 
                href={navItem.href}
                replace={navItem.replace}
              >
                {navItem.label}
              </Link>
            </li>
          ))
        }
      </ul>
    </footer>
  );
}