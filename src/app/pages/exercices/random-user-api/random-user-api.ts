import {Component, signal} from '@angular/core';
import {RandomUserService} from '../../../services/random-user-service';
import {NgOptimizedImage} from '@angular/common';
@Component({
  selector: 'app-random-user-api',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './random-user-api.html',
  styleUrl: './random-user-api.css',
})
export class RandomUserApi {
  title: string = 'apiData';
  newData = signal<any>(null);
  constructor(private apiService: RandomUserService) {}

  ngOnInit() {
    this.apiService.getData().subscribe((responseApi) => {
      this.newData.set(responseApi)
    });
  }
}
