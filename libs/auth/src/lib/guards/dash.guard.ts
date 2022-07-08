import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     return  this.checkUserPermission(route, state)
  }

  checkUserPermission(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
   // console.log(route, state)
    return true
    // if (!_.get(route, 'data.permissions.length') || this.authService.hasPermission(route.data.permissions)) {
    //   return true;
    // } else {
    //   const msg = 'You do not have enough permission for ' + route.data.component + ' tool';
    //   this.messagingService.addMessage({ message: msg, type: 'error' });
    //   this.authService.deepLink = state.url;
    //   this.router.navigate(['home']);
    //   return false;
    // }
  }

}


