import { NgModule } from '@angular/core';
import { RouterModule,  Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MyChartComponent } from './my-chart/my-chart.component';
import { MyGridComponent } from './grid/grid.component';
import { SmartGridComponent } from './smart-grid/smart-grid.component';
import { EditGridComponent } from './edit-grid/edit-grid.component';


const routes: Routes = [
  { path: '', redirectTo: '/chart', pathMatch: 'full' },
  { path: 'grid', component: MyGridComponent },
  { path: 'chart', component: MyChartComponent },
  { path: 'smartgrid', component: SmartGridComponent },
  { path: 'editgrid', component: EditGridComponent },
];


@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {


 }
