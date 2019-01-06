import { Component, OnInit } from '@angular/core';
import { HttpService } from './../services/http.service';
import { APP_URLS } from './../constants/urls.endpoints';
import { log } from 'util';
@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {

  private marketPlaceList: any[];
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.get(APP_URLS.MARKETPLACE_URL).subscribe((wordlists: any) => {
      this.marketPlaceList = wordlists;
      console.log(this.marketPlaceList);
    }, (error) => {

    });
  }

}
