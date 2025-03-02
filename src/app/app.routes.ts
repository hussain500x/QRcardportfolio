import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeroComponent } from './hero/hero.component';
import { RegistrationComponent } from './registration/registration.component';
import { authGuard } from './auth.guard';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

export const
  routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'register', component: RegistrationComponent },
    // { path: 'hero', component: HeroComponent },
    { path: 'hero', component: HeroComponent, canActivate: [authGuard] },
    { path: '**', redirectTo: '/login' },// Optional: Catch-all route
    { path: 'edit-profile', component: EditProfileComponent },
  ];



