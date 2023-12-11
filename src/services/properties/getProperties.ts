import { fetchProperty } from "./fetchProperties";
import { toProperty } from "./toProperties";
import { type IPropertiesList } from "./types";

// Retrieve all condos for sale
export const getProperties = async (
  pageSize: number = 100,
  page: number = 1,
  location?: string,
  status?: string,
  order?: string
): Promise<IPropertiesList | null> => {
  const { data, meta } = await fetchProperty({
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
    ],
    populate: { image: { fields: ["url"] } },
    pagination: { pageSize, page },
    sort: [order && `minPrice:${order}`],
  });

  return {
    pageCount: meta.pagination.pageCount,
    condos: data.map(toProperty),
  };
};
