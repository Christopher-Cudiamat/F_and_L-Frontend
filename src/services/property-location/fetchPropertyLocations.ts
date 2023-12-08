import qs from "qs";
import { type ICmsItem } from "../properties/types";

const CMS_URL = process.env.CMS_URL;
export const CACHE_TAG_PROPERTY_LOCATION = "property-location";

export interface ILocation {
  slug: string;
  location: string;
  image: string;
  propertyCount: string;
}

export async function fetchPropertyLocations(pageSize: number): Promise<any> {
  const url = `${CMS_URL}/api/property-locations?${qs.stringify(
    {
      fields: ["slug", "location", "propertyCount"],
      populate: { image: { fields: ["url"] } },
      pagination: { pageSize },
    },
    { encodeValuesOnly: true }
  )}`;

  const response = await fetch(url, {
    next: {
      tags: [CACHE_TAG_PROPERTY_LOCATION],
    },
  });
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }

  const { data } = await response.json();

  return data.map((item: ICmsItem) => ({
    slug: item.attributes.slug,
    location: item.attributes.location,
    propertyCount: item.attributes.propertyCount,
    image: new URL(item.attributes.image.data.attributes.url, process.env.CMS_URL).href,
  }));
}
