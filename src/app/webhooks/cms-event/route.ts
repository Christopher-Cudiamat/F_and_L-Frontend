import { CACHE_TAG_CONDO } from "@/services/condosForSale/fetchCondo";
import { CACHE_TAG_PROPERTY_LOCATION } from "@/services/property-location/fetchPropertyLocations";
import { revalidateTag } from "next/cache";

export async function POST(request: any) {
  const payload = await request.json();

  if(payload.event === "entry.publish"){
    if(payload.model === CACHE_TAG_CONDO) revalidateTag(CACHE_TAG_CONDO);
    if(payload.model === CACHE_TAG_PROPERTY_LOCATION) revalidateTag(CACHE_TAG_PROPERTY_LOCATION);
  }

  return new Response(null, {status: 204})
}