import React from "react";
import { getPropertiesByLocation } from "@/services/properties/getPropertiesByLocation";
import { getSlugs } from "@/services/properties/getSlugs";
import { type IProperties } from "@/services/properties/types";
import PropertyCard from "@/components/Molecules/PropertyCard/PropertyCard.component";
import CardsContainer from "@/components/Molecules/CardsContainer/CardsContainer";
import Hero from "@/components/Molecules/Hero/Hero";
import { slugParser } from "@/utils/slugParser";
import ContactUsBanner from "@/components/Molecules/ContactUsBanner/ContactUsBanner";

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

const PropertyLocationPage: React.FC<IPropertyLocationPageProps> = async ({ params: { slug } }) => {
  const results = await getPropertiesByLocation(slug);

  return (
    <React.Fragment>
      <Hero
        title={slugParser(slug)}
        image={"/images/property-locations-hero.png"}
        altText='Property locations'
        height='md'
      />
      <section className='bg-gray-100 py-20'>
        <CardsContainer>
          {results?.condos.map((item: IProperties) => (
            <PropertyCard
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
};

export default PropertyLocationPage;
