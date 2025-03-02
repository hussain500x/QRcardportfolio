import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  data: any;
  title = 'cardp';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe((response) => {
      this.data = response;
      console.log(this.data); // عرض البيانات في الكونسول
    });
  }
}
