import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn: boolean = false;
  api_base_url: string = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  userSignUp(data: any): Observable<any> {
    const url = `${this.api_base_url}/registration`;
    return this.http.post(url, data, { responseType: 'text' });
  }

  userLogIn(data: any): Observable<any> {
    const url = `${this.api_base_url}/login`;
    return this.http.post(url, data, { responseType: 'text' }).pipe(
      tap((token: string) => {
        localStorage.setItem('token', token);
        this.isLoggedIn = true;
      })
    );
  }

  userLogOut(): void {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
  }
}
