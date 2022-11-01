import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../servicios/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private auth:AuthenticateService, private toast:ToastrService,private route:Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let user;
      return this.auth.getUserUid().then(res => {
        user = res;
        
        if(user != 0 && user!=undefined && user!=null)
        { 
          console.info(user);
          return true;
        }
        else
        {  
          //this.toast.error("Necesitás estar logueado para ingresar a esta ruta","Error");
          this.route.navigate(['']);
          return false;
        }
    }).catch(res =>{
      this.toast.error(res,"Error");
     // alert(res);
      this.route.navigate(['']);
      return false;
    })
  }
  
}
