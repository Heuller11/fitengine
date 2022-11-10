import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  apiURL = environment.API_URL;

  constructor(private http:HttpClient) {

  }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getTest(): Observable<User>{
    return this.http.get<User>(`${this.apiURL}`).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
