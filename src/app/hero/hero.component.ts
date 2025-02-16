import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  standalone: true,
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
 constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
