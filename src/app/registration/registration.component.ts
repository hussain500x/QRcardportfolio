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
    // Check for empty fields
    const requiredFields = [
      { value: this.username, name: 'Username' },
      { value: this.fname, name: 'Full Name' },
      { value: this.password, name: 'Password' },
      { value: this.about, name: 'About You' },
      { value: this.jobTitle, name: 'Job Title' },
      { value: this.cv, name: 'CV' },
      { value: this.linkedin, name: 'LinkedIn Link' },
      { value: this.personalimg, name: 'Profile Picture' }
    ];

    const emptyField = requiredFields.find(field => !field.value.trim());
    if (emptyField) {
      alert(`Please fill in the ${emptyField.name} field`);
      return;
    }

    // Create user object if all fields are filled
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

    alert('Registration successful!');
    this.router.navigate(['/login']);
  }
}