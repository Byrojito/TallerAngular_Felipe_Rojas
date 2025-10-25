import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesListComponente } from './series/series-list/series-list';

const routes: Routes = [
  { path: '', component: SeriesListComponente },
  { path: 'series', component: SeriesListComponente }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }