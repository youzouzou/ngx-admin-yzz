import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'tab-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})

export class LoginPage {
  constructor(private router: Router) {
  }

  login() {
    // todo 在这里作登录校验
    this.router.navigate(['/']);// 这句会跳转到route里面的默认路径
  }
}
