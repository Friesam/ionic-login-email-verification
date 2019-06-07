import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth.service'
import { Observable } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class SecureInnerPagesGuard implements CanActivate {
constructor(
public authService: AuthService,
public router: Router
) { }

canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  if(this.authService.isLoggedIn) {
  window.alert("You are not allowed to access this URL!");
  this.router.navigate(['tab1'])
        } 
    return true;  
  }
}

// The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.