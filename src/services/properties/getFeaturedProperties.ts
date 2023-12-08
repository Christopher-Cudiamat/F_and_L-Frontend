import { fetchProperty } from "./fetchProperties";
import { toProperty } from "./toProperties";
import { type IPropertiesList } from "./types";

// Retrieve featured condos for sale
export const getFeaturedProperties = async (): Promise<IPropertiesList | null> => {
  const { data } = await fetchProperty({
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
    condos: data.map(toProperty),
  };
};
