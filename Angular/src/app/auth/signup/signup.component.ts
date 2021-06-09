import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  signupError = false;
  signupErrorMessage = "";
  constructor(public auth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {}

  signup(form: NgForm) {
    this.auth
      .createUserWithEmailAndPassword(form.value.email, form.value.password)
      .then((userCredential) => {
        //
        // Successful signup
        // Do something with the userCredential
        //
        this.router.navigate(["/user/dashboard"]);
      })
      .catch((error) => {
        this.signupError = true;
        this.signupErrorMessage = error.message;
      });
  }
}
