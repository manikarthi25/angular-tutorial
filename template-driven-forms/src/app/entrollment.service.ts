import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EntrollmentService {

  _url = "http://localhost:4000/enroll";

  constructor(private http : HttpClient) { }

  enrollUser(user : User) {

    return this.http.post<any>(this._url, user)

  }

}
