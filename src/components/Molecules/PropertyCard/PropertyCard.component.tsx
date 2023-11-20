import React from 'react';
import { ICondos } from '@/services/condosForSale/types';
import Link from 'next/link';
import Image from 'next/image';
import Overlay from '@/components/Atoms/Overlay/Overlay';

const PropertyCard = ({
  slug,
  title,
  description,
  nearestLandmark,
  price,
  status,
  image,
  category
}: ICondos) => {

  return (
    <li className="group/property-card bg-white w-full rounded-md shadow-lg hover:shadow-xl duration-200 relative"> 
      <div className='flex flex-col relative w-full h-52 rounded-tl-md rounded-tr-md overflow-hidden'>
        <Image 
          src={image} 
          alt={title}
          fill 
          loading="lazy"
          className="group-hover/property-card:scale-[1.20] duration-300 object-cover" 
        />
        <Overlay color="bg-slate-950/50"/>
        <ul className="flex gap-x-1">
          <li className={
            `text-xs font-normal absolute top-3 right-3 rounded-2xl p-2 text-white
            ${!status.includes('Sold-out') ? 'bg-blue-600' : 'bg-red-500'} 
            `}
          >
            {status}
          </li>
        </ul>
        <div className="absolute bottom-4 left-4 max-w-[80%]">
          <h6 className='text-yellow-300 text-sm font-semibold uppercase'>
            {category}
          </h6>
          <p className='text-white text-base'>
            {price}
          </p>
        </div>
      </div>
      <div className="px-4 pb-8 pt-6">
        <p className="text-slate-900 text-xl font-semibold">
          {title}
        </p>
        <p className='text-slate-400 text-sm mb-4'>
          {nearestLandmark}
        </p>
        <p className='text-slate-900 text-base mb-6 line-clamp-6'>
          {description}
        </p>
        <Link 
          href={`/condos-for-sale/${slug}`} 
          replace={true}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-3 text-white text-xs font-semibold flex rounded-md w-fit duration-100"
        >
          More Details
        </Link>
      </div>
    </li>
  )
}

export default PropertyCard;