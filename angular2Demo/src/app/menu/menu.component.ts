import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  auths: Object[];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getAuths()
      .subscribe(data => {
        console.info('数据是：', data);
        this.auths = data.body.auths;
      }, error => {

      });
  }
  toggleMenu(index) {
     console.info(index);
  }
}

