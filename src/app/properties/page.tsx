import React from "react";
import { getCondos } from "@/services/condosForSale/getCondos";
import { type ICondos } from "@/services/condosForSale/types";
import PropertyCard from "@/components/Molecules/PropertyCard/PropertyCard.component";
import Pagination from "@/components/Molecules/Pagination/Pagination";
import CardsContainer from "@/components/Molecules/CardsContainer/CardsContainer";
import Hero from "@/components/Molecules/Hero/Hero";
import ContactUsBanner from "@/components/Molecules/ContactUsBanner/ContactUsBanner";
import SectionTitle from "@/components/Molecules/SectionTitle/SectionTitle";
import CategoryFilter from "@/components/Molecules/CategoryFilter/CategoryFilter";
import Filters from "@/components/Molecules/Filters/Filters";

interface ISearchParams {
  searchParams: { page?: string };
}

const pageSize = 8;

const PropertiesPage: React.FC<ISearchParams> = async ({ searchParams }) => {
  const page = parsePageParam(searchParams.page);
  const results = await getCondos(pageSize, page);

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
        <CardsContainer>
          {results?.condos.map((item: ICondos) => (
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
          title='What are you looking for?'
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

function parsePageParam(value: string | undefined): number {
  if (value) {
    const page = parseInt(value);
    if (isFinite(page) && page > 0) {
      return page;
    }
  }
  return 1;
}
