import { fetchProperty } from "./fetchProperties";
import { type ICmsItem } from "./types";

export const getSlugs = async (): Promise<string[]> => {
  const { data } = await fetchProperty({
    fields: ["slug"],
    sort: ["publishedAt:desc"],
    pagination: { pageSize: 100 },
  });

  return data.map((item: ICmsItem) => item.attributes.slug);
};
