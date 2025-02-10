export type BrandDTO = {
  name: string;
};

export type ModelDTO = {
  name: string;
  brand: BrandDTO;
};

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
