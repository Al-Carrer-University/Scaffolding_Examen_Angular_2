import { ECategory } from './../enums/ECategory';

export interface IParamHolder {
  limit: number;
  offset: number;
  nameStartsWith: string;
  category: ECategory;
}
