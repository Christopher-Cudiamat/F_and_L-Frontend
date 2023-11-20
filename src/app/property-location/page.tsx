import Container from "@/components/Atoms/Container/Container";
import LocationCard from "@/components/Molecules/LocationCard/LocationCard";
import { fetchPropertyLocations } from "@/services/property-location/fetchPropertyLocations";

export default async function PropertyLocationsPage() {
  const propertyLocations = await fetchPropertyLocations(100);

  return (
    <div>
      <section className="bg-white pt-10 pb-20">
        <Container>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
            {propertyLocations.map((item: ILocation) => (
                <LocationCard key={item.slug} {...item}/>
              ))
            }
          </ul>
        </Container>
      </section>
    </div>
  )
}
