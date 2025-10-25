import { Component, OnInit } from '@angular/core';
import { Series } from '../series';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-list',
  standalone: false,
  templateUrl: './series-list.html',
  styleUrls: ['./series-list.css']
})
export class SeriesListComponente implements OnInit {
  series: Series[] = [];
  averageSeasons: number = 0;
  selectedSeries: Series | null = null; // Nueva propiedad para la serie seleccionada

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.getSeriesList();
  }

  getSeriesList(): void {
    this.seriesService.getSeries().subscribe((series) => {
      this.series = series;
      this.calculateAverageSeasons();
    });
  }

  calculateAverageSeasons(): void {
    if (this.series.length > 0) {
      const totalSeasons = this.series.reduce((sum, series) => sum + series.seasons, 0);
      this.averageSeasons = totalSeasons / this.series.length;
      this.averageSeasons = Math.round(this.averageSeasons);
    }
  }

  // Nuevo método para seleccionar una serie
  selectSeries(series: Series): void {
    this.selectedSeries = series;
  }
}