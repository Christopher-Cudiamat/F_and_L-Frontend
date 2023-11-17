import React from 'react';
import { getCondos } from '@/services/condosForSale/getCondos';
import { ICondos } from '@/services/condosForSale/types';
import PropertyCard from '@/components/Molecules/PropertyCard/PropertyCard.component';
import Container from '@/components/Atoms/Container/Container';

const CondosForSalePage = async () => {
  const results = await getCondos();
  console.log('[CONDOS-RENDERING]------>',results?.condos.map((review: any) => review.slug).join(', '))
  console.log('results?.condos',results?.condos)
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
        </Container>
      </section>
    </React.Fragment>
  )
}

export default CondosForSalePage;