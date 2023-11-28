import { fetchCondo } from './fetchCondo';
import { toCondo } from './toCondo';
import { ICondosList } from './types';

//Retrieve all condos for sale
export const getCondos = async (
  pageSize: number = 100,
  page: number = 1
): Promise<ICondosList | null> => {
  const { data, meta } = await fetchCondo({
    fields: ['slug', 'title', 'description', 'nearestLandmark', 'status', 'price', 'category'],
    populate: { image: { fields: ['url'] } },
    pagination: { pageSize, page },
  });

  return {
    pageCount: meta.pagination.pageCount,
    condos: data.map(toCondo),
  };
};
