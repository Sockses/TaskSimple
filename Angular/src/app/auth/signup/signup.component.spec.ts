import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { AngularFireAuth } from "@angular/fire/auth";
import { FormsModule, NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { SignupComponent } from "./signup.component";

describe("SignupComponent", () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  let angularFireAuthMock = jasmine.createSpyObj("AngularFireAuth", [
    "createUserWithEmailAndPassword",
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
      declarations: [SignupComponent],
      providers: [
        { provide: AngularFireAuth, useValue: angularFireAuthMock },
        { provide: Router, useValue: routerMock },
      ],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(
    "should tell Router to navigate to '/user/dashboard' when signup is successful",
    waitForAsync(() => {
      angularFireAuthMock.createUserWithEmailAndPassword.and.returnValue(
        Promise.resolve()
      );
      component.signup(form);
      fixture.whenStable().then(() => {
        expect(routerMock.navigate as jasmine.Spy).toHaveBeenCalledWith([
          "/user/dashboard",
        ]);
      });
    })
  );

  it(
    "should display an error message when signup is unsuccessful",
    waitForAsync(() => {
      angularFireAuthMock.createUserWithEmailAndPassword.and.returnValue(
        Promise.reject({ message: "Error" })
      );
      component.signup(form);
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(
          fixture.nativeElement.querySelector("div.alert").textContent.trim()
        ).toBe("Error");
      });
    })
  );
});
