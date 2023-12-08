import { fetchCondo } from "./fetchCondo";
import { toCondo } from "./toCondo";
import { type ICondosList } from "./types";

// Retrieve featured condos for sale
export const getFeaturedCondos = async (): Promise<ICondosList | null> => {
  const { data } = await fetchCondo({
    filters: { isFeatured: { $eq: true } },
    fields: [
      "slug",
      "title",
      "description",
      "nearestLandmark",
      "status",
      "maxPrice",
      "minPrice",
      "category",
    ],
    populate: { image: { fields: ["url"] } },
    pagination: { pageSize: 6 },
  });

  return {
    pageCount: 30,
    condos: data.map(toCondo),
  };
};
