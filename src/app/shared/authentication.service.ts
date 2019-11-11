import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { AngularFirestore } from "@angular/fire/firestore";
@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  userData: Observable<firebase.User>;
  userLogin: boolean;
  userData2: any;
  constructor(
    private angularFireAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {
    this.userData = angularFireAuth.authState;
    // console.log(JSON.stringify(this.userData));

    this.isLoggedIn();
  }
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
  isLoggedIn() {
    let data = this.userData;
    console.log(data);

    // const user = JSON.parse(localStorage.getItem("user"));
    // return user !== null ? true : false;
  }
  /* Sign up */
  SignUp(email: string, password: string) {
    this.angularFireAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        let user = {
          email: res.user.email,
          uid: res.user.uid,
          role: "admin",
          verify: res.user.emailVerified,
          created_at: new Date(),
          firstname: "palm",
          lastname: "bua"
        };
        let id = res.user.uid;
        this.firestore
          .collection("users")
          .doc(id)
          .set(user)
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
          });

        // this.firestore
        //   .collection("users")
        //   .add(id)
        //   .then(res => {}, err => console.log(err));
        // console.log("Successfully signed up!", JSON.stringify(res.user));
      })
      .catch(error => {
        console.log("Something is wrong:", error.message);
      });
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    // console.log(email);
    this.angularFireAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log("Successfully signed in!");
      })
      .catch(err => {
        console.log("Something is wrong:", err.message);
      });
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth.auth.signOut();
    this.userLogin = false;
  }
  stateLogin() {
    this.angularFireAuth.authState.subscribe(user => {
      // let id = user.uid;
      if (user != null) {
        return true;
      } else {
        return true;
      }
      // this.firestore.collection("users/" + id).snapshotChanges();
      // console.log(
      //   JSON.stringify(this.firestore.collection("users").snapshotChanges())
      // );
    });
  }
}
export interface Login {
  login: boolean;
}
