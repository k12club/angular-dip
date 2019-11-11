import { Injectable } from "@angular/core";
import { AuthenticationService } from "../authentication.service";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  
  constructor(
    private auth: AuthenticationService,
    private angularFireAuth: AngularFireAuth
  ) {}
  get authenticated(): boolean {
    
    var test: boolean;
    this.angularFireAuth.authState.subscribe(user => {
      if (user != null) {
        test = true;
      } else {
        test = false;
      }
    });
    return test;
  }
  
}
