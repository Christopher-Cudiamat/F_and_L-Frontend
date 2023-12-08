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
        <Container className='flex flex-col lg:flex-row items-center justify-center lg:justify-start text-lg md:text-xl gap-4 mb-10'>
          <IoFilterSharp
            size={50}
            className='text-slate-700'
          />
          <p className='text-slate-500 text-center'>
            {hasResults ? "Filter results for " : "No results found for "}
            <span className='capitalize font-semibold'>{`"${location}${
              location && status ? "/" : ""
            }${status === "rfo" ? status.toUpperCase() : status}"`}</span>
          </p>
        </Container>
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
