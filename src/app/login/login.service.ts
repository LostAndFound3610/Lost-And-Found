import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IUser } from '../user';

@Injectable()
export class LoginService {

  private userUrl = 'http://localhost:5000/api/user';

  constructor( private _http: HttpClient ) { }

  getUsers(): Observable<IUser[]>{
    return this._http.get<IUser[]>(this.userUrl);
  }

}
