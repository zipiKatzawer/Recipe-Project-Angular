import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.modle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }
  login(userLogin: any) {
    console.log("userLogin", userLogin);
    return this._http.post('https://localhost:7130/api/User/Login', userLogin);
  }
  register(user:User){
    console.log("user",user);
    return this._http.post('https://localhost:7130/api/User/Register', user);

  }
  getUserById(userId: number): Observable<User> {
    return this._http.get<User>('https://localhost:7130/api/User/' + userId);
  }
}
