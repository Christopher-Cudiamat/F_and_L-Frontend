import React from "react";
import { fetchPropertyLocations } from "@/services/property-location/fetchPropertyLocations";
import { getFeaturedCondos } from "@/services/condosForSale/getFeaturedCondos";
import { ICondos } from "@/services/condosForSale/types";
import SectionTitle from "@/components/Molecules/SectionTitle/SectionTitle";
import LocationCard from "@/components/Molecules/LocationCard/LocationCard";
import PropertyCard from "@/components/Molecules/PropertyCard/PropertyCard.component";
import CardsContainer from "@/components/Molecules/CardsContainer/CardsContainer";
import CategoryFilter from "@/components/Molecules/CategoryFilter/CategoryFilter";
import ContactUsBanner from "@/components/Molecules/ContactUsBanner/ContactUsBanner";
import AboutUsBanner from "@/components/Molecules/AboutUsBanner/AboutUsBanner";

export default async function HomePage() {
  const featuredLocations = await fetchPropertyLocations(8);
  const featuredCondos = await getFeaturedCondos();

  return (
    <React.Fragment>
      <section className="bg-white py-16 md:py-20">
        <SectionTitle title="What are you looking for?"/>
        <CategoryFilter />
      </section>
      <section className="bg-slate-100 pt-10 pb-20">
        <SectionTitle
          title="Best selling properties"
          ButtonLabel="View all"
          href="/condos-for-sale"
        />
        <CardsContainer>
          {featuredCondos?.condos.map((item: ICondos) => (
              <PropertyCard key={item.slug} {...item}/>
            ))
          }
        </CardsContainer>
      </section>
      <ContactUsBanner 
        image="/images/real-estate-agents.png" 
        altText="Real estate agents"
      />
      <section className="bg-white pt-10 pb-20">
        <SectionTitle
          title="Top property locations"
          ButtonLabel="View all"
          href="/property-location"
        />
        <CardsContainer>
          {featuredLocations.map((item: ILocation) => (
              <LocationCard key={item.slug} {...item}/>
            ))
          }
        </CardsContainer>
      </section>
      <AboutUsBanner />
    </React.Fragment>
  )
}
