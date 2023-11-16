import qs from 'qs';
import { ICmsItem } from '../condosForSale/types';

const CMS_URL = process.env.CMS_URL;

export async function fetchPropertyLocations(pageSize: number = 2) {
  const url = `${CMS_URL}/api/property-locations?${qs.stringify({
    fields: [
      'slug',
      'location',
    ],
    populate: { image: { fields: ['url'] } },
    pagination: { pageSize }
  }, { encodeValuesOnly: true })}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }

  const { data } = await response.json();

  return data.map((item: ICmsItem) => ({
    slug: item.attributes.slug,
    location: item.attributes.location,
    // image: new URL(item.attributes.image.data.attributes.url, process.env.CMS_URL).href
  }));
}