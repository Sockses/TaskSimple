import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UserComponent } from "./user/user.component";
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from "@angular/fire/auth-guard";
import { LandingComponent } from "./landing/landing.component";
import { EditComponent } from "./user/edit/edit.component";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo("/user/login");

const routes: Routes = [
  { path: "", component: LandingComponent, pathMatch: "full" },
  {
    path: "user",
    component: UserComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
      },
      { path: "login", component: LoginComponent },
      { path: "signup", component: SignupComponent },
      {
        path: "edit",
        component: EditComponent,
        canActivate: [AngularFireAuthGuard],
        data: { authGuardPipe: redirectUnauthorizedToLogin },
      },
    ],
  },
  { path: "not-found", component: NotFoundComponent },
  { path: "**", redirectTo: "not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
