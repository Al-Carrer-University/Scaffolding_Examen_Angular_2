import { Observable } from 'rxjs';
import { VillagerService } from './../../services/http-request-2/animal-crossing/animal-crossing.service';
import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/services/http-request-2/animal-crossing/models/IAnimalCrossing';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class VillagerListComponent implements OnInit {
  villagers!: Observable<ICharacter[]>;
  offset = 0;
  limit = 18;
  total = 391;

  constructor(private villagersApi: VillagerService) {}

  ngOnInit(): void {
    this.villagers = this.villagersApi.getList();
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
