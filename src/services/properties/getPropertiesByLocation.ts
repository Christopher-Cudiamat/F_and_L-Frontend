import { fetchProperty } from "./fetchProperties";
import { toProperty } from "./toProperties";
import { type IPropertiesList } from "./types";

// Retrieve featured condos for sale
export const getPropertiesByLocation = async (
  location: string
): Promise<IPropertiesList | null> => {
  const formattedLocation = location
    .split("-")
    .map((item: string) => item[0].toUpperCase() + item.slice(1))
    .join(" ");

  const { data } = await fetchProperty({
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
    condos: data.map(toProperty),
  };
};
