import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap} from "rxjs";
import {IEvent} from "../models/event.model";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  http!:HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }
//findall
  getAllEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('http://localhost:3000/event')
      .pipe(
        tap(data => {

        }),

      );
  }
//find event by id
  getEventById(id: string): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('http://localhost:3000/event/' + id)
      .pipe(
        tap(data => {
        }),

      );
  }
  updateEvent(data:any): Observable<any> {
      console.log('data' , data)
    return this.http.post<any>('http://localhost:3000/user/participate', data)
      .pipe(
        tap(data => {
          console.log(data);
        }),

      );
  }

  //create event
  addEvent(data:any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/event/create', data)
      .pipe(
        tap(data => {
          console.log(data);
        }),

      );
  }
}
