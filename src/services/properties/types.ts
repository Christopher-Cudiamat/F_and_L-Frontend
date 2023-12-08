export interface IProperties {
  slug: string;
  title: string;
  description: string;
  status: string[];
  minPrice: string;
  maxPrice: string;
  image: string;
  category: string;
  location?: string;
  nearestLandmark?: string;
}

export interface IProperty extends IProperties {
  gallery: string[];
  amenities: string[];
  amenitiesDescription: string;
  lobbyDescription: string;
  unitDescription: string;
  units: string[];
  address: string;
  logo?: string;
}

export interface ICmsItem {
  id: number;
  attributes: any;
}

export interface IPropertiesList {
  pageCount: number;
  condos: IProperties[];
}
