
import { Component,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common'; // لاستخدام *ngFor
// 
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
   data: any;

  constructor(private dataService: DataService,private authService: AuthService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((response) => {
      this.data = response;
      console.log(this.data); // عرض البيانات في الكونسول
    });
  }
    email = '';
  password = '';

  // constructor(private authService: AuthService) {}

  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe();
  }
}
