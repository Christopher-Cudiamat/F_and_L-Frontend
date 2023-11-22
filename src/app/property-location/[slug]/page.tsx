import React from 'react';
import { getCondosByLocation } from '@/services/condosForSale/getCondosByLocation';
import { getSlugs } from '@/services/condosForSale/getSlugs';
import { ICondos } from '@/services/condosForSale/types';
import PropertyCard from '@/components/Molecules/PropertyCard/PropertyCard.component';
import CardsContainer from '@/components/Molecules/CardsContainer/CardsContainer';
import Hero from '@/components/Molecules/Hero/Hero';
import { slugParser } from '@/utils/slugParser';

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
    <React.Fragment>
      <Hero
        title={slugParser(slug)}
        image={"/images/property-locations-hero.png"}
        altText="Property locations"
        height="md"
      />
      <section className="bg-gray-100 pt-20 pb-20">
        <CardsContainer>
          {results?.condos.map((item: ICondos) => (
              <PropertyCard key={item.slug} {...item}/>
            ))
          }
        </CardsContainer>
      </section>
    </React.Fragment>
  )
}