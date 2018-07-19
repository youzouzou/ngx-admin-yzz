import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {globalService} from "./global.service";

@Injectable()
export class selfHttp {
  public restServer;
  public http;

  constructor(Http: HttpClient, public global: globalService) {
    this.http = Http;
    this.restServer = 'http://127.0.0.0/';
  }

  public get(url, params?: Object, cb?: Function) {
    let httpParams = new HttpParams();
    console.log('get开始请求');
    this.global.loadStatus = true;
    const vm = this;
    if (params) {
      for (const key in params) {
        if (params[key] === false || params[key] === 0 || params[key]) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }
    vm.http.get(vm.restServer + url, {params: httpParams})
      .subscribe(data => {
        console.log('get请求结束', data);
        vm.global.loadStatus = false;
        cb(data);
      });
  }

  public post(url, data?: Object, cb?: Function, options?: Object) {
    console.log('post开始请求');
    this.global.loadStatus = true;
    const vm = this;
    vm.http.post(vm.restServer + url, data, options)
      .subscribe(res => {
        console.log('post请求结束', res);
        vm.global.loadStatus = false;
        cb(res);
      });
  }

  public put(url, data?: Object, cb?: Function, options?: Object) {
    console.log('put开始请求');
    this.global.loadStatus = true;
    const vm = this;
    vm.http.put(vm.restServer + url, data, options)
      .subscribe(res => {
        console.log('put请求结束', res);
        vm.global.loadStatus = false;
        cb(res);
      });
  }

  public delete(url, params?: Object, cb?: Function) {
    let httpParams = new HttpParams();
    console.log('delete开始请求');
    this.global.loadStatus = true;
    const vm = this;
    if (params) {
      for (const key in params) {
        if (params[key] === false || params[key] === 0 || params[key]) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }
    vm.http.delete(vm.restServer + url, {params: httpParams})
      .subscribe(data => {
        console.log('delete请求结束', data);
        vm.global.loadStatus = false;
        cb(data);
      });
  }
}
