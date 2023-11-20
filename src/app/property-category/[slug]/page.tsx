import React from 'react';
import { ICondos } from '@/services/condosForSale/types';
import PropertyCard from '@/components/Molecules/PropertyCard/PropertyCard.component';
import CardsContainer from '@/components/Molecules/CardsContainer/CardsContainer';
import { getCondosByCategory } from '@/services/condosForSale/getCondosByCategory';
import { categories } from '@/components/Molecules/CategoryFilter/CategoryFilter';

interface IPropertyCategoryPageParams {
  slug: string;
}

interface IPropertyCategoryPageProps {
  params: IPropertyCategoryPageParams;
}

export async function generateStaticParams(): Promise<IPropertyCategoryPageParams[]> {
  return categories.map((item) => ({ slug: item.slug }));
}

export default async function PropertyCategoryPage({ params: { slug }}: IPropertyCategoryPageProps) {
  const results = await getCondosByCategory(slug);

  return (
    <section className="bg-gray-100 pt-10 pb-20">
      <CardsContainer>
        {results?.condos.map((item: ICondos) => (
            <PropertyCard key={item.slug} {...item}/>
          ))
        }
      </CardsContainer>
    </section>
  )
}