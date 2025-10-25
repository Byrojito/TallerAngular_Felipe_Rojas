import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesListComponente } from './series-list/series-list';



@NgModule({
  declarations: [
    SeriesListComponente
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SeriesListComponente
  ]
})
export class SeriesModule { }
