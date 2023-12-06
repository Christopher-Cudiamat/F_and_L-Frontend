import React from 'react';
import Image from 'next/image';
import Overlay from '@/components/Atoms/Overlay/Overlay';
import Container from '@/components/Atoms/Container/Container';
import Link from 'next/link';
import Flags from '../Flags/Flags';

interface IContactUsBannerProps {
  image: string;
  altText: string;
  full?: boolean;
}

const ContactUsBanner: React.FC<IContactUsBannerProps> = ({ image, altText, full = false }) => {
  return (
    <div
      className={`
        w-full 
        ${full ? 'lg:max-w-[90%] md:rounded-0' : 'max-w-[1400px] md:rounded-md'}  
        py-12 px-4 md:py-20 relative mx-auto overflow-hidden`}
    >
      <Image
        src={image}
        alt={altText}
        fill
        loading='lazy'
        className={`${full ? 'rounded-0' : 'md:rounded-md'} inset-0 object-cover`}
      />
      <Overlay
        color={`${full ? 'md:rounded-0' : 'md:rounded-md'} bg-neutral-950/70 md:rounded-md`}
      />
      <Container className='relative flex flex-col md:flex-row md:items-center justify-center gap-y-20'>
        <div className='text-center md:text-left rounded-lg max-w-[600px]'>
          <h3 className='text-white text-3xl lg:text-4xl font-semibold mb-4'>
            Helping you find the property of your dreams.
          </h3>
          <p className='text-lg text-white mb-12 md:mb-20'>
            If you are interested to buy in any project of SMDC, We are happy to assist you wherever
            you are across the globe.
          </p>
          <Link
            href={'/contact-us'}
            className='uppercase bg-blue-900 hover:bg-blue-800 font-semibold text-white py-4 px-8 w-fit duration-200 rounded-lg'
          >
            Contact Us
          </Link>
        </div>
        <Flags className='opacity-90 md:w-[400px]' />
      </Container>
    </div>
  );
};

export default ContactUsBanner;
