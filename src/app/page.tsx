import React from "react";
import { fetchPropertyLocations } from "@/services/property-location/fetchPropertyLocations";
import { getFeaturedCondos } from "@/services/condosForSale/getFeaturedCondos";
import { ICondos } from "@/services/condosForSale/types";
import Container from "@/components/Atoms/Container/Container";
import SectionTitle from "@/components/Molecules/SectionTitle/SectionTitle";
import LocationCard from "@/components/Molecules/LocationCard/LocationCard";
import PropertyCard from "@/components/Molecules/PropertyCard/PropertyCard.component";

export default async function HomePage() {
  const featuredLocations = await fetchPropertyLocations(8);
  const featuredCondos = await getFeaturedCondos();

  return (
    <React.Fragment>
      <section className="bg-gray-100 pt-10 pb-20">
        <Container>
          <SectionTitle
            title="Best selling properties"
            ButtonLabel="View all"
            href="/condos-for-sale"
          />
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredCondos?.condos.map((item: ICondos) => (
                <PropertyCard key={item.slug} {...item}/>
              ))
            }
          </ul>
        </Container>
      </section>
      <section className="bg-white pt-10 pb-20">
        <Container>
          <SectionTitle
            title="Top property locations"
            ButtonLabel="View all"
            href="/property-location"
          />
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
            {featuredLocations.map((item: ILocation) => (
                <LocationCard key={item.slug} {...item}/>
              ))
            }
          </ul>
        </Container>
      </section>
    </React.Fragment>
  )
}
