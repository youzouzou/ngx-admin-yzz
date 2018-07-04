import {Component, Renderer2, OnInit} from '@angular/core';
import menuConfig from '../menu.config';
import {Router} from "@angular/router";

@Component({
  selector: 'side-navbar',
  templateUrl: './sideNavbar.component.html',
  styleUrls: ['./sideNavbar.component.css']
})
export class SideNavbarComponent {
  menuList = menuConfig.menuList;
  screenHeight = window.innerHeight;
  curParent: string;
  curChild: string;
  render2: any;
  foldStatus = false;

  constructor(render2: Renderer2, private router: Router) {
    this.render2 = render2;
    document.body.style.paddingLeft = '150px';
    document.body.style.width = this.foldStatus ? (window.innerWidth-50+'px') : (window.innerWidth-150+'px');
    var vm = this;
    window.onresize = function () {
      document.body.style.width = vm.foldStatus ? (window.innerWidth-50+'px') : (window.innerWidth-150+'px');
    }
  }

  ngOnInit() {
    var paths = location.href.split('//')[1].split('/'); // todo 这一步初始化当前路由，这样取值可能会有问题
    if (paths.length > 1) {
      this.curParent = paths[1];
      for (let i = 0; i < this.menuList.length; i++) {
        if (this.menuList[i].path === paths[1]) {
          console.log('当前路由是', this.menuList[i].path);
          this.menuList[i].showChildren = true;
          break;
        }
      }
    }
    if (paths.length > 2) {
      this.curChild = paths[2];
    }
  }

  changeMenu(menu, childMenu, index) {
    this.curParent = menu.path;
    for (let i = 0; i < this.menuList.length; i++) {
      if (index >= 0 && index == i) {
        continue;
      }
      this.menuList[i].showChildren = false;
    }
    menu.showChildren = !menu.showChildren;
    this.curChild = childMenu ? childMenu.path : ((menu.children && menu.children.length) ? menu.children[0].path : '');
  }

  flod() {
    this.foldStatus = !this.foldStatus;
    document.body.style.paddingLeft = this.foldStatus ? '50px' : '150px';
    document.body.style.width = this.foldStatus ? (window.innerWidth-50+'px') : (window.innerWidth-150+'px');
  }

}
