import { Component,ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName: string;
  @ViewChild ('userName')
  userdiv: ElementRef;
  constructor(
     private userService: UserService
  ) { }
  ngAfterViewInit() {
    this.userService.getAuths()
      .subscribe(data => {
        console.info('数据是：', data);
        this.userdiv.nativeElement.innerHTML = data.body.info.userName;
      }, error => {

      });
  }
  ngOnInit() {
    
  }

}
