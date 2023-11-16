import { fetchCondo } from './fetchCondo';
import { toCondo } from './toCondo';
import { ICondosList } from './types';

//Retrieve featured condos for sale
export const getCondosByLocation = async (location: string): Promise<ICondosList | null> => {
  const formattedLocation = location
    .split('-')
    .map((item: string) => item[0].toUpperCase() + item.slice(1))
    .join(' ');
  console.log('formattedLocation',formattedLocation)
  const { data } = await fetchCondo({
    filters:{ location: {$eq: formattedLocation} },
    fields: [
      'slug',
      'title',
      'description',
      'location',
      'price',
    ],
    populate: { hero: { fields: ['url'] } },
  })

  return {
    pagesCount: 30,
    condos: data.map(toCondo),
  }
}