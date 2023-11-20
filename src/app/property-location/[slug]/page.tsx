import { getCondosByLocation } from '@/services/condosForSale/getCondosByLocation';
import Link from 'next/link';
import { getSlugs } from '@/services/condosForSale/getSlugs';
import React from 'react';
import Container from '@/components/Atoms/Container/Container';
import { ICondos } from '@/services/condosForSale/types';
import PropertyCard from '@/components/Molecules/PropertyCard/PropertyCard.component';
import CardsContainer from '@/components/Molecules/CardsContainer/CardsContainer';

interface IPropertyLocationPageParams {
  slug: string;
}

interface IPropertyLocationPageProps {
  params: IPropertyLocationPageParams;
}

export async function generateStaticParams(): Promise<any> {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PropertyLocationPage({ params: { slug }}: IPropertyLocationPageProps) {
  const results = await getCondosByLocation(slug);

  return (
    <section className="bg-gray-100 pt-10 pb-20">
      <CardsContainer>
        {results?.condos.map((item: ICondos) => (
            <PropertyCard key={item.slug} {...item}/>
          ))
        }
      </CardsContainer>
    </section>
  )
}