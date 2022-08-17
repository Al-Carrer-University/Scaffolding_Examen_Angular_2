import { ICharacter } from './services/http-request-2/animal-crossing/models/ICharacter';
import { AnimalCrossingService } from './services/http-request-2/animal-crossing/animal-crossing.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Scaffolding-Examen-Angular-2';

  constructor(private animal: AnimalCrossingService) {
    this.animal.getVillagers().subscribe((villagers: ICharacter[]) => {
      console.warn(villagers);
    });
  }
}
