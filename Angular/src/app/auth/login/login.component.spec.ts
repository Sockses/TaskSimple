import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { AngularFireAuth } from "@angular/fire/auth";
import { FormsModule, NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { LoginComponent } from "./login.component";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let angularFireAuthMock = jasmine.createSpyObj("AngularFireAuth", [
    "signInWithEmailAndPassword",
  ]);
  let routerMock = jasmine.createSpyObj("Router", ["navigate"]);

  let form = <NgForm>{
    value: {
      email: "",
      password: "",
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: AngularFireAuth, useValue: angularFireAuthMock },
        { provide: Router, useValue: routerMock },
      ],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(
    "should tell Router to navigate to '/user/dashboard' when is login successful",
    waitForAsync(() => {
      angularFireAuthMock.signInWithEmailAndPassword.and.returnValue(
        Promise.resolve()
      );
      component.login(form);
      fixture.whenStable().then(() => {
        expect(routerMock.navigate as jasmine.Spy).toHaveBeenCalledWith([
          "/user/dashboard",
        ]);
      });
    })
  );

  it(
    "should display an error message when login is unsuccessful",
    waitForAsync(() => {
      angularFireAuthMock.signInWithEmailAndPassword.and.returnValue(
        Promise.reject({ message: "Error" })
      );
      component.login(form);
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(
          fixture.nativeElement.querySelector("div.alert").textContent.trim()
        ).toBe("Error");
      });
    })
  );
});
