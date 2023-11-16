import { fetchCondo } from './fetchCondo';
import { toCondo } from './toCondo';
import { ICondosList } from './types';

//Retrieve all condos for sale
export const getCondos = async (): Promise<ICondosList | null> => {
  const { data } = await fetchCondo({
    fields: [
      'slug',
      'title',
      'description',
      'location',
      'price',
    ],
    populate: { hero: { fields: ['url'] } },
    pagination: { pageSize: 100 }
  })

  return {
    pagesCount: 30,
    condos: data.map(toCondo),
  }
}