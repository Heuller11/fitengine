import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UserService } from '../api/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private apiUser: UserService) {
    const token = localStorage.getItem('auth_token');
    this._isLoggedIn$.next(!!token);
  }

  login(email:string, password:string): Observable<any> {
    return this.apiUser.login(email, password).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem('auth_token', response.token);
      })
    );
  }
}