import { ICondos, ICmsItem } from "./types";

export function toCondo(item: ICmsItem): ICondos {
  const { attributes } = item;
  return {
    slug: attributes.slug,
    title: attributes.title,
    description: attributes.description,
    location: attributes.location,
    price: attributes.price,
    heroImg: new URL(attributes.hero.data.attributes.url, process.env.CMS_URL).href
  };
}