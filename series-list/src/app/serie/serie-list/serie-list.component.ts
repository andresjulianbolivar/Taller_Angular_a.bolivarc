import { Component, OnInit } from '@angular/core';
import {Serie} from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  constructor(private serieService: SerieService) { }

  series: Array<Serie> = [];
  averageSeasons: number = 0;

  getSeries(): void 
  {
    this.serieService.getSeries().subscribe((series) =>
    {
      this.series = series;
      this.calculateAverageSeasons();
    });
  }

  calculateAverageSeasons(): void
  {
    let nSeries: number = 0;
    let nSeasons: number = 0;
    this.series.forEach((serie) => nSeasons = nSeasons + serie.seasons);
    this.series.forEach((serie) => nSeries = nSeries + 1);
    let promedio: number = nSeasons/nSeries;
    this.averageSeasons = promedio;
  }

  ngOnInit():void {
    this.getSeries();
  }

}
