export interface ICondos {
  slug: string;
  title: string;
  description: string;
  status: string[];
  price: string;
  image: string;
  category: string;
  location?: string;
  nearestLandmark?: string;
}

export interface ICondo extends ICondos {
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
  pageCount: number;
  condos: ICondos[];
}