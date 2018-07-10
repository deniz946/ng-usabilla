import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Feed } from '../models/Feed';

@Injectable()
export class FeedService {

  constructor(private _http: HttpClient) { }

  getFeed(): Observable<Feed[]> {
    return this._http.get<Feed[]>('http://static.usabilla.com/recruitment/apidemo.json');
  }

}
