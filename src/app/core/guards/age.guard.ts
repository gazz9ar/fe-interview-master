import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AgeService } from 'src/app/pages/services/age.service';

@Injectable({
  providedIn: 'root'
})
export class AgeGuard implements CanActivateChild {

  constructor(
    private ageService:AgeService,
    private router:Router
    ) {

  }
  
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.ageService.isOver18() === true){
        return true;
      } else {    
        this.router.navigate(['']);
        return false;
      }
  }
  
}
