import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
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
  constructor() { }

  ngOnInit() {
  }
  onRegister(): void {
    let userObj = {
      username: this.username,
      password: this.password
    };


    let users: any = localStorage.getItem('currentUser') || [];

    if (users?.length) {
      users = JSON.parse(users);
      users.push(userObj);
      localStorage.setItem('currentUser', JSON.stringify(users));
    } else {
      localStorage.setItem('currentUser', JSON.stringify([userObj]));
    }
  }

}
