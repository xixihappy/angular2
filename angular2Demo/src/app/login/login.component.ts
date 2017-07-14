import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private loginUser = {
    username: '',
    password: ''
  };
  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.userService.logout();
  }
  login() {
    console.info(this.loginUser);
    this.userService.login(this.loginUser.username, this.loginUser.password)
      .subscribe(data => {
        console.info('数据是：', data);
        this.router.navigate(['/dash']);
      }, error => {
        this.loginUser.username = '';
        this.loginUser.password = '';
      });
  }
}
