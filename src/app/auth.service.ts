import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http.get<any>('assets/json/data.json').pipe(
      tap(users => {
        const user = users.find((u: any) => u.username === username && u.password === password);
        if (user) {
          this.isLoggedIn = true;
          this.router.navigate(['/hero']);
        } else {
          alert('Invalid credentials!');
        }
      })
    );
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}