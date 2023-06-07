import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import {Observable, tap} from 'rxjs';
import {IUser} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class SignService {
  constructor(private http: HttpClient ) {
   }

  addUser(data:any): Observable<any> {
    console.log('ici', data)
    return this.http.post<any>('http://localhost:3000/user/register', data)
      .pipe(
        tap(data => {
          console.log(data);
        }),
        catchError(error => {
          console.log(error);
          return error;
        })
      );
  }

  login(data: any): Observable<Partial<IUser>> {

    return this.http.post<any>('http://localhost:3000/user/login', data)
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
}
