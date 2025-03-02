import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  standalone: true,
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})

export class HeroComponent {
  currentUser: any;

  ngOnInit(): void {
    const userStr = localStorage.getItem('currentUser');
    if (userStr) {
      this.currentUser = JSON.parse(userStr);
    } else {
      alert('لم يتم تسجيل الدخول!');
    }

  }

  onLogout(): void {
    localStorage.removeItem('currentUser');
  }



  @ViewChild('contentToConvert', { static: false }) contentToConvert!: ElementRef;

  // دالة لتحويل HTML إلى PDF
  downloadPDF() {
    const element = this.contentToConvert.nativeElement;

    html2canvas(element, {
      useCORS: true, // إذا كان هناك صور من مصادر خارجية
      scale: 2, // لتحسين الجودة
      // allowTaint: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // عرض A4 بالمليمتر
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('profile.pdf');
    });
  };
}