import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { NotFoundComponent } from "./not-found/not-found/not-found.component";

const routes: Routes = [
  { path: "", component: DashboardComponent, pathMatch: "full" },
  { path: "not-found", component: NotFoundComponent },
  { path: "**", redirectTo: "not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
