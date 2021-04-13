import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TaskComponent } from "./task/task.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { HeaderComponent } from "./header/header.component";
import { TaskDetailComponent } from "./task-detail/task-detail.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    HeaderComponent,
    TaskDetailComponent,
    NotFoundComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
