export type BrandDTO = {
  id: number | null;
  name: string;
};

export type ModelDTO = {
  name: string;
  brand: BrandDTO;
};

export type ModelMinDTO = {
  id: number;
  name: string;
}

export type AutomobileDTO = {
  id: number;
  imgUrl: string;
  plate: string;
  year: number;
  color: string;
  km: number;
  valuePerDay: number;
  returned: boolean;
  model: ModelDTO;
};

export type AutomobileInsertDTO = {
  id: number;
  imgUrl: string;
  plate: string;
  year: number;
  color: string;
  km: number;
  valuePerDay: number;
  returned: boolean;
  model: ModelMinDTO;
  brand: BrandDTO;
}