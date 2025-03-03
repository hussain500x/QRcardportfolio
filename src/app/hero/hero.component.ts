import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { EditProfileComponent } from "../edit-profile/edit-profile.component";

@Component({
  standalone: true,
  selector: 'app-hero',
  imports: [EditProfileComponent],
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
      alert('You are not logged in!');
    }
  }

  onLogout(): void {
    localStorage.removeItem('currentUser');
  }

  @ViewChild('contentToConvert', { static: false }) contentToConvert!: ElementRef;

  // Function to convert HTML to PDF
  downloadPDF() {
    const element = this.contentToConvert.nativeElement;

    html2canvas(element, {
      useCORS: true, // For external images
      scale: 2, // For better quality
      // allowTaint: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('profile.pdf');
    });
  }
}