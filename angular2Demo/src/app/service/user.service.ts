import { Injectable } from '@angular/core';
import { Headers, Http, Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class UserService {
  constructor(private http: Http) { }
  private auths: Object[];
  private token: string;
  private USER_TOKEN = 'user_token';
  
  private SERVER = process.env.NODE_ENV === 'production' ? 'http://api.crm.integrity.com.cn' : 'http://116.62.31.233:9090';
  private headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Request-Origin':'*'});
  private options = new RequestOptions({headers: this.headers, withCredentials: true});
  // 登录
  login(username: string, password: string) {
    let url = this.SERVER + '/services/cm/auth/login';
    let paramObj = {
    head: {
        ver: '1.0.0',
        token: window.localStorage.getItem(this.USER_TOKEN),
        appId: 1,
        appVer: '1.0.0',
      },
      body: {
        name: username,
        pwd: password
      }
    };
    // return this.http.post(url, paramObj, this.options)
    return this.http.post(url, paramObj)
    .map((res: Response) => {
      let response = res.json();
      this.token = response.body.token;
      if (this.token) {
        localStorage.setItem('user_token', this.token);
      }
      return response;
    });
  }
  // 登出
  logout() {
    // remove user from local storage to log out
    localStorage.removeItem('currentUser');
  }
  // 获取权限树及个人信息
  getAuths() {
    let url = this.SERVER + '/services/cm/auth/loadright';
    let paramObj = {
    head: {
        ver: '1.0.0',
        token: window.localStorage.getItem(this.USER_TOKEN),
        appId: 1,
        appVer: '1.0.0',
      },
      body: {}
    };
    // return this.http.post(url, paramObj, this.options)
    return this.http.post(url, paramObj)
    .map((res: Response) => {
      let response = res.json();
      return response;
    });
  }
}