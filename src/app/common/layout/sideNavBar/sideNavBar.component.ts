import {Component, Renderer2, OnInit, Input, Output, EventEmitter} from '@angular/core';
import menuConfig from '../menu.config';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'side-navbar',
  templateUrl: './sideNavbar.component.html',
  styleUrls: ['./sideNavbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  @Input() barWidth = 150;
  @Input() userInfo: object;
  menuList = menuConfig.menuList;
  screenHeight = window.innerHeight;
  curParent: string;
  curChild: string;
  foldStatus = window.innerWidth < 1200;
  showChildBoxIndex: number;
  @Output() reload: EventEmitter<any> = new EventEmitter;

  constructor(private router: Router) {
  }

  ngOnInit() {
    document.body.style.paddingLeft = this.foldStatus ? '50px' : (this.barWidth + 'px');
    document.body.style.width = this.foldStatus ? (window.innerWidth - 50 + 'px') : (window.innerWidth - this.barWidth + 'px');
    const vm = this;
    window.onresize = function () {
      vm.screenHeight = window.innerHeight;
      document.body.style.width = (vm.foldStatus ? (window.innerWidth - 50 + 'px') : (window.innerWidth - vm.barWidth + 'px'));
    }
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          event.url = event.url.split('?')[0];
          const paths = event.url.split('/');
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
    this.reload.emit();
  }

  flod() {
    this.foldStatus = !this.foldStatus;
    document.body.style.paddingLeft = this.foldStatus ? '50px' : this.barWidth + 'px';
    document.body.style.width = this.foldStatus ? (window.innerWidth - 50 + 'px') : (window.innerWidth - this.barWidth + 'px');
  }

  showChildBox(i) {
    this.showChildBoxIndex = i;
  }

  hideChildBox() {
    this.showChildBoxIndex = null;
  }

// 阻止滚动事件冒泡
  enter() {
    document.body.style.overflow = 'hidden';
  }

  leave() {
    document.body.style.overflow = 'auto';
  }
}
