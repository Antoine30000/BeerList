import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Beer } from './beer/beer-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public beers: Beer[] = [];

  constructor(private httpClient: HttpClient) {
  }
}
