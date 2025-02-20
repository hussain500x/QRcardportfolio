import { Component, OnInit } from '@angular/core';
@Component({
  standalone: true,
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  currentUser: any;

  ngOnInit(): void {
    const userStr = localStorage.getItem('currentUser');
    if (userStr) {
      this.currentUser = JSON.parse(userStr);
    } else {
      alert('لم يتم تسجيل الدخول!');
    }

  }

  onLogout(): void {
    localStorage.removeItem('currentUser');
  }
}