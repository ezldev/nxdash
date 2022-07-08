import { Injectable ,Inject} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import {  User, Environment } from  '@nex/data-models'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: BehaviorSubject<User> = new BehaviorSubject(null);
  user: User;
  isAuthenticated: boolean;
  deepLink = '/';

  constructor(private httpClient: HttpClient, @Inject('@env') private env: Environment, private router: Router) {
    this.deepLink = window.location.href;
    this.loadUser();
  }

  private getTokenFromServer(code) {
    // this.tokenFromServer$ = this.httpClient
    //   .post(this.env.apiEndPoint + '/oauth/getToken', {
    //     code: code
    //   })
    //   .pipe(
    //     map((res: any) => {
    //       const token = res.token;
    //       this.user = this.getUserFromToken(token);
    //       this.user$.next(this.user);
    //       this.isAuthenticated = !!this.user;
    //       localStorage.setItem(this.getLocalStorageKey('token'), token);
    //       return this.isAuthenticated && token;
    //     }),
    //     shareReplay()
    //   );
    // return this.tokenFromServer$;
  }

  loadUser() {
    try {
      const token = localStorage.getItem(this.getLocalStorageKey('token'));
      this.user = this.getUserFromToken(token);
      this.user$.next(this.user);
      this.isAuthenticated = !!this.user;
    } catch (e) {}
    return;
  }

  getLocalStorageKey(key) {
    return document.baseURI.split('/')[3] + '-' + key;
  }

  getUserFromToken(token) {
    try {
      // Get Token Header
      const dataJWT = this.getTokeData(token);
      if (dataJWT.exp) {
        if (dataJWT.exp * 1000 > new Date().getTime()) {
          return { ...dataJWT.user, idToken: dataJWT.idToken, iat: dataJWT.iat, exp: dataJWT.exp };
        } else {
          localStorage.removeItem(this.getLocalStorageKey('token'));
          return false;
        }
      }
      return dataJWT.user || false;
    } catch (err) {
      return false;
    }
  }

  getTokeData(token) {
    try {
      // Get Token Header
      const base64HeaderUrl = token.split('.')[0];
      const base64Header = base64HeaderUrl.replace('-', '+').replace('_', '/');
      const headerData = JSON.parse(window.atob(base64Header));

      // Get Token payload and date's
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      const dataJWT = JSON.parse(window.atob(base64));
      dataJWT.header = headerData;

      return dataJWT;
    } catch (e) {
      return false;
    }
  }


}
