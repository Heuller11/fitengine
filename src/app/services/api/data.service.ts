import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURLData:string = environment.API_URL_DATA;
  apiURL:string = environment.API_URL;

  constructor(private http:HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiURLData + '/data')
  }

  sendMessage(message:string): Observable<string> {
    return this.http.post<string>(this.apiURL + '/messagehalftime', {message})
  }
}
