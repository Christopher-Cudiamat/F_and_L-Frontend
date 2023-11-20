import { getCondosByLocation } from '@/services/condosForSale/getCondosByLocation';
import Link from 'next/link';
import { getSlugs } from '@/services/condosForSale/getSlugs';
import React from 'react';
import Container from '@/components/Atoms/Container/Container';
import { ICondos } from '@/services/condosForSale/types';
import PropertyCard from '@/components/Molecules/PropertyCard/PropertyCard.component';

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
        <Container>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {results?.condos.map((item: ICondos) => (
                <PropertyCard key={item.slug} {...item}/>
              ))
            }
          </ul>
        </Container>
      </section>
  )
}