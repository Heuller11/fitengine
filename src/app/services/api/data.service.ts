import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL:string = environment.API_URL_DATA;

  constructor(private http:HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiURL + '/data')
  }
}
