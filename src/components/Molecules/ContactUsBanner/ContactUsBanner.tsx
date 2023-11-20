import React from 'react';
import Image from 'next/image';
import Overlay from '@/components/Atoms/Overlay/Overlay';
import Container from '@/components/Atoms/Container/Container';
import Link from 'next/link';

interface IContactUsBannerProps {
    image: string;
    altText: string;
}

const ContactUsBanner = ({ 
    image, 
    altText
}: IContactUsBannerProps) => {

  return (
    <section className="relative w-full max-w-[1400px] h-[500px] py-20 mx-auto mb-18 mt-24 lg:mb-20 lg:mt-28 rounded-md">
        <Image 
          src={image}
          alt={altText}
          fill 
          loading="lazy"
          className="inset-0 object-cover rounded-md" 
        />
        <Overlay color="bg-slate-950/50 rounded-md"/>
        <Container className="relative flex flex-col justify-center h-full">
          <h3 className="text-white text-2xl lg:text-3xl mb-4">
            Helping you find the property of your dreams.
          </h3>
          <p className="text-base w-[500px] text-white mb-8">
            If you’re interested to buy properties in any of our projects in SMDC, we’re happy to answer all your questions. 
          </p>
          <Link 
            href={"/contact-us"} 
            className="bg-blue-600 hover:bg-blue-700 font-semibold text-white py-3 px-6 w-fit rounded-md duration-200"
          >
            Contact Us
          </Link>
        </Container>
    </section>
  )
}

export default ContactUsBanner;