import { fetchPropertyLocations } from "@/services/property-location/fetchPropertyLocations";
import Link from "next/link";


export default async function HomePage() {
  const propertyLocations = await fetchPropertyLocations();
  console.log('test2',propertyLocations)
  return (
    <div>
      {
        propertyLocations.map((item: any) => (
          <Link key={item.location} href={`/property-locations/${item.slug}`}>
            {item.location}
          </Link>
        ))
      }
      <Link href={'/property-locations'}>
        SEE ALL
      </Link>
    </div>
  )
}
