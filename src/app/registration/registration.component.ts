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
  fname = '';
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
    // التحقق من الحقول الفارغة
    const requiredFields = [
      { value: this.username, name: 'اسم المستخدم' },
      { value: this.fname, name: 'اسم المستخدم' },
      { value: this.password, name: 'كلمة المرور' },
      { value: this.about, name: 'نبذة عنك' },
      { value: this.jobTitle, name: 'المسمى الوظيفي' },
      { value: this.cv, name: 'السيرة الذاتية' },
      { value: this.linkedin, name: 'رابط LinkedIn' },
      { value: this.personalimg, name: 'الصورة الشخصية' }
    ];

    const emptyField = requiredFields.find(field => !field.value.trim());
    if (emptyField) {
      alert(`الرجاء ملء حقل ${emptyField.name}`);
      return;
    }

    // إنشاء كائن المستخدم إذا كل الحقول مملوءة
    let userObj = {
      username: this.username,
      fname: this.fname,
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

    alert('تم التسجيل بنجاح!');
    this.router.navigate(['/login']);
  }
}