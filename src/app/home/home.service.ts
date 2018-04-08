import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {IItem} from './item';

@Injectable()
export class HomeService {

  private itemUrl = 'http://localhost:5000/api/item';

  constructor(private _http: HttpClient) { }

  getItems(): Observable<IItem[]>{
    return this._http.get<IItem[]>(this.itemUrl)
  }

}
