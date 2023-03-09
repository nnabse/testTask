import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TOKEN } from '@constants/localStorage.constants';
import { Route } from '@enums/route.enums';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    if (!localStorage.getItem(TOKEN)) {
      this.router.navigate([Route.SIGN_IN]);
      return false;
    }
    return true;
  }
}
