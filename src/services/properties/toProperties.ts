import { type IProperties, type ICmsItem } from "./types";

export function toProperty(item: ICmsItem): IProperties {
  const { attributes } = item;

  return {
    slug: attributes.slug,
    title: attributes.title,
    description: attributes.description,
    status: attributes.status,
    nearestLandmark: attributes.nearestLandmark,
    minPrice: attributes.minPrice,
    maxPrice: attributes.maxPrice,
    category: attributes.category,
    image: new URL(attributes.image.data.attributes.url, process.env.CMS_URL).href,
  };
}
