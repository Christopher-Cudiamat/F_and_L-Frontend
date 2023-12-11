import React from "react";
import { getProperties } from "@/services/properties/getProperties";
import { type IProperties } from "@/services/properties/types";
import PropertyCard from "@/components/Molecules/PropertyCard/PropertyCard.component";
import Pagination from "@/components/Molecules/Pagination/Pagination";
import CardsContainer from "@/components/Molecules/CardsContainer/CardsContainer";
import Hero from "@/components/Molecules/Hero/Hero";
import ContactUsBanner from "@/components/Molecules/ContactUsBanner/ContactUsBanner";
import SectionTitle from "@/components/Molecules/SectionTitle/SectionTitle";
import CategoryFilter from "@/components/Molecules/CategoryFilter/CategoryFilter";
import Filters from "@/components/Molecules/Filters/Filters";
import { parsePageParam } from "@/utils/parsePageParam";
import FilterResult from "@/components/Molecules/FilterResult/FilterResult";

interface ISearchParams {
  searchParams: { page?: string; location?: string; status?: string; order?: string };
}

const pageSize = 8;

const PropertiesPage: React.FC<ISearchParams> = async ({ searchParams }) => {
  const page = parsePageParam(searchParams.page);
  const { location, status, order } = searchParams;
  const results = await getProperties(pageSize, page, location, status, order);

  return (
    <React.Fragment>
      <Hero
        title='Properties'
        subtitle='Discover all available properties for you'
        image='/images/properties-hero.png'
        altText='Property'
        height='md'
      />
      <Filters />
      <section className='bg-white pt-10 lg:pt-20 pb-10'>
        <FilterResult />
        <CardsContainer>
          {results?.condos.map((item: IProperties) => (
            <PropertyCard
              key={item.slug}
              {...item}
            />
          ))}
        </CardsContainer>
        <Pagination
          pageCount={results?.pageCount}
          page={page}
          path='/properties'
        />
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

export default PropertiesPage;
