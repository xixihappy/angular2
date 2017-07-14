import { NgModule } from "@angular/core";
import { RouterModule, Routes, Router, Route, ActivatedRoute } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";
import { UserinfoComponent } from "../userinfo/userinfo.component";

const dashboardRoutes: Routes = [{
  path: "dash",
  component: DashboardComponent,
  children: [
    {
      path: "private.html",
      component: UserinfoComponent,
    },
    {
      path: "",
      pathMatch: "full",
      redirectTo: "private.html"
    }
   ]
}];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }