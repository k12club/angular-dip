import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../shared/authentication.service";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-dashboard",
  templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(
    public authenticationService: AuthenticationService,
    private angularFireAuth: AngularFireAuth
  ) {
    // console.log(this.angularFireAuth.authState);
  }

  ngOnInit() {}
  signIn() {
    this.authenticationService.SignIn(this.email, this.password);
    this.email = "";
    this.password = "";
  }
  SignOut() {
    this.authenticationService.SignOut();
  }
}
