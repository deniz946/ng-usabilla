import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Feed } from '../models/Feed';

@Injectable()
export class FeedService {

  constructor(private _http: HttpClient) { }

  getFeed(): Observable<Feed> {
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', 'http://localhost:4200');
    return this._http.get<Feed>('http://codigodiario.me:3000/data.json', {headers});
  }

}
