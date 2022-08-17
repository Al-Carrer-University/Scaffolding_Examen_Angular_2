import { Observable } from 'rxjs';
import { AnimalCrossingService } from './../../services/http-request-2/animal-crossing/animal-crossing.service';
import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/services/http-request-2/animal-crossing/models/ICharacter';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  villagers!: Observable<ICharacter[]>;
  offset = 0;
  limit = 15;
  total = 391;

  constructor(private animalCrossing: AnimalCrossingService) {}

  ngOnInit(): void {
    this.villagers = this.animalCrossing.getVillagers();
  }

  pageUp(): void {
    this.offset += this.limit;
    if (this.offset >= this.total) this.offset = this.total - this.limit;
  }

  pageDown(): void {
    this.offset -= this.limit;
    if (this.offset < 0) this.offset = 0;
  }
}
