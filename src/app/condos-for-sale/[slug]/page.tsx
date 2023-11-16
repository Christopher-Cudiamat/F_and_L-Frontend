import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getCondo } from '@/services/condosForSale/getCondo';
import { getSlugs } from '@/services/condosForSale/getSlugs';

interface ICondoForSalePageParams {
  slug: string;
}

interface ICondoForSalePageProps {
  params: ICondoForSalePageParams;
}

export async function generateStaticParams(): Promise<ICondoForSalePageParams[]> {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug }}: ICondoForSalePageProps): Promise<Metadata> {
  const condo = await getCondo(slug);
  if (!condo) {
    notFound()
  }
  return {
    title: condo.title,
  };
}

export default async function CondoForSalePage({ params: { slug }}: ICondoForSalePageProps) {
  const condo = await getCondo(slug);
  console.log("CONDO",condo)
  return (
    <div>
      <h1>{condo?.title}</h1>
    </div>
  )
};