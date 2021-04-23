import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(public auth: AngularFireAuth, private router: Router) {}

  ngOnInit(): void {}

  login(form: NgForm) {
    this.auth
      .signInWithEmailAndPassword(form.value.email, form.value.password)
      .then((userCredential) => {
        //
        // Successful login
        // Do something with the userCredential
        //
        this.router.navigate(["/"]);
      })
      .catch((error) => {
        // Notify user of error
      });
  }
}
