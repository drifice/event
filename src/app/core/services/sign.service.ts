import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, tap} from 'rxjs';
import {IUser} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class SignService {
 http!: HttpClient;
  constructor(http: HttpClient ) {
    this.http= http;
   }

  addUser(data:Partial<IUser>): Observable<any> {
    console.log("ici", data)
    return this.http.post<any>('http://localhost:3000/register', data)
      .pipe(
        tap(data => {
          console.log(data);
        }),

      );
  }
  login(data: any): Observable<boolean> {

    return this.http.post<any>('http://localhost:3000/user', data)
      .pipe(
        tap(data => {
          console.log(data);
        }),
      );
  }

  getUser(id: string): Observable<any> {

    return this.http.get<string>('http://localhost:3000/user/'+ id)
      .pipe(
        tap(data => {
          console.log(data);
        }),
      );
  }
// {
//   "id": "bd83d34a-7511-4df1-b1bd-c41ab11c0608",
//   "name": "bob3",
//   "email": "bob@bobo3.com"
// }

    // login
    // je tenvoie email et psw
    // je recois  id et le email

  // register()
  // post  localhost:3000/register

  // create event() il me retourne un boobean
  // get event  localhost:3000/event voir tout les event
  // update event   localhost:3000/event/id jenvoie voir un event je recupere un boolean



}
