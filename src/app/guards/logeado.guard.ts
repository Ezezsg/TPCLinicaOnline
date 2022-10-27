import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../servicios/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class LogeadoGuard implements CanActivate {

  constructor(private auth : AuthenticateService, private router : Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.auth.isLoggedIn){
        this.router.navigate(['']);
        return false;
      }
      return true;
  }
  
}
