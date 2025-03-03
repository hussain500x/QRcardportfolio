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
  fname = '';
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
    // Fetch current user data from localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (currentUser) {
      this.fname = currentUser.fname;
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
    // Validate empty fields
    const requiredFields = [
      { value: this.fname, name: 'Full Name' },
      { value: this.username, name: 'Username' },
      { value: this.password, name: 'Password' },
      { value: this.about, name: 'About You' },
      { value: this.jobTitle, name: 'Job Title' },
      { value: this.cv, name: 'CV' },
      { value: this.linkedin, name: 'LinkedIn URL' },
      { value: this.personalimg, name: 'Profile Picture' }
    ];

    const emptyField = requiredFields.find(field => !field.value.trim());
    if (emptyField) {
      alert(`Please fill in the ${emptyField.name} field`);
      return;
    }

    // Update user data
    const updatedUser = {
      fname: this.fname,
      username: this.username,
      password: this.password,
      about: this.about,
      phone: this.phone,
      jobTitle: this.jobTitle,
      cv: this.cv,
      linked: this.linkedin,
      personalimg: this.personalimg
    };

    // Update data in localStorage
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    alert('Information updated successfully!');
    window.location.reload();
  }
}