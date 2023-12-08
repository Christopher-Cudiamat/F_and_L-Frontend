import React from "react";
import { type IProperties } from "@/services/properties/types";
import PropertyCard from "@/components/Molecules/PropertyCard/PropertyCard.component";
import CardsContainer from "@/components/Molecules/CardsContainer/CardsContainer";
import { getPropertiesByCategory } from "@/services/properties/getPropertiesByCategory";
// import { categories } from '@/components/Molecules/CategoryFilter/CategoryFilter';
import Hero from "@/components/Molecules/Hero/Hero";
import { slugParser } from "@/utils/slugParser";
import ContactUsBanner from "@/components/Molecules/ContactUsBanner/ContactUsBanner";
import { categories } from "@/components/Molecules/CategoryFilter/config";
import SectionTitle from "@/components/Molecules/SectionTitle/SectionTitle";
import CategoryFilter from "@/components/Molecules/CategoryFilter/CategoryFilter";

interface IPropertyCategoryPageParams {
  slug: string;
}

interface IPropertyCategoryPageProps {
  params: IPropertyCategoryPageParams;
}

export async function generateStaticParams(): Promise<any> {
  return categories.map((item) => ({ slug: item.slug }));
}

const PropertyCategoryPage: React.FC<IPropertyCategoryPageProps> = async ({ params: { slug } }) => {
  const results = await getPropertiesByCategory(slug);

  return (
    <React.Fragment>
      <Hero
        title={slugParser(slug)}
        subtitle='Discover all available properties for you'
        image={"/images/property-categories-hero.png"}
        altText='Property'
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
      <section
        className='bg-white pt-10 pb-14 md:py-14'
        id='section-category'
      >
        <SectionTitle
          title='Property Categories'
          withLine
        />
        <CategoryFilter />
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

export default PropertyCategoryPage;
