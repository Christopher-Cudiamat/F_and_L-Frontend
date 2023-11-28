import React from 'react';
import Container from '@/components/Atoms/Container/Container';
import Link from 'next/link';
import {
  BuildingOfficeIcon,
  BuildingOffice2Icon,
  HomeModernIcon,
} from '@heroicons/react/24/outline';

interface ICategories {
  slug: string;
  label: string;
  icon: any;
  count: string;
}

export const categories = [
  {
    slug: 'condominium',
    label: 'Condominium',
    icon: BuildingOfficeIcon,
    count: '41',
  },
  {
    slug: 'house-and-lot',
    label: 'House and lot',
    icon: HomeModernIcon,
    count: '2',
  },
  {
    slug: 'residential-office',
    label: 'Residential office',
    icon: BuildingOffice2Icon,
    count: '12',
  },
];

const CategoryFilter = () => {
  return (
    <Container className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
      {categories.map((item: ICategories) => (
        <Link
          key={item.slug}
          href={`/property-category/${item.slug}`}
          className='flex flex-row justify-between items-center bg-slate-50 py-8 px-6 md:px-8 md:px-6 rounded-md shadow-md hover:scale-[1.02] hover:shadow-lg duration-200'
        >
          <div className='flex flex-col'>
            <h4 className='text-slate-800 font-semibold text-xl mb-1.5'>{item.label}</h4>
            <p className='flex gap-x-2 text-base md:justify-start text-slate-500 font-normal'>
              <span className='font-semibold'>{item.count}</span> listed units
            </p>
          </div>
          <item.icon className='w-20 md:w-24 lg:w-20 xl:w-32 text-blue-600' />
        </Link>
      ))}
    </Container>
  );
};

export default CategoryFilter;
