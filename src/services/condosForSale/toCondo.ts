import { type ICondos, type ICmsItem } from './types';

export function toCondo(item: ICmsItem): ICondos {
  const { attributes } = item;

  return {
    slug: attributes.slug,
    title: attributes.title,
    description: attributes.description,
    status: attributes.status,
    nearestLandmark: attributes.nearestLandmark,
    price: attributes.price,
    category: attributes.category,
    image: new URL(attributes.image.data.attributes.url, process.env.CMS_URL).href,
  };
}
