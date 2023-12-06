'use client';

import React from 'react';
import Container from '@/components/Atoms/Container/Container';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import { categories } from './config';

interface ICategories {
  slug: string;
  label: string;
  icon: any;
  count: string;
}

const CategoryFilter: React.FC = () => {
  return (
    <Fade
      direction='up'
      fraction={0}
      triggerOnce
    >
      <Container className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        {categories.map((item: ICategories) => (
          <Link
            key={item.slug}
            href={`/property-category/${item.slug}`}
            className='group/category-filter flex flex-row justify-between items-center bg-slate-50 py-8 px-6 md:px-8 md:px-6 rounded-md shadow-md hover:scale-[1.02] hover:shadow-lg hover:bg-blue-800 duration-200'
          >
            <div className='flex flex-col'>
              <h4 className='text-slate-800 group-hover/category-filter:text-white font-semibold text-xl mb-1.5'>
                {item.label}
              </h4>
              <p className='flex gap-x-2 text-base md:justify-start text-slate-500 group-hover/category-filter:text-white font-normal'>
                <span className='font-semibold'>{item.count}</span> listed units
              </p>
            </div>
            <item.icon className='w-20 md:w-24 lg:w-20 xl:w-32 text-blue-800 group-hover/category-filter:text-white' />
          </Link>
        ))}
      </Container>
    </Fade>
  );
};

export default CategoryFilter;
