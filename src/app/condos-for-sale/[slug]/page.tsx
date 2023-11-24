import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getCondo } from '@/services/condosForSale/getCondo';
import { getSlugs } from '@/services/condosForSale/getSlugs';
import Hero from '@/components/Molecules/Hero/Hero';
import Image from 'next/image';
import Container from '@/components/Atoms/Container/Container';
import { CurrencyDollarIcon, HomeIcon, KeyIcon, MapPinIcon } from '@heroicons/react/24/outline';
import ContactUsBanner from '@/components/Molecules/ContactUsBanner/ContactUsBanner';

interface ICondoForSalePageParams {
  slug: string;
}

interface ICondoForSalePageProps {
  params: ICondoForSalePageParams;
}

export async function generateStaticParams(): Promise<ICondoForSalePageParams[]> {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug }}: ICondoForSalePageProps): Promise<Metadata> {
  const condo = await getCondo(slug);
  if (!condo) {
    notFound()
  }
  return {
    title: condo.title,
  };
}

export default async function CondoForSalePage({ params: { slug }}: ICondoForSalePageProps) {
  const condo = await getCondo(slug);
  console.log("condo-----------------------", condo)
  if (!condo) {
    notFound()
  }

  return (
    <React.Fragment>
      {/* <h1>{condo?.title}</h1> */}
      {/* -Hero
      -details bar
      -descripton
      -unit types
      -amenities
      -features
      -map
      -gallery
      -related property */}
      <section className="bg-white xl:flex xl:container xl:max-w-[1300px] xl:px-4 xl:py-10 mx-auto flex-row-reverse">
        <div className='w-full h-[350px] xl:h-[600px] relative'>
          <Image 
            src={condo.image} 
            alt={`${condo.title} property`}
            fill
            className="w-full h-full duration-300 object-cover shadow-lg" 
          />
        </div>
        <Container className="py-8 text-slate-800 xl:pr-20">
          {condo.logo &&
            <Image 
              src={condo.logo} 
              width={500}
              height={500}
              alt={`${condo.title} logo`} 
              className="w-32 h-auto mb-10" 
            />
          }
          <h1 className="text-4xl xl:text-6xl font-semibold mb-1">{condo.title}</h1>
          <p className='text-base text-slate-700 mb-5'>{condo.category}</p>
          <p className='text-base text-slate-700'>{condo.description}</p>
        </Container>
      </section>
      <section className="bg-white text-white pt-10 pb-20 xl:max-w-[1300px] xl-px-4 mx-auto">
        <Container className="md:grid md:grid-cols-2 xl:grid-cols-4 bg-blue-800 py-10 md:py-16 xl:py-20 flex flex-col gap-y-8 lg:rounded-lg">
          <div className="flex gap-x-2 items-start">
            <MapPinIcon className="w-12 text-blue-400"/>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold mb-1.5">LOCATION</h2>
              <p className="text-base">{condo.address}</p>
            </div>
          </div>
          <div className="flex gap-x-2 items-start">
            <CurrencyDollarIcon className="w-12 text-blue-400"/>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold mb-1.5">PRICE RANGE</h2>
              <p className="text-base">{condo.price}</p>
            </div>
          </div>
          <div className="flex gap-x-2 items-start">
            <HomeIcon className="w-12 text-blue-400"/>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold mb-1.5">UNITS</h2>
              <ul>
                {condo.units.map((item: any) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex gap-x-2 items-start">
            <KeyIcon className="w-12 text-blue-400"/>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold mb-1.5">AMENITIES</h2>
              <ul>
                {condo.amenities.map((item: any) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <ContactUsBanner 
          image="/images/real-estate-agents.png" 
          altText="Real estate agents"
          full
        /> 
      </section>
    </React.Fragment>
  )
};