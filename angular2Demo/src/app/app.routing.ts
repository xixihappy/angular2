import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
export const AppRoutes: Routes = [{
  path: "login",
  component: LoginComponent
}, {
  path: "",
  redirectTo: "login",
  pathMatch: "full"
}
];
export const routing = RouterModule.forRoot(AppRoutes);