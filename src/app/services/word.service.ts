import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { APP_URLS } from './../constants/urls.endpoints';
import { APP_CONSTANTS } from '../../config';

@Injectable({
  providedIn: 'root'
})

export class WordService {
  market: any = [];
  constructor(private http: HttpService) { }

  get marketlist() {
    return this.market;
  }

  set marketlist(list) {
    this.market = list;
  }

  fetchMarketList() {
    return this.http.get(APP_URLS.MARKETPLACE_URL);
  }

  wordlist(wordlistId) {
    return this.fetchWordlist(wordlistId);
  }

  mlabList() {
    return this.defaultMLAB_DB();
  }


  private fetchWordlist(wordlistId) {
    const index = this.market.findIndex(l => l.sha === wordlistId);
    return this.http.get(this.market[index].download_url);
  }

  private defaultMLAB_DB() {
    return this.http.get(APP_URLS.MLAB_DB_URL, { apiKey: APP_CONSTANTS.MLAB_KEY });
  }




}
