import { IParamHolder } from './services/http-requests/marvel/models/interfaces/IParamHolder';
import { MarvelRequestService } from './services/http-requests/marvel/marvel-request.service';
import { Component } from '@angular/core';
import { ECategory } from './services/http-requests/marvel/models/enums/ECategory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Scaffolding-Examen-Angular-2';

  constructor(private marvel: MarvelRequestService) {
    let testParams: Partial<IParamHolder> = {};
    testParams.category = ECategory.Characters;
    testParams.limit = 100;
    marvel.getSingle(testParams);
  }
}
