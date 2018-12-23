import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url, options?) {
    return this.http.get(url, options);
  }

  post(url, body) {
    return this.http.post(url, body);
  }

}
