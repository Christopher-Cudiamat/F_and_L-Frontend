import React from 'react';
import { type ICondos } from '@/services/condosForSale/types';
import Link from 'next/link';
import Image from 'next/image';
import Overlay from '@/components/Atoms/Overlay/Overlay';

const PropertyCard: React.FC<ICondos> = ({
  slug,
  title,
  description,
  nearestLandmark,
  price,
  status,
  image,
  category,
}) => {
  return (
    <li className='group/property-card bg-white w-full rounded-md shadow-lg hover:shadow-xl duration-200 relative'>
      <Link
        href={`/properties/${slug}`}
        replace={true}
      >
        <div className='flex flex-col relative w-full h-52 rounded-tl-md rounded-tr-md overflow-hidden'>
          <Image
            src={image}
            alt={title}
            fill
            loading='lazy'
            className='group-hover/property-card:scale-[1.20] duration-300 object-cover'
          />
          <Overlay color='bg-slate-950/40' />
          <ul className='flex gap-x-1'>
            <li
              className={`text-xs font-normal absolute top-3 right-3 rounded-2xl py-2 px-3 text-white
            ${!status.includes('Sold-out') ? 'bg-blue-800' : 'bg-red-500'} 
            `}
            >
              {status}
            </li>
          </ul>
          <div className='absolute bottom-4 left-4 max-w-[80%]'>
            <h6 className='text-yellow-300 text-sm font-semibold uppercase'>{category}</h6>
            <p className='text-white text-base'>{price}</p>
          </div>
        </div>
        <div className='px-4 pt-6 pb-8'>
          <p className='text-slate-900 text-xl font-semibold'>{title}</p>
          <p className='text-slate-400 text-sm mb-4'>{nearestLandmark}</p>
          <p className='text-slate-900 text-base line-clamp-4'>{description}</p>
        </div>
      </Link>
    </li>
  );
};

export default PropertyCard;
