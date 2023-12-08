import { fetchProperty } from "./fetchProperties";
import { toProperty } from "./toProperties";
import { type IPropertiesList } from "./types";

// Retrieve all condos for sale
export const getProperties = async (
  pageSize: number = 100,
  page: number = 1
): Promise<IPropertiesList | null> => {
  const { data, meta } = await fetchProperty({
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
    pagination: { pageSize, page },
  });

  return {
    pageCount: meta.pagination.pageCount,
    condos: data.map(toProperty),
  };
};
