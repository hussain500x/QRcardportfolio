import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-registration',
  imports: [RouterModule, FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit {
  username = '';
  password = '';
  about = '';
  phone = '';
  country = '';
  jobTitle = '';
  cv = '';
  linkedin = '';
  personalimg = '';


  constructor(private router: Router) { }

  ngOnInit() {
  }
  onRegister(): void {
    let userObj = {
      username: this.username,
      password: this.password,
      about: this.about,
      phone: this.phone,
      country: this.country,
      jobTitle: this.jobTitle,
      cv: this.cv,
      linked: this.linkedin,
      personalimg: this.personalimg
    };


    let users: any = localStorage.getItem('users') || [];

    if (users?.length) {
      users = JSON.parse(users);
      users.push(userObj);
      localStorage.setItem('users', JSON.stringify(users));
    } else {
      localStorage.setItem('users', JSON.stringify([userObj]));
    }

    if (users) {
      alert('تم تسجيل الدخول بنجاح!');
      this.router.navigate(['/login']);
    } else {
      alert('بيانات الدخول غير صحيحة!');
    }
  }

}

