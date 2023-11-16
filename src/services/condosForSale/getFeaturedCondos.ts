import { fetchCondo } from './fetchCondo';
import { toCondo } from './toCondo';
import { ICondosList } from './types';

//Retrieve featured condos for sale
export const getFeaturedCondos = async (): Promise<ICondosList | null> => {
  const { data } = await fetchCondo({
    filters:{ isFeatured: {$eq: true} },
    fields: [
      'slug',
      'title',
      'description',
      'nearestLandmark',
      'status',
      'price',
      'type'
    ],
    populate: { hero: { fields: ['url'] } },
    pagination: { pageSize: 4 }
  })

  return {
    pagesCount: 30,
    condos: data.map(toCondo),
  }
}