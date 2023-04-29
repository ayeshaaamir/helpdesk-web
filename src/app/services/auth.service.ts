import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  api_base_url: string = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  userSignUp(data: any): Observable<any> {
    const url = `${this.api_base_url}/registration`;
    return this.http.post(url, data, { responseType: 'text' });
  }
}
