import React from 'react';
import Image from 'next/image';
import Overlay from '@/components/Atoms/Overlay/Overlay';
import Container from '@/components/Atoms/Container/Container';
import Link from 'next/link';

interface IContactUsBannerProps {
  image: string;
  altText: string;
  full?: boolean;
}

const ContactUsBanner: React.FC<IContactUsBannerProps> = ({ image, altText, full = false }) => {
  return (
    <div
      className={`w-full ${full ? 'lg:max-w-[90%]' : 'max-w-[1400px]'} ${
        full ? '2xl:rounded-0' : '2xl:rounded-md'
      } h-[500px] lg:h-[400px] relative mx-auto overflow-hidden`}
    >
      <Image
        src={image}
        alt={altText}
        fill
        loading='lazy'
        className={`${full ? '2xl:rounded-0' : '2xl:rounded-md'} inset-0 object-cover`}
      />
      <Overlay
        color={`${full ? '2xl:rounded-0' : '2xl:rounded-md'} bg-neutral-950/70 2xl:rounded-md`}
      />
      <Container className='relative flex flex-col justify-center h-full'>
        <div className='border border-yellow-400 rounded-lg max-w-[600px] px-6 py-12'>
          <h3 className='text-white text-3xl lg:text-4xl font-semibold mb-4'>
            Helping you find the property of your dreams.
          </h3>
          <p className='text-base text-white mb-12'>
            If you’re interested to buy properties in any of our projects in SMDC, we’re happy to
            answer all your questions.
          </p>
          <Link
            href={'/contact-us'}
            className='uppercase bg-blue-800 hover:bg-blue-700 font-semibold text-white py-4 px-8 w-fit duration-200 rounded-lg'
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ContactUsBanner;
