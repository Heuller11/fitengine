import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL:string = environment.API_URL;

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http:HttpClient) {

  }

  signUp(user: User): Observable<User> {
    return this.http.post<User>(this.apiURL + '/auth/signup', {name: user.name, email: user.email, password: user.password})
  }

  login(email:string,password:string): Observable<any> {
    return this.http.post<any>(this.apiURL + '/auth/login', {email, password})
  }

}
