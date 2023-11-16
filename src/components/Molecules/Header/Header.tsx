"use client"
import { INavItem } from '@/app/config';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Container from '@/components/Atoms/Container/Container';

interface IHeaderProps {
  navItems: INavItem[];
}

export default function Header({navItems}: IHeaderProps) {
  
  const currentRoute = usePathname();
  const linkStyle = 'uppercase font-normal font-base py-4 px-8 border-b-2 duration-300 hover:border-teal-400 hover:font-semibold'; 
  const activeStyle = `${linkStyle} border-teal-400 font-semibold`; 
  const nonActiveStyle = `${linkStyle} border-transparent`; 

  return (
    <header className='border-b border-t border-teal-400 bg-white hidden md:block'>
      <Container className='flex justify-between'>
        <p className="py-4">LOGO</p>
        <nav>
          <ul className='flex'>
            { navItems.map((navItem: INavItem) => (
                <li key={navItem.label} className='flex items-center'>
                  <Link 
                    href={navItem.href}
                    className={currentRoute === navItem.href ? activeStyle : nonActiveStyle}
                  >
                    {navItem.label}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </Container>
    </header>
  );
}