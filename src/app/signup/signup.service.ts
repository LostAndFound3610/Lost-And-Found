import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {User} from '../user';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class SignupService {

  private userUrl = 'http://localhost:5000/api/user';

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this._http.get<User[]>(this.userUrl);
  }

  addUser(new_User: User): Observable<User>{
    return this._http.post<User>(this.userUrl, new_User);
  }

}
