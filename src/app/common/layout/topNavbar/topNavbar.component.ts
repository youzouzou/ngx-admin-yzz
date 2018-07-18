import {Component, Renderer2, OnInit, EventEmitter, Output} from '@angular/core';
import menuConfig from '../menu.config';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'top-navbar',
  templateUrl: './topNavbar.component.html',
  styleUrls: ['./topNavbar.component.css']
})
export class TopNavbarComponent implements OnInit{
  menuList = menuConfig.menuList;
  screenWidth = window.innerWidth;
  curPathIndex: number;
  prePathIndex = 0;
  render2: any;
  curParent: string;
  curChild: string;
  @Output() reload: EventEmitter<any> = new EventEmitter;

  constructor(render2: Renderer2, private router: Router) {
    this.render2 = render2;
  }

  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (!this.curPathIndex && this.curPathIndex != 0) {
          if (event instanceof NavigationEnd) {
            event.url = event.url.split('?')[0];
            let paths = this.router.url.split('/');
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
              // console.log('初始化默认菜单', this.curParent, this.curChild);
            }
          }
        }
      });
  }

  setActive(i) {
    this.prePathIndex = this.curPathIndex;
    this.curPathIndex = i;
    let render2 = this.render2;
    // 设置移动动画
    console.log('移动', this.prePathIndex, this.curPathIndex);
    let dom = render2.selectRootElement('.top-menu-item-active');
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
    let paths = this.router.url.split('/');
    if (paths.length > 1) {
      this.curParent = paths[1];
      if (paths.length > 2) {
        this.curChild = paths[2];
      }
    }
    this.reload.emit();
  }

}
