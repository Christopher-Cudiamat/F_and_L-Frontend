import PropertyCard from "@/components/Molecules/PropertyCard/PropertyCard.component";
import { getFeaturedCondos } from "@/services/condosForSale/getFeaturedCondos";
import { ICondos } from '@/services/condosForSale/types';
import Container from '@/components/Atom/Container/Container';


export default async function HomePage() {
  const featuredCondos = await getFeaturedCondos();

  return (
    <section>
      <Container>
        <ul className="flex flex-col lg:flex-row gap-6">
          {
            featuredCondos?.condos.map((item: ICondos) => (
              <li key={item.slug} className="w-full md:w-96">
                <PropertyCard {...item}/>
              </li>
            ))
          }
        </ul>
      </Container>
    </section>
  )
}
