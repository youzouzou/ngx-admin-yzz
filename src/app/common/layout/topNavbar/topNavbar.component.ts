import {Component, ElementRef, Renderer2} from '@angular/core';
import menuConfig from '../menu.config';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'top-navbar',
  templateUrl: './topNavbar.component.html',
  styleUrls: ['./topNavbar.component.css']
})
export class TopNavbarComponent {
  menuList = menuConfig.menuList;
  screenWidth = window.innerWidth;
  curPath: string;
  curPathIndex: number;
  prePathIndex: number = 0;

  constructor(private router: Router, el: ElementRef, render2: Renderer2) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) { // 当导航成功结束时执行
        console.log('当前路由', event.url, render2.selectRootElement('.top-menu-item-active'));
        if (event.url) {
          var paths = event.url.split('/');
          if (paths.length > 1) {
            this.curPath = paths[1];
            for (let i = 0; i < this.menuList.length; i++) {
              if (this.menuList[i].path === this.curPath) {
                this.prePathIndex = this.curPathIndex ? this.curPathIndex : 0;
                this.curPathIndex = i;
                // 设置移动动画
                if (this.prePathIndex < this.curPathIndex) {
                  for (let j = this.prePathIndex * 100; j <= this.curPathIndex * 100; j++) {
                    setTimeout(function () {
                      render2.selectRootElement('.top-menu-item-active').style.left = j + 'px';
                    }, 100 / (this.curPathIndex - this.prePathIndex));
                  }
                } else if (this.prePathIndex > this.curPathIndex) {
                  for (let k = this.prePathIndex * 100; k >= this.curPathIndex * 100; k--) {
                    setTimeout(function () {
                      render2.selectRootElement('.top-menu-item-active').style.left = k + 'px';
                    }, 100 / (this.prePathIndex - this.curPathIndex));
                  }
                }
                break;
              }
            }
          }
        }
      }
    });
  }
}
