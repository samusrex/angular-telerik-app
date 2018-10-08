import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CategoriesService } from '../northwind.service';


import { State } from '@progress/kendo-data-query';

import {
  GridDataResult,
  DataStateChangeEvent
} from '@progress/kendo-angular-grid';


@Component({
  selector: 'app-smart-grid',
  templateUrl: './smart-grid.component.html',
  styleUrls: ['./smart-grid.component.css']
})

export class SmartGridComponent  {

  public view: Observable<GridDataResult>;
  public state: State = {
      skip: 0,
      take: 5
  };

  constructor(private service: CategoriesService) {
      this.view = service;
      this.service.query(this.state);
  }

  public dataStateChange(state: DataStateChangeEvent): void {
      this.state = state;
      this.service.query(state);
  }


}
