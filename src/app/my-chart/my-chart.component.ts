import { Component, Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import {Serie} from '../serie';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})

export class MyChartComponent  {

fabio = 'dev ops';
title = 'app works';
private apiUrl = 'http://104.197.35.1:3000/serie';
Series: Array<Serie> =  [];
data: any = [];

public categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];


constructor  (private http:  HttpClient) {
/*this.getNotes();
this.getData();*/
this.getSerie();
this.getResult();

}

/*getData() {
  return this.http.get(this.apiUrl)
    .map((res:  Response) =>  res);
  }


  getNotes() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  } */

  getSerie  (): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiUrl);
  }

  getResult (): void {
    this.getSerie()
    .subscribe(serie => { this.Series = serie; console.log(serie);  }  );
  }

}
