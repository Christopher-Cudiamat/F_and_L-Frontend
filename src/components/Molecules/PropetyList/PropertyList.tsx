import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Container from '@/components/Atoms/Container/Container';
import { properties } from './config';

interface IPropertyList {
  activeProperty: string;
}

const PropertyList = ({ activeProperty }: IPropertyList) => {
  let filteredProperties = properties
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .filter((value: any) => value.id !== activeProperty);

  return (
    <Container>
      <ul className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-2'>
        {filteredProperties.map((item: any) => (
          <li>
            <Link href={item.id}>
              <Image
                src={item.logo}
                width={500}
                height={500}
                alt=''
                className='w-28 md:w-48 xl:w-56 h-auto mb-10 mx-auto lg:mx-0 hover:scale-[1.1] duration-200'
              />
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default PropertyList;
