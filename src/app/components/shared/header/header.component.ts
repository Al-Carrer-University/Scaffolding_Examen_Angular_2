import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private _translate: TranslateService) {}

  changeLenguaje(lenguaje: string) {
    this._translate.use(lenguaje);
  }
}
