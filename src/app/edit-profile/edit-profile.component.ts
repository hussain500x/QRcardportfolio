import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-edit-profile',
  imports: [FormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  username = '';
  password = '';
  about = '';
  phone = '';
  jobTitle = '';
  cv = '';
  linkedin = '';
  personalimg = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    // جلب بيانات المستخدم الحالي من localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (currentUser) {
      this.username = currentUser.username;
      this.password = currentUser.password;
      this.about = currentUser.about;
      this.phone = currentUser.phone;
      this.jobTitle = currentUser.jobTitle;
      this.cv = currentUser.cv;
      this.linkedin = currentUser.linked;
      this.personalimg = currentUser.personalimg;
    }
  }

  onUpdate(): void {
    // التحقق من الحقول الفارغة
    const requiredFields = [
      { value: this.username, name: 'اسم المستخدم' },
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

    // تحديث بيانات المستخدم
    const updatedUser = {
      username: this.username,
      password: this.password,
      about: this.about,
      phone: this.phone,
      jobTitle: this.jobTitle,
      cv: this.cv,
      linked: this.linkedin,
      personalimg: this.personalimg
    };

    // تحديث البيانات في localStorage
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    alert('تم تحديث المعلومات بنجاح!');
    window.location.reload();
  }
}