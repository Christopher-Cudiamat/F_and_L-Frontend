import React from 'react';
import { getCondos } from '@/services/condosForSale/getCondos';
import { ICondos } from '@/services/condosForSale/types';
import PropertyCard from '@/components/Molecules/PropertyCard/PropertyCard.component';
import Pagination from '@/components/Molecules/Pagination/Pagination';
import CardsContainer from '@/components/Molecules/CardsContainer/CardsContainer';
import Hero from '@/components/Molecules/Hero/Hero';
import ContactUsBanner from '@/components/Molecules/ContactUsBanner/ContactUsBanner';

interface ISearchParams {
  searchParams: {page?: string};
}

const pageSize = 8;

const CondosForSalePage = async ({searchParams}: ISearchParams) => {
  const page = parsePageParam(searchParams.page);
  const results = await getCondos(pageSize, page);

  return (
    <React.Fragment>
      <Hero
        title="Properties"
        subtitle="Discover all available properties for you"
        image="/images/properties-hero.png"
        altText="Property"
        height="md"
      />
      <section className="bg-white pt-10 lg:pt-20 pb-10">
        <CardsContainer>
          {results?.condos.map((item: ICondos) => (
              <PropertyCard key={item.slug} {...item}/>
            ))
          }
        </CardsContainer>
        <Pagination
          pageCount={results?.pageCount}
          page={page}
          path='/condos-for-sale'
        />
      </section>
      <section className="pb-20">
        <ContactUsBanner 
          image="/images/real-estate-agents.png" 
          altText="Real estate agents"
        />
      </section>
    </React.Fragment>
  )
};

export default CondosForSalePage;

function parsePageParam(value: string | undefined) {
  if(value) {
    const page = parseInt(value);
    if(isFinite(page) && page > 0) {
      return page;
    }
  }
  return 1;
}