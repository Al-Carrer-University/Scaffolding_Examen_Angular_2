import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { AbstractHttpCallsService } from '../abstract-http-calls.service';
import { ICharacter, IBug } from './models/IAnimalCrossing';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VillagerService extends AbstractHttpCallsService<ICharacter> {
  protected apiUrl = environment.animalCrossingApi + 'villagers';

  //Con el override sobrescribimos la función getList del padre
  override getList(): Observable<ICharacter[]> {
    //Convertimos el objeto grandote que devuelve la api en un array mediante el map y el Object.values(...)
    return this.http.get(this.apiUrl).pipe(
      map((characters) => {
        const tmp: ICharacter[] = Object.values(characters).map(
          //Mapeamos los datos que queremos mantener de cada vecino, así solo nos quedamos con lo que nos interesa
          (character: ICharacter) => ({
            id: character.id,
            name: character.name,
            icon_uri: character.icon_uri,
            image_uri: character.image_uri,
            gender: character.gender,
            birthday: character.birthday
          })
        );
        return tmp;
      })
    );
  }

  //Esta función mapea los datos para quedarnos solo con los datos que nos interesan
  //se podría comentar y la llamada a la api seguiría devolviendo el vecino correcto solo que sin mapear los valores
  override getSingle(id: string | number): Observable<ICharacter> {
    return super.getSingle(id).pipe(
      map((character: ICharacter) => ({
        id: character.id,
        name: character.name,
        icon_uri: character.icon_uri,
        image_uri: character.image_uri,
        gender: character.gender,
        birthday: character.birthday
      }))
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class BugService extends AbstractHttpCallsService<IBug> {
  protected apiUrl = environment.animalCrossingApi + 'bugs';

  override getList(): Observable<IBug[]> {
    return this.http.get(this.apiUrl).pipe(
      map((characters) => {
        const tmp: IBug[] = Object.values(characters).map((bug: IBug) => ({
          id: bug.id,
          name: bug.name,
          icon_uri: bug.icon_uri,
          image_uri: bug.image_uri,
          price: bug.price,
          availability: bug.availability
        }));
        return tmp;
      })
    );
  }

  override getSingle(id: string | number): Observable<IBug> {
    return super.getSingle(id).pipe(
      map((bug: IBug) => ({
        id: bug.id,
        name: bug.name,
        icon_uri: bug.icon_uri,
        image_uri: bug.image_uri,
        price: bug.price,
        availability: bug.availability
      }))
    );
  }
}
