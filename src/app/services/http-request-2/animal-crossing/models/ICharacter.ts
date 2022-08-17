export interface ICharacter {
  id: number;
  name: IName;
  image_uri: string;
  icon_uri: string;
  birthday: string;
  gender: string;
}

export interface IName {
  // eslint-disable-next-line prettier/prettier
  'name-EUes': string;
  'name-EUen': string;
}
