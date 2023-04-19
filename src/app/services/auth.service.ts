import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api_base_url: string = 'http://localhost:8081/api/v1/';

  constructor(private http: HttpClient) { }

  userSignUp(data: any): Observable<any> {
    return this.http.post(`${this.api_base_url}/registration`, data);
  }
}
