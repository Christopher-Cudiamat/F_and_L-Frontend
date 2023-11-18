import React from 'react';
import { getCondos } from '@/services/condosForSale/getCondos';
import { ICondos } from '@/services/condosForSale/types';
import PropertyCard from '@/components/Molecules/PropertyCard/PropertyCard.component';
import Container from '@/components/Atoms/Container/Container';
import Pagination from '@/components/Molecules/Pagination/Pagination';

interface ISearchParams {
  searchParams: {page?: string};
}

const pageSize = 8;

const CondosForSalePage = async ({searchParams}: ISearchParams) => {
  const page = parsePageParam(searchParams.page);
  const results = await getCondos(pageSize, page);

  return (
    <React.Fragment>
      <section className="bg-white pt-10 pb-20">
        <Container>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
            {results?.condos.map((item: ICondos) => (
                <PropertyCard key={item.slug} {...item}/>
              ))
            }
          </ul>
          <Pagination
            pageCount={results?.pageCount}
            page={page}
          />
        </Container>
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