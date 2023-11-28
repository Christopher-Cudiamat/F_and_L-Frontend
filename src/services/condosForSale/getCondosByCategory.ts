import { fetchCondo } from './fetchCondo';
import { toCondo } from './toCondo';
import { ICondosList } from './types';

//Retrieve featured condos for sale
export const getCondosByCategory = async (category: string): Promise<ICondosList | null> => {
  const formattedCategory = `${category[0].toUpperCase()}${category.slice(1).split('-').join(' ')}`;
  console.log('formattedCategory2', formattedCategory);
  const { data } = await fetchCondo({
    filters: { category: { $eq: formattedCategory } },
    fields: ['slug', 'title', 'description', 'nearestLandmark', 'status', 'price', 'category'],
    populate: { image: { fields: ['url'] } },
  });

  return {
    pageCount: 30,
    condos: data.map(toCondo),
  };
};
