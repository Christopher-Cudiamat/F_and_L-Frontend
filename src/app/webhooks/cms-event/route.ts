import { revalidateTag } from "next/cache";
import { CACHE_TAG_CONDO } from "@/services/condosForSale/fetchCondo";
import { CACHE_TAG_PROPERTY_LOCATION } from "@/services/property-location/fetchPropertyLocations";

const ENTRY_PUBLISH = "entry.publish";

export async function POST(request: any): Promise<any> {
  const payload = await request.json();

  if (payload.event === ENTRY_PUBLISH) {
    if (payload.model === CACHE_TAG_CONDO) revalidateTag(CACHE_TAG_CONDO);
    if (payload.model === CACHE_TAG_PROPERTY_LOCATION) revalidateTag(CACHE_TAG_PROPERTY_LOCATION);
  }

  return new Response(null, { status: 204 });
}
