import React from 'react';
import { ICondos } from '@/services/condosForSale/types';
import Link from 'next/link';
import Image from 'next/image';

const PropertyCard = ({
  slug,
  title,
  description,
  nearestLandmark,
  price,
  status,
  image,
  type
}: ICondos) => {

  const handleTruncateString = (str: string) => {
    const formatted = str.substring(0,130);
    return `${formatted}...`
  }

  return (
    <div className="group/property-card bg-white w-full rounded-md shadow-lg hover:shadow-xl duration-200"> 
      <div className='flex flex-col relative w-full h-52 rounded-tl-md rounded-tr-md overflow-hidden'>
        <Image 
          src={image} 
          alt={title}
          fill 
          loading="lazy"
          className="group-hover/property-card:scale-[1.20] duration-300 object-cover" 
        />
        <div className="absolute inset-0 bg-blue-950/50"/>
        <ul className="flex gap-x-1">
          <li className={
            `text-xs font-normal absolute top-3 right-3 rounded-xl p-2 text-white
            ${!status.includes('Sold-out') ? 'bg-blue-600' : 'bg-red-500'} 
            `}
          >
            {status}
          </li>
        </ul>
        <div className="absolute bottom-4 left-4 max-w-[80%]">
          <h6 className='text-yellow-300 text-sm font-bold uppercase'>
            {type}
          </h6>
          <p className='text-white text-base'>
            {price}
          </p>
        </div>
      </div>
      <div className="px-4 py-6">
        <p className="text-slate-900 text-xl font-bold">
          {title}
        </p>
        <p className='text-slate-400 text-sm mb-4'>
          {nearestLandmark}
        </p>
        <p className='text-slate-900 text-base mb-6'>
          {handleTruncateString(description)}
        </p>
        <Link 
          href={`condos-for-sale/${slug}`} 
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white text-xs font-bold flex rounded-md w-fit"
        >
          More Details
        </Link>
      </div>
    </div>
  )
}

export default PropertyCard;