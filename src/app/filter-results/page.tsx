import React from "react";
import { type IProperties } from "@/services/properties/types";
import { IoFilterSharp } from "react-icons/io5";
import PropertyCard from "@/components/Molecules/PropertyCard/PropertyCard.component";
import CardsContainer from "@/components/Molecules/CardsContainer/CardsContainer";
import Hero from "@/components/Molecules/Hero/Hero";
import ContactUsBanner from "@/components/Molecules/ContactUsBanner/ContactUsBanner";
import SectionTitle from "@/components/Molecules/SectionTitle/SectionTitle";
import CategoryFilter from "@/components/Molecules/CategoryFilter/CategoryFilter";
import Filters from "@/components/Molecules/Filters/Filters";
import { getFilteredProperties } from "@/services/properties/getFilteredProperties";
import Container from "@/components/Atoms/Container/Container";
import FilterResult from "@/components/Molecules/FilterResult/FilterResult";

interface ISearchParams {
  searchParams: { location: string; status: string };
}

const FilterResultsPage: React.FC<ISearchParams> = async ({ searchParams }) => {
  const { location, status } = searchParams;
  const results = await getFilteredProperties(location, status);
  const hasResults = results?.condos && results?.condos.length > 0;

  return (
    <React.Fragment>
      <Hero
        title=''
        image='/images/properties-hero.png'
        altText='Property'
        height='sm'
      />
      <Filters />
      <section className='bg-white pt-10 lg:pt-20 pb-10 min-h-[200px] lg:min-h-[500px]'>
        <FilterResult
          location={location}
          hasResults={hasResults}
          status={status}
        />
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

export default FilterResultsPage;
