import { fetchProperty } from "./fetchProperties";
import { toProperty } from "./toProperties";
import { type IPropertiesList } from "./types";

// Retrieve filtered condos for sale
export const getFilteredProperties = async (
  location: string,
  status: string
): Promise<IPropertiesList | null> => {
  const { data } = await fetchProperty({
    filters: {
      $and: [{ location: { $containsi: location } }, { status: { $containsi: status } }],
    },
    fields: [
      "slug",
      "title",
      "description",
      "nearestLandmark",
      "status",
      "maxPrice",
      "minPrice",
      "category",
      "location",
    ],
    populate: { image: { fields: ["url"] } },
    pagination: { pageSize: 6 },
  });

  return {
    pageCount: 30,
    condos: data.map(toProperty),
  };
};
