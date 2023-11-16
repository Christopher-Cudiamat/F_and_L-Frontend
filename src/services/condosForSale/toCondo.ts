import { ICondos, ICmsItem } from "./types";

export function toCondo(item: ICmsItem): ICondos {
  const { attributes } = item;
  return {
    slug: attributes.slug,
    title: attributes.title,
    description: attributes.description,
    status: attributes.status,
    nearestLandmark: attributes.nearestLandmark,
    price: attributes.price,
    type: attributes.type,
    image: new URL(attributes.hero.data.attributes.url, process.env.CMS_URL).href
  };
}