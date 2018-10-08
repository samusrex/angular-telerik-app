import { Component, OnInit } from '@angular/core';
import {  products } from '../products';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class MyGridComponent implements OnInit {


  constructor() { }

  public gridData: any[] = products;

  ngOnInit() {
  }

}
