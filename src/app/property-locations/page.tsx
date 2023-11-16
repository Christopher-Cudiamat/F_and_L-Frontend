import { fetchPropertyLocations } from "@/services/property-location/fetchPropertyLocations";
import Link from "next/link";


export default async function PropertyLocationsPage() {
  const propertyLocations = await fetchPropertyLocations(100);
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
    </div>
  )
}
