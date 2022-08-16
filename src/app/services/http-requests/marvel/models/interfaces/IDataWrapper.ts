export interface IDataWrapper {
  data: IDataContainer;
}

export interface IDataContainer {
  results: ICharacter[];
}

export interface ICharacter {
  id: number;
  name: string;
}
