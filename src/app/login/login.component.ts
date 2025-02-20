
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { DataService } from '../data.service';
import { CommonModule } from '@angular/common'; // لاستخدام *ngFor
// 
// import { AuthService } from '../auth.service';
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
      alert('تم تسجيل الدخول بنجاح!');
      // حفظ بيانات المستخدم الحالي في localStorage
      localStorage.setItem('currentUser', JSON.stringify(user));
      // الانتقال إلى صفحة الهيرو
      this.router.navigate(['/hero']);
    } else {
      alert('بيانات الدخول غير صحيحة!');
    }
  }
  //  data: any;

  // constructor(private dataService: DataService,private authService: AuthService) {}

  // ngOnInit() {
  //   this.dataService.getData().subscribe((response) => {
  //     this.data = response;
  //     console.log(this.data); // عرض البيانات في الكونسول
  //   });
  // }
  //   email = '';
  // password = '';

  // // constructor(private authService: AuthService) {}

  // onSubmit(): void {
  //   this.authService.login(this.email, this.password).subscribe();
  // }
}
