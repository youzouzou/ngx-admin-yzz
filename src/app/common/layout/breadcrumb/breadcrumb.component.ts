import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import menuConfig from '../menu.config'
@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent {
  menuList = menuConfig.menuList;
  breadcrumbs;

  constructor(private router:Router) {
    this.router.events
      .subscribe((event) => {
        this.breadcrumbs = [];
        if (event instanceof NavigationEnd) { // 当导航成功结束时执行
          console.log('NavigationEnd:', event.url);
          if (event && event.url) {
            let paths = event.url.split('/');
            if (paths.length > 1) {
              console.log(paths, this.menuList);
              for (let i = 0; i < this.menuList.length; i++) {
                if (paths[1] === this.menuList[i].path) {
                  this.breadcrumbs.push({
                    title: this.menuList[i].title,
                    path: (this.menuList[i].children && this.menuList[i].children.length > 0) ? ( this.menuList[i].path + '/' + this.menuList[i].children[0].path) : this.menuList[i].path
                  });
                  if (this.menuList[i].children && paths.length > 2) {
                    for (let j = 0; j < this.menuList[i].children.length; j++) {
                      if (this.menuList[i].children[j].path === paths[2]) {
                        this.breadcrumbs.push({
                          title: this.menuList[i].children[j].title,
                          path: this.menuList[i].path + '/' + this.menuList[i].children[j].path
                        });
                        break;
                      }
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
