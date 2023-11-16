export interface ICondos {
  slug: string;
  title: string;
  description: string;
  location: string;
  price: string;
  heroImg: string;
  nearestLandmark?: string;
}

export interface ICondo extends ICondos {
  type: string;
  status: string;
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