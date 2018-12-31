import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url, options?) {
    let params: HttpParams;
    if (options) {
      params = new HttpParams({ fromObject: options });
    }
    return this.http.get(url, { params });
  }

  post(url, body) {
    return this.http.post(url, body);
  }

}
