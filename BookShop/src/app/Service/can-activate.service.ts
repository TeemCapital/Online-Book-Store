import { authService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateService implements CanActivate{

  constructor(private authSer:authService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  if(this.authSer.isAuthenticated()){
    return true;
  }
  else{
    alert("Login to your account to continue!")
    this.router.navigate(['/login'])
    return false;

  }
  }
}
