export interface IDataWrapper {
  data: IDataContainer;
}

export class DataWrapper implements IDataWrapper {
  data!: IDataContainer;
}

export interface IDataContainer {
  total: number;
  results: ICard[];
}

export interface ICard {
  id: number;
  name: string;
  resourceURI: string;
  thumbnail: IImage;

  characters?: ICard[];
  comics?: ICard[];
  events?: ICard[];
  series?: ICard[];
  stories?: ICard[];
}

export interface IImage {
  path: string;
  extension: string;
}
