import PropertyCard from "@/components/Molecules/PropertyCard/PropertyCard.component";
import { getFeaturedCondos } from "@/services/condosForSale/getFeaturedCondos";
import { ICondos } from '@/services/condosForSale/types';
import Container from '@/components/Atoms/Container/Container';
import SectionTitle from "@/components/Molecules/SectionTitle/SectionTitle";

const SectionFeaturedProperties = async() => {
  const featuredCondos = await getFeaturedCondos();
  return (
    <section className="bg-gray-900 py-40">
      <Container>
        <SectionTitle
          title="Best selling properties"
          ButtonLabel="View all"
          href="/condos-for-sale"
        />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            featuredCondos?.condos.map((item: ICondos) => (
              <PropertyCard key={item.slug} {...item}/>
            ))
          }
        </ul>
      </Container>
    </section>
  )
}

export default SectionFeaturedProperties;