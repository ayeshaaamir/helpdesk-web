import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api_base_url: string = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient, private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  userSignUp(data: any): Observable<any> {
    const url = `${this.api_base_url}/registration`;
    return this.http.post(url, data, { responseType: 'text' });
  }

  userLogIn(data: any): Observable<any> {
    const url = `${this.api_base_url}/login`;
    return this.http.post(url, data, { responseType: 'text' }).pipe(
      tap((token: string) => {
        this.setToken(token);
      })
    );
  }

  userLogOut(): void {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
