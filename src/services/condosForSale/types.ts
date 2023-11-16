export interface ICondos {
  slug: string;
  title: string;
  description: string;
  status: string[];
  price: string;
  image: string;
  type: string;
  location?: string;
  nearestLandmark?: string;
}

export interface ICondo extends ICondos {
  latitude: string;
  longitude: string;
  gallery: string[];
  body?: string;
  amenities: string[];
  features: string[];
  address: string;
}

export interface ICmsItem {
  id: number;
  attributes: any;
}

export interface ICondosList {
  pagesCount: number;
  condos: ICondos[];
}