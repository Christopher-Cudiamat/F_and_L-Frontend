'use client';

import Container from '@/components/Atoms/Container/Container';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from '../SectionTitle/SectionTitle';
import StatusCounter from '../StatusCounter/StatusCounter';

const AboutUsBanner: React.FC = () => {
  return (
    <section className='py-14 lg:py-20 bg-white'>
      <Container className='grid grid-cols-1'>
        <div className='flex flex-col items-center lg:items-start mb-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12'>
            <div>
              <SectionTitle
                title='Our Experts'
                className='px-0'
                withLine
              />
              <Image
                src={'/images/real-estate-experts.jpg'}
                alt='Real estate agents'
                width={300}
                height={300}
                className='w-full mb-8 rounded-lg shadow-md lg:hidden'
              />
              <p className='text-slate-500 font-semibold text-base mb-10 -mt-4 text-center lg:text-left lg:mt-0'>
                If you are looking for an investment opportunity consider the SMDC.With properties
                still currently being built and still lined-up, the Philippines is still definitely
                enjoying the major surge of the Real Estate Market.
              </p>
              <StatusCounter />
              <div className='mb-12' />
              <Link
                href={'/about-us'}
                className='block mx-auto lg:m-0 uppercase bg-blue-800 hover:bg-blue-700 font-semibold text-white py-4 px-6 w-fit rounded-md duration-200'
              >
                Learn more
              </Link>
            </div>
            <Image
              src={'/images/cheerful-business-team.jpg'}
              alt='Real estate agents'
              width={300}
              height={300}
              className='w-full mb-8 rounded-lg shadow-md hidden lg:flex'
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsBanner;
