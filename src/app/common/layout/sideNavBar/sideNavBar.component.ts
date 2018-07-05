import {Component, Renderer2, OnInit} from '@angular/core';
import menuConfig from '../menu.config';
import {NavigationEnd, Router} from "@angular/router";

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
  showChildBoxIndex: number;

  constructor(render2: Renderer2, private router: Router) {
    this.render2 = render2;
    document.body.style.paddingLeft = this.foldStatus ? '50px' : '150px';
    document.body.style.width = this.foldStatus ? (window.innerWidth - 50 + 'px') : (window.innerWidth - 150 + 'px');
    var vm = this;
    window.onresize = function () {
      document.body.style.width = vm.foldStatus ? (window.innerWidth - 50 + 'px') : (window.innerWidth - 150 + 'px');
    }
  }

  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          let paths = event.url.split('/');
          if (paths.length > 1 && paths[1]) {
            this.curParent = paths[1];
            if (paths.length > 2) {
              this.curChild = paths[2];
            }
            for (let i = 0; i < this.menuList.length; i++) {
              if (this.menuList[i].path === paths[1]) {
                console.log('当前路由是', this.menuList[i].path);
                this.menuList[i].showChildren = true;
                break;
              }
            }
          } else {
            this.curParent = menuConfig.menu.path;
            if (menuConfig.menu.children && menuConfig.menu.children.length) {
              this.curChild = menuConfig.menu.children[0].path;
            }
            console.log('初始化默认菜单', this.curParent, this.curChild);
          }
        }
      });
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
    document.body.style.width = this.foldStatus ? (window.innerWidth - 50 + 'px') : (window.innerWidth - 150 + 'px');
  }

  showChildBox(i) {
    this.showChildBoxIndex = i;
  }

  hideChildBox() {
    this.showChildBoxIndex = null;
  }

}
