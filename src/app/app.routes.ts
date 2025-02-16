import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeroComponent } from './hero/hero.component';
import { RegistrationComponent } from './registration/registration.component';

export const
  routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'register', component: RegistrationComponent },
    { path: 'hero', component: HeroComponent },
    { path: '**', redirectTo: '/login' } // Optional: Catch-all route
  ];



