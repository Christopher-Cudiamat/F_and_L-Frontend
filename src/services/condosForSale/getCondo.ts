import { fetchCondo } from "./fetchCondo";
import { toCondo } from './toCondo';
import { ICondo } from "./types";

//Retrieve a single for sale
export const getCondo = async(slug: string): Promise<ICondo | null> => {
  const { data } = await fetchCondo({
    filters: { slug: { $eq: slug} },
      fields: [
        'slug',
        'title',
        'description',
        'location',
        'price',
        'description',
        'latitude',
        'longitude',
        'location',
        'body',
        'amenities',
        'features',
        'address',
        'status',
        'nearestLandmark',
        'category',
      ],
      populate: { 
        gallery: { fields: ['url'] }, 
        image: { fields: ['url'] },
      },
      pagination: { pageSize: 1, withCount: false }
  })

  if (data.length === 0) {
    return null;
  }
  const item = data[0];
  return {
    gallery: item.attributes.gallery.data.map((item: any) => new URL(item.attributes.url, process.env.CMS_URL).href),
    latitude: item.attributes.latitude,
    longitude: item.attributes.longitude,
    body: item.attributes.body,
    address: item.attributes.address,
    amenities: item.attributes.amenities,
    features: item.attributes.features,
    ...toCondo(item) 
  }
}