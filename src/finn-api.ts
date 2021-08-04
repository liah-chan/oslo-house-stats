export interface Area {
  zipcode: string;
  growthrate: number;
  earliest: number;
  latest: number;
  size_min: number;
  size_max: number;
  size_mean: number;
  n_trans_min: number;
  n_trans_max: number;
  n_trans_mean: number;
  lon: number;
  lat: number;
}

export interface Zipcode {
  zipcode: string;
  links: Link[];
}

interface Link {
  rel: string;
  href: string;
}

export const getAreas = async (): Promise<Area[]> => {
  const response = await fetch("https://finn-statistics.herokuapp.com/areas");
  const area: Area[] = await response.json();
  return area;
};

export const getZipcodes = async (): Promise<Zipcode[]> => {
  const response = await fetch(
    "https://finn-statistics.herokuapp.com/zipcodes"
  );
  const zipcodes: Zipcode[] = await response.json();
  return zipcodes;
};
