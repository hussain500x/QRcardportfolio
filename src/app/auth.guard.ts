import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const users = localStorage.getItem('users');

  if (users) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};