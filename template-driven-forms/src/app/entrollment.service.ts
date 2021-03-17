import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntrollmentService {

  _url = "http://localhost:4000/enroll";

  constructor(private http : HttpClient) { }

  enrollUser(user : User) {

    return this.http.post<any>(this._url, user).pipe(catchError(this.errorHandler));

  }

  errorHandler(error : HttpErrorResponse) {
    return throwError(error);
  }

}
