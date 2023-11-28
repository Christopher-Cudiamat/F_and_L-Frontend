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
  amenities: string[];
  units: string[];
  address: string;
  logo?: string;
}

export interface ICmsItem {
  id: number;
  attributes: any;
}

export interface ICondosList {
  pageCount: number;
  condos: ICondos[];
}
