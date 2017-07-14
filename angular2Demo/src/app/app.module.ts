import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { dashboardModle } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';
import { routing }        from './app.routing';
import { LoginComponent } from './login/login.component';
import { UserService } from './service/user.service';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { MenuComponent } from './menu/menu.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserinfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    dashboardModle,
    routing
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
