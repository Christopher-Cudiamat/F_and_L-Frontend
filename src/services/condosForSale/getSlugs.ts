import { fetchCondo } from './fetchCondo';
import { ICmsItem } from './types';

export const getSlugs = async (): Promise<string[]> => {
  const { data } = await fetchCondo({
    fields: ['slug'],
    sort: ['publishedAt:desc'],
    pagination: { pageSize: 100 },
  });

  return data.map((item: ICmsItem) => item.attributes.slug);
};
