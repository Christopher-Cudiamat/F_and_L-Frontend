import { fetchProperty } from "./fetchProperties";
import { toProperty } from "./toProperties";
import { type IProperty } from "./types";

// Retrieve a single for sale
export const getProperties = async (slug: string): Promise<IProperty | null> => {
  const { data } = await fetchProperty({
    filters: { slug: { $eq: slug } },
    fields: [
      "slug",
      "title",
      "description",
      "location",
      "maxPrice",
      "minPrice",
      "description",
      "location",
      "amenities",
      "units",
      "address",
      "status",
      "nearestLandmark",
      "category",
      "amenitiesDescription",
      "unitDescription",
      "lobbyDescription",
    ],
    populate: {
      gallery: { fields: ["url"] },
      image: { fields: ["url"] },
      logo: { fields: ["url"] },
    },
    pagination: { pageSize: 1, withCount: false },
  });

  if (data.length === 0) {
    return null;
  }
  const item = data[0];

  return {
    gallery: item.attributes.gallery.data.map(
      (item: any) => new URL(item.attributes.url, process.env.CMS_URL).href
    ),
    address: item.attributes.address,
    amenities: item.attributes.amenities,
    units: item.attributes.units,
    logo: new URL(item.attributes.logo.data.attributes.url, process.env.CMS_URL).href,
    amenitiesDescription: item.attributes.amenitiesDescription,
    unitDescription: item.attributes.unitDescription,
    lobbyDescription: item.attributes.lobbyDescription,
    ...toProperty(item),
  };
};
