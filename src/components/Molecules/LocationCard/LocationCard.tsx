'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Overlay from '@/components/Atoms/Overlay/Overlay';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { Fade } from 'react-awesome-reveal';

interface ILocationCardProps {
  slug: string;
  location: string;
  image: string;
  index: number;
}

const LocationCard: React.FC<ILocationCardProps> = ({ slug, location, image, index }) => {
  return (
    <Fade
      direction='up'
      fraction={0}
      triggerOnce
    >
      <li
        className={`${
          index % 2 === 0 || index % 3 === 0 ? 'md:row-span-3' : 'md:row-span-2'
        } h-[300px] md:h-auto md:col-span-1 mb-4 group/location-card overflow-hidden relative rounded-md shadow-lg hover:shadow-xl duration-200`}
      >
        <Link href={`property-location/${slug}`}>
          <Image
            src={image}
            alt={location}
            fill
            loading='lazy'
            className='duration-300 object-cover'
          />
          <Overlay color='bg-slate-950/30 group-hover/location-card:bg-slate-950/10 duration-300' />
          <div className='relative flex items-start ml-6 mt-4 text-white'>
            <MapPinIcon className='text-white w-8 mr-2' />
            <div className='flex-col'>
              <p className='text-xl font-semibold'>{location}</p>
              <p className='text-base'>31 Properties</p>
            </div>
          </div>
        </Link>
      </li>
    </Fade>
  );
};

export default LocationCard;
