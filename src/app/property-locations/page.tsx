import { fetchPropertyLocations } from "@/services/property-location/fetchPropertyLocations";
import Link from "next/link";


export default async function PropertyLocationsPage() {
  const propertyLocations = await fetchPropertyLocations(100);

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
