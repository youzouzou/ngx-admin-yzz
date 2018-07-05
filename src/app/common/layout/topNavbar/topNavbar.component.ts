import {Component, Renderer2, OnInit} from '@angular/core';
import menuConfig from '../menu.config';

@Component({
  selector: 'top-navbar',
  templateUrl: './topNavbar.component.html',
  styleUrls: ['./topNavbar.component.css']
})
export class TopNavbarComponent {
  menuList = menuConfig.menuList;
  screenWidth = window.innerWidth;
  curPathIndex: number = 0;
  prePathIndex: number = 0;
  render2: any;
  curParent: string;
  curChild: string;

  constructor(render2: Renderer2) {
    this.render2 = render2;
  }

  ngOnInit() {
    let paths = location.href.split('//')[1].split('/'); // todo 这一步初始化当前路由，这样取值可能会有问题
    console.log('paths', paths);
    if (paths.length > 1 && paths[1]) {
      this.curParent = paths[1];
      if (paths.length > 2) {
        this.curChild = paths[2];
      }
      for (let i = 0; i < this.menuList.length; i++) {
        if (this.menuList[i].path === paths[1]) {
          this.prePathIndex = 0;
          this.curPathIndex = i;
          this.render2.selectRootElement('.top-menu-item-active').style.left = i * 100 + 'px';
          break;
        }
      }
    } else {
      this.curParent = menuConfig.menu.path;
      if (menuConfig.menu.children && menuConfig.menu.children.length) {
        this.curChild = menuConfig.menu.children[0].path;
      }
    }
  }

  setActive(i) {
    this.prePathIndex = this.curPathIndex;
    this.curPathIndex = i;
    let render2 = this.render2;
    // 设置移动动画
    let dom = render2.selectRootElement('.top-menu-item-active');
    console.log('移动', dom, this.prePathIndex, this.curPathIndex);
    if (this.prePathIndex < this.curPathIndex) {
      for (let j = this.prePathIndex * 100; j <= this.curPathIndex * 100; j++) {
        setTimeout(function () {
          dom.style.left = j + 'px';
        }, 100);
      }
    } else if (this.prePathIndex > this.curPathIndex) {
      for (let k = this.prePathIndex * 100; k >= this.curPathIndex * 100; k--) {
        setTimeout(function () {
          dom.style.left = k + 'px';
        }, 100);
      }
    }
    let paths = location.href.split('//')[1].split('/'); // todo 这一步初始化当前路由，这样取值可能会有问题
    if (paths.length > 1) {
      this.curParent = paths[1];
      if (paths.length > 2) {
        this.curChild = paths[2];
      }
    }
  }

}
