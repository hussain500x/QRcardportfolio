import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  currentUser: any;
  constructor(private router: Router) { }
  ngOnInit(): void {
    const currentUserStr = localStorage.getItem('currentUser');
    if (currentUserStr) {
      this.currentUser = JSON.parse(currentUserStr); // عرض بيانات المستخدم الحالي فقط
    } else {
      alert('لم يتم تسجيل الدخول!');
      this.router.navigate(['/login']); // توجيه المستخدم إلى صفحة تسجيل الدخول
    }
  }

  onLogout(): void {
    localStorage.removeItem('currentUser'); // حذف بيانات المستخدم الحالي
    this.router.navigate(['/login']); // توجيه المستخدم إلى صفحة تسجيل الدخول
  }
}
