import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { AuthenticationService } from "../authentication.service";
import { AngularFireAuth } from "@angular/fire/auth";
@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private fireauth: AuthenticationService,
    private angularFireAuth: AngularFireAuth
  ) {
    // console.log(this.authFire.userLogin);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    var login;
    this.angularFireAuth.authState.subscribe(user => {
      if (!user) {
        login = false;
        console.log("Login");
      } else {
        login = true;
        console.log("Not Login");
      }
    });
    console.log("post" + login);
    return login;
  }
}
