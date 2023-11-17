import { getCondosByLocation } from '@/services/condosForSale/getCondosByLocation';
import Link from 'next/link';
// import { getSlugs } from '@/services/condosForSale/getSlugs';
import React from 'react';

interface IPropertyLocationPageParams {
  slug: string;
}

interface IPropertyLocationPageProps {
  params: IPropertyLocationPageParams;
}

// export async function generateStaticParams(): Promise<IPropertyLocationPageProps[]> {
//   const slugs = await getSlugs();
//   return slugs.map((slug) => ({ slug }));
// }

export default async function PropertyLocationPage({ params: { slug }}: any) {
  const results = await getCondosByLocation(slug);

  return (
    <>
    {
      results?.condos.map((item: any) => (
        <Link key={item.location} href={`/condos-for-sale/${item.slug}`}>
          {item.location} {item.title}
        </Link>
      ))
    }
    </>
  )
}