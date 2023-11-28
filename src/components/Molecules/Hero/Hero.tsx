import React from 'react';
import Image from 'next/image';
import Overlay from '@/components/Atoms/Overlay/Overlay';
import Container from '@/components/Atoms/Container/Container';

interface IHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  altText: string;
  height?: 'sm' | 'md' | 'lg' | 'full';
}

const Hero = ({
  title,
  subtitle,
  image = '/images/property-categories-hero.png',
  altText,
  height = 'lg',
}: IHeroProps) => {
  const heightValue = {
    sm: 'h-[250px]',
    md: 'h-[350px]',
    lg: 'h-[550px]',
    full: 'h-[100%]',
  };

  return (
    <div className={`relative w-full ${heightValue[height]}`}>
      <Image
        src={image}
        alt={altText}
        fill
        className='absolute inset-0 object-cover'
      />
      <Overlay color='bg-slate-950/60' />
      <Overlay color='bg-gradient-to-t from-cyan-500/30 to-blue-500/10' />
      <Container className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:max-w-[640px] 2xl:max-w-[700px] text-white text-center'>
        <h1
          className={`${
            height === 'full' || height === 'lg' ? 'font-bold' : 'font-semibold'
          } text-4xl lg:text-6xl mb-4`}
        >
          {title}
        </h1>
        {subtitle && <h2 className='text-base font-semibold lg:text-xl'>{subtitle}</h2>}
      </Container>
    </div>
  );
};

export default Hero;
