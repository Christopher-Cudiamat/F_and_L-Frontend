import { fetchCondo } from "./fetchCondo";
import { toCondo } from "./toCondo";
import { type ICondosList } from "./types";

// Retrieve featured condos for sale
export const getCondosByLocation = async (location: string): Promise<ICondosList | null> => {
  const formattedLocation = location
    .split("-")
    .map((item: string) => item[0].toUpperCase() + item.slice(1))
    .join(" ");

  const { data } = await fetchCondo({
    filters: { location: { $eq: formattedLocation } },
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
  });

  return {
    pageCount: 30,
    condos: data.map(toCondo),
  };
};
