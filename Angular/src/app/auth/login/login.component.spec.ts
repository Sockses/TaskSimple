import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { AngularFireAuth } from "@angular/fire/auth";
import { FormsModule, NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { LoginComponent } from "./login.component";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let form: NgForm;
  let auth = jasmine.createSpyObj("AngularFireAuth", [
    "signInWithEmailAndPassword",
  ]);
  let router = jasmine.createSpyObj("Router", ["navigate"]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: AngularFireAuth, useValue: auth },
        { provide: Router, useValue: router },
      ],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    form = <NgForm>{
      value: {
        email: "test@tasksimple.com",
        password: "testing",
      },
    };
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it(
    "should tell Router to navigate to '/user/dashboard' when is login successful",
    waitForAsync(() => {
      auth.signInWithEmailAndPassword.and.returnValue(Promise.resolve());
      component.login(form);
      fixture.whenStable().then(() => {
        expect(router.navigate as jasmine.Spy).toHaveBeenCalledWith([
          "/user/dashboard",
        ]);
      });
    })
  );

  it(
    "should display an error message when login is unsuccessful",
    waitForAsync(() => {
      expect(fixture.nativeElement.querySelector("div.alert")).toBeNull();
      auth.signInWithEmailAndPassword.and.returnValue(
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
