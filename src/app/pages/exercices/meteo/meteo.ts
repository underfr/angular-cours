import { Component } from '@angular/core';
import {MeteoService} from '../../../services/meteo-service';
@Component({
  selector: 'app-meteo',
  imports: [],
  template: `
    <p>{{ newData.city_info.name }}</p>
    <p>{{ newData.city_info.elevation }}</p>
  `,
  styleUrl: './meteo.css',
})
export class Meteo {
  title: string = 'apiData';
  newData: any;
  constructor(private apiService: MeteoService) {}

  ngOnInit() {
    this.apiService.getData().subscribe((responseApi) => {
      this.newData = responseApi;
      console.log(this.newData);
      console.log(this.newData.city_info.name);
    });
  }
}
