interface IAnimalCrossing {
  //Contiene todos los miembros comunes de las interfaces ICharacter y IBug
  id: number;
  name: IName;
  image_uri: string;
  icon_uri: string;
}

export interface ICharacter extends IAnimalCrossing {
  birthday: string;
  gender: string;
}

export interface IBug extends IAnimalCrossing {
  price: number;
  availability: IAvailability;
}

export interface IAvailability {
  time: string;
  rarity: string;
}

export interface IName {
  // eslint-disable-next-line prettier/prettier
  'name-EUes': string;
  'name-EUen': string;
}
