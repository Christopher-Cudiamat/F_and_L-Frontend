import React from 'react';
import SectionTitle from "@/components/Molecules/SectionTitle/SectionTitle";
import SectionFeaturedProperties from "@/sections/SectionFeaturedProperties/SectionFeaturedProperties";

export default async function HomePage() {
  return (
    <React.Fragment>
      <SectionTitle
        title="Best selling properties"
        ButtonLabel="View all"
        href="/condos-for-sale"
      />
      <SectionFeaturedProperties />
    </React.Fragment>
  )
}
