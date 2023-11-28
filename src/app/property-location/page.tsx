import React from 'react';
import CardsContainer from '@/components/Molecules/CardsContainer/CardsContainer';
import Hero from '@/components/Molecules/Hero/Hero';
import LocationCard from '@/components/Molecules/LocationCard/LocationCard';
import { fetchPropertyLocations } from '@/services/property-location/fetchPropertyLocations';
import ContactUsBanner from '@/components/Molecules/ContactUsBanner/ContactUsBanner';

export default async function PropertyLocationsPage() {
  const propertyLocations = await fetchPropertyLocations(100);

  return (
    <React.Fragment>
      <Hero
        title='Property Locations'
        subtitle='Prime Locations for your new home'
        image='/images/property-locations-hero.png'
        altText='Property locations'
        height='md'
      />
      <section className='bg-white pt-10 pb-20'>
        <CardsContainer>
          {propertyLocations.map((item: ILocation) => (
            <LocationCard
              key={item.slug}
              {...item}
            />
          ))}
        </CardsContainer>
      </section>
      <section>
        <ContactUsBanner
          image='/images/real-estate-agents.png'
          altText='Real estate agents'
          full
        />
      </section>
    </React.Fragment>
  );
}
