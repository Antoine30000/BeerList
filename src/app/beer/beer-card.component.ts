import { Component } from '@angular/core';
import { BeerDataService } from '../beer-data.service';
@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css'],
})
export class BeerCardComponent {
  // public title: string = 'Beer';
  beers: Beer[] | undefined;
  sortByName() {
    this.beers = this.beers.sort((a, b) => a.name.localeCompare(b.name));
    // console.log(this.beers);
  }
  sortByDate() {
    this.beers = this.beers
      .sort((a, b) =>
        a.first_brewed
          .split('/')
          .reverse()
          .join('')
          .localeCompare(b.first_brewed.split('/').reverse().join(''))
      )
      .reverse();
    // console.log(this.beers);
  }
  constructor(private beerData: BeerDataService) {
    this.beerData.beers().subscribe((data: Beer[]) => {
      this.beers = data;
      // console.log(data);
    });
  }
}

export interface Beer {
  id: number;
  name: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
}
