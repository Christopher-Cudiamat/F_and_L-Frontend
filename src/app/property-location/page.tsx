import React from "react";
import Hero from "@/components/Molecules/Hero/Hero";
import LocationCard from "@/components/Molecules/LocationCard/LocationCard";
import {
  type ILocation,
  fetchPropertyLocations,
} from "@/services/property-location/fetchPropertyLocations";
import ContactUsBanner from "@/components/Molecules/ContactUsBanner/ContactUsBanner";
import Container from "@/components/Atoms/Container/Container";

const PropertyLocationsPage: React.FC = async () => {
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
        <Container>
          <ul className='flex flex-col md:grid md:grid-cols-3 md:grid-rows-5 md:grid-flow-row gap-x-4 h-auto md:h-[600px]'>
            {propertyLocations.map((item: ILocation, index: number) => (
              <LocationCard
                key={item.slug}
                index={index}
                {...item}
              />
            ))}
          </ul>
        </Container>
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
};

export default PropertyLocationsPage;
