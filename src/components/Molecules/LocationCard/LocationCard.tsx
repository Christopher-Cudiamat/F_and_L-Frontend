import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Overlay from '@/components/Atoms/Overlay/Overlay';

interface ILocationCardProps {
  slug: string;
  location: string;
  image: string;
}

const LocationCard = ({
  slug,
  location,
  image
}: ILocationCardProps) => {

  return (
    <li className='group/location-card overflow-hidden h-[300px] w-full relative flex justify-center items-center rounded-md shadow-lg hover:shadow-xl duration-200'>
      <Image 
        src={image} 
        alt={location}
        fill 
        loading="lazy"
        className="group-hover/location-card:scale-[1.20] duration-300 object-cover" 
      />
      <Overlay color="bg-slate-950/50"/>
      <div className="relative flex flex-col items-center">
        <p className="text-white text-xl font-semibold mb-4">{location}</p>
        <Link
          href={`property-location/${slug}`} 
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white text-sm font-semibold flex rounded-md w-fit duration-100"
        >
          Discover more
        </Link>
      </div>
    </li>
  )
}

export default LocationCard;