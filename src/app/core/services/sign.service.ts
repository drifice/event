import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignService {
 http!: HttpClient;
  constructor(http: HttpClient ) {
    this.http= http;
   }

  login(email: string, password: string): boolean {

    if (email === undefined || email === null)
        throw new Error("The parameter 'username' must be defined and cannot be null.");
    if (password === undefined || password === null)
        throw new Error("The parameter 'password' must be defined and cannot be null.");
    else

    return this.http.post("localhost:3000/user",);
}

    // login
    // je tenvoie email et psw
    // je recois  id et le nom

  // register()
  // post  localhost:3000/register

  // create event() il me retourne un boobean
  // get event  localhost:3000/event voir tout les event
  // update event   localhost:3000/event/id jenvoie voir un event je recupere un boolean



}
