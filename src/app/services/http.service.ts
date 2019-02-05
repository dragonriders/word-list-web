import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url, options?, heads?) {
    let params: HttpParams;
    let headers: HttpHeaders;
    if (options) {
      params = new HttpParams({ fromObject: options });
    }
    if (heads) {
      headers = new HttpHeaders(heads);
    }
    return this.http.get(url, { headers: headers, params: params });
  }

  post(url, body) {
    return this.http.post(url, body);
  }

}
