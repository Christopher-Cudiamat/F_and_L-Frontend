import { fetchProperty } from "./fetchProperties";
import { toProperty } from "./toProperties";
import { type IPropertiesList } from "./types";

// Retrieve featured condos for sale
export const getPropertiesByCategory = async (
  category: string
): Promise<IPropertiesList | null> => {
  const formattedCategory = `${category[0].toUpperCase()}${category.slice(1).split("-").join(" ")}`;

  const { data } = await fetchProperty({
    filters: { category: { $eq: formattedCategory } },
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
    condos: data.map(toProperty),
  };
};
