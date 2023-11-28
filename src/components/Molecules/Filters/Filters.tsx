import React from 'react';
import { locations } from '@/utils/locations';
import { propertyStatus } from '@/utils/propertyStatus';
import Link from 'next/link';
import Container from '@/components/Atoms/Container/Container';
import Select from '@/components/Atoms/Select/Select';

const Filters = () => {
  return (
    <section className='bg-white px-8'>
      <Container className='relative flex flex-col gap-y-3 w-full lg:w-fit md:flex-row md:gap-x-3 justify-center items-center bg-slate-100 shadow-md -mt-14 p-8 md:p-8 rounded-md'>
        <Select items={locations} />
        <Select items={propertyStatus} />
        <Link
          href={''}
          className='bg-blue-600 text-white w-full text-center py-3 px-8 mt-4 md:mt-0 rounded-md'
        >
          Search
        </Link>
      </Container>
    </section>
  );
};

export default Filters;
