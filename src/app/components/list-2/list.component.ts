import { BugService } from './../../services/http-request-2/animal-crossing/animal-crossing.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IBug } from 'src/app/services/http-request-2/animal-crossing/models/IAnimalCrossing';

@Component({
  selector: 'app-list-2',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class BugListComponent implements OnInit {
  bugs!: Observable<IBug[]>;
  offset = 0;
  limit = 12;
  total = 79;

  constructor(private bugsApi: BugService) {}

  ngOnInit(): void {
    this.bugs = this.bugsApi.getList();
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
