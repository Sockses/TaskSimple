import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TaskComponent } from "./task/task.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { HeaderComponent } from "./header/header.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";
import { AngularFireAuth } from "@angular/fire/auth";
import { LandingComponent } from "./landing/landing.component";
import { LoginComponent } from "./auth/login/login.component";
import { FormsModule } from "@angular/forms";
import { SignupComponent } from "./auth/signup/signup.component";
import { UserComponent } from "./user/user.component";
import { EditComponent } from "./user/edit/edit.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    HeaderComponent,
    NotFoundComponent,
    DashboardComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // when running with the 'local' config, environment.firebaseConfig will appear
    // as a non-existent property, but will actually exist once the build runs
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    NgbModule,
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent],
})
export class AppModule {}
