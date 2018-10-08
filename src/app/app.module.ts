import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';

import { AppComponent } from './app.component';
import { MyGridComponent } from './grid/grid.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts';


import { HttpClient, HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import 'hammerjs';
import { GridModule } from '@progress/kendo-angular-grid';
import { AppRoutingModule } from './app-routing.module';
import { MyChartComponent } from './my-chart/my-chart.component';
import { SmartGridComponent } from './smart-grid/smart-grid.component';
import { EditGridComponent } from './edit-grid/edit-grid.component';

import { CategoriesService } from './northwind.service';
import { EditService } from './edit.service';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ReactiveFormsModule } from '@angular/forms';




enableProdMode();
const platform = platformBrowserDynamic();



@NgModule({
  declarations: [
    AppComponent,
    MyGridComponent,
    MyChartComponent,
    SmartGridComponent,
    EditGridComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule,
    ChartsModule,
    HttpClientModule,
    GridModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientJsonpModule,
    HttpClientModule,
  ],
  providers: [
    {
        deps: [HttpClient],
        provide: EditService,
        useFactory: (jsonp: HttpClient) => () => new EditService(jsonp)
    }, CategoriesService
],
  bootstrap: [AppComponent]
})
export class AppModule {

}

platform.bootstrapModule(AppModule);
