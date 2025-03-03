import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // For using *ngFor
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(private router: Router) { }

  onLogin(): void {
    const usersStr = localStorage.getItem('users');
    const users = usersStr ? JSON.parse(usersStr) : [];

    const user = users.find((u: any) =>
      u.username === this.username && u.password === this.password
    );

    if (user) {
      alert('Login successful!');
      // Save current user data in localStorage
      localStorage.setItem('currentUser', JSON.stringify(user));
      // Navigate to the hero page
      this.router.navigate(['/hero']);
    } else {
      alert('Invalid login credentials!');
    }
  }

}