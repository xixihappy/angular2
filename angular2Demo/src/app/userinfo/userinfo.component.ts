import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  constructor(
     private userService: UserService
  ) { }

  ngOnInit() {
    // this.userService.getAuths()
    //   .subscribe(data => {
    //     console.info('数据是：', data);
    //   }, error => {
        
    //   });
    }
  }
