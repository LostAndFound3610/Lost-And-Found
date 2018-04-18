import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Item} from './item';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class HomeService {

  private itemUrl = 'http://localhost:5000/api/item';

  constructor(private _http: HttpClient) { }

  getItems(): Observable<Item[]>{
    return this._http.get<Item[]>(this.itemUrl);
  }

  addItem(new_item: Item): Observable<Item>{
    return this._http.post<Item>(this.itemUrl, new_item);
  }

}
