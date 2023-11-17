import Container from '@/components/Atoms/Container/Container';
import SectionTitle from "@/components/Molecules/SectionTitle/SectionTitle";
import LocationCard from "@/components/Molecules/LocationCard/LocationCard";
import { fetchPropertyLocations } from '@/services/property-location/fetchPropertyLocations';

const SectionFeaturedLocations = async() => {
  const featuredLocations = await fetchPropertyLocations(7);

  return (
    <section className="bg-gray-900 py-40">
      <Container>
        <SectionTitle
              title="Top property locations"
              ButtonLabel="View all"
              href="/property-locations"
            />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            featuredLocations.map((item: any) => (
              <LocationCard key={item.slug} {...item}/>
            ))
          }
        </ul>
      </Container>
    </section>
  )
}

export default SectionFeaturedLocations;