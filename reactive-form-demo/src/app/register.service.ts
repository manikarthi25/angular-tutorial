import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 
  _url = "http://localhost:4000/enroll";

  constructor( private http : HttpClient) { }

  register(userData : any) {
    return this.http.post<any>(this._url, userData);
  }

}
