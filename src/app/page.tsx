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
import Slider from "@/components/Molecules/Slider/Slider";
import Container from "@/components/Atoms/Container/Container";
import Link from "next/dist/client/link";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";

export default async function HomePage() {
  const featuredLocations = await fetchPropertyLocations(8);
  const featuredCondos = await getFeaturedCondos();

  return (
    <React.Fragment>
      <section className="relative">
        <Slider />
        <Container className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:max-w-[640px] 2xl:max-w-[700px] text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Dream Homes Delivered
          </h1>
          <h2 className="text-base md:text-lg font-semibold mb-12">
            with Easy Access Locations, Resort-Like Amenities, Hotel-Like Service, And Friendly Communities, You Get So Much More To Life Only At SMDC
          </h2>
          <Link 
            className="flex w-fit gap-x-2 items-center mx-auto bg-blue-600 hover:bg-blue-700 rounded-md text-lg font-semibold py-3 px-6" 
            href="#section-category"
          >
            Explore
            <ChevronDoubleDownIcon className="w-4 animate-bounce mt-1"/>
          </Link>
        </Container>
      </section>
      <section className="bg-white pt-10 pb-14 md:py-14" id="section-category">
        <SectionTitle 
          title="What are you looking for?"
          withLine
        />
        <CategoryFilter />
      </section>
      <section className="bg-slate-50 pt-10 pb-20">
        <SectionTitle
          title="Featured properties"
          ButtonLabel="View all"
          href="/condos-for-sale"
          withLine
        />
        <CardsContainer>
          {featuredCondos?.condos.map((item: ICondos) => (
              <PropertyCard key={item.slug} {...item}/>
            ))
          }
        </CardsContainer>
      </section>
      <section className="bg-white py-10">
        <ContactUsBanner 
          image="/images/real-estate-agents.png" 
          altText="Real estate agents"
        />
      </section>
      <section className="bg-white pt-10 pb-20">
        <SectionTitle
          title="Featured locations"
          ButtonLabel="View all"
          href="/property-location"
          withLine
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
