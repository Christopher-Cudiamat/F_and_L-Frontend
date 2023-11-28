import { fetchCondo } from './fetchCondo';
import { toCondo } from './toCondo';
import { ICondo } from './types';

//Retrieve a single for sale
export const getCondo = async (slug: string): Promise<ICondo | null> => {
  const { data } = await fetchCondo({
    filters: { slug: { $eq: slug } },
    fields: [
      'slug',
      'title',
      'description',
      'location',
      'price',
      'description',
      'location',
      'amenities',
      'units',
      'address',
      'status',
      'nearestLandmark',
      'category',
    ],
    populate: {
      gallery: { fields: ['url'] },
      image: { fields: ['url'] },
      logo: { fields: ['url'] },
    },
    pagination: { pageSize: 1, withCount: false },
  });

  if (data.length === 0) {
    return null;
  }
  const item = data[0];

  return {
    gallery: item.attributes.gallery.data.map(
      (item: any) => new URL(item.attributes.url, process.env.CMS_URL).href
    ),
    address: item.attributes.address,
    amenities: item.attributes.amenities,
    units: item.attributes.units,
    logo: new URL(item.attributes.logo.data.attributes.url, process.env.CMS_URL).href,
    ...toCondo(item),
  };
};
