import CardsContainer from "@/components/Molecules/CardsContainer/CardsContainer";
import LocationCard from "@/components/Molecules/LocationCard/LocationCard";
import { fetchPropertyLocations } from "@/services/property-location/fetchPropertyLocations";

export default async function PropertyLocationsPage() {
  const propertyLocations = await fetchPropertyLocations(100);

  return (
    <div>
      <section className="bg-white pt-10 pb-20">
        <CardsContainer>
          {propertyLocations.map((item: ILocation) => (
              <LocationCard key={item.slug} {...item}/>
            ))
          }
        </CardsContainer>
      </section>
    </div>
  )
}
