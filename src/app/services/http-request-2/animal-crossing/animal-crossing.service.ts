import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { AbstractHttpCallsService } from '../abstract-http-calls.service';
import { ICharacter } from './models/ICharacter';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalCrossingService extends AbstractHttpCallsService<ICharacter> {
  protected apiUrl = environment.animalCrossingApi;

  getVillagers(): Observable<ICharacter[]> {
    this.apiUrl = environment.animalCrossingApi + `villagers`;
    return this.getSingle().pipe(
      map((characters) => {
        const tmp: ICharacter[] = Object.values(characters).map(
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
}
