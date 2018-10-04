import { Component, Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl:  './app.component.html',
/*styleUrls: ['./app.component.css'] */

})


@Injectable()
export class AppComponent {

title = 'app works';
private apiUrl = 'http://104.197.35.1:3000/serie';
data: any =  [];

public categories: number[] = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011];


constructor  (private http:  HttpClient) {
this.getNotes();
this.getData();
}

getData() {
  return this.http.get(this.apiUrl)
    .map((res:  Response) =>  res);
  }


  getNotes() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
}

