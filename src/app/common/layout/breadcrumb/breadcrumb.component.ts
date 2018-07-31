import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Location} from '@angular/common';
import menuConfig from '../menu.config';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  menuList: any = menuConfig.menuList;
  breadcrumbs;

  // todo 考虑参数问题
  constructor(private router: Router, private location: Location) {
    // console.log('路由数据', this.menuList);
  }

  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        this.breadcrumbs = [];
        if (event instanceof NavigationEnd) { // 当导航成功结束时执行
          console.log('NavigationEnd:', event.url);
          if (event && event.url) {
            event.url = event.url.split('?')[0];
            const paths = event.url.split('/');
            if (paths.length > 1 && paths[1]) {
              for (let i = 0; i < this.menuList.length; i++) {
                if (paths[1] === this.menuList[i].path) {
                  console.log('匹配到一级路由', this.menuList[i].title);
                  this.breadcrumbs.push({
                    title: this.menuList[i].title,
                    path: (this.menuList[i].children && this.menuList[i].children.length > 0) ? ( this.menuList[i].path + '/' + this.menuList[i].children[0].path) : this.menuList[i].path
                  });
                  if (this.menuList[i].children && paths.length > 2) {
                    for (let j = 0; j < this.menuList[i].children.length; j++) {
                      if (this.menuList[i].children[j].path === paths[2]) {
                        console.log('匹配到二级路由', this.menuList[i].children[j].title);
                        this.breadcrumbs.push({
                          title: this.menuList[i].children[j].title,
                          path: this.menuList[i].path + '/' + this.menuList[i].children[j].path
                        });
                        break;
                      }
                      for (let k = 0; this.menuList[i].children[j].children && k < this.menuList[i].children[j].children.length; k++) {
                        if (this.menuList[i].children[j].children[k].path === paths[2]) {
                          console.log('匹配到三级路由', this.menuList[i].children[j].children[k].title);
                          this.breadcrumbs.push({
                            title: this.menuList[i].children[j].title,
                            path: this.menuList[i].path + '/' + this.menuList[i].children[j].path
                          });
                          this.breadcrumbs.push({
                            title: this.menuList[i].children[j].children[k].title,
                            path: this.menuList[i].path + '/' + this.menuList[i].children[j].children[k].path
                          });
                          return;
                        }
                      }
                    }
                  }
                  break;
                }
              }
            } else {
              this.breadcrumbs.push(
                {
                  title: menuConfig.menu.title,
                  path: menuConfig.menu.path
                }
              );
              if (menuConfig.menu.children && menuConfig.menu.children.length) {
                this.breadcrumbs.push({
                  title: menuConfig.menu.children[0].title,
                  path: menuConfig.menu.children[0].path
                });
              }
            }
          }
        }
      });
  }

  back(flag, item) {
    if (flag) {
      this.location.back();
      const vm = this;
      // todo 这个定时器是为了解决当用户直接打开详情页或者重载导致的面包屑不跳转问题
      // 这样做虽然能够解决不跳转问题，但是会有500ms的延迟，并且当路由器跳转速度太慢时，参数就会被重置
      setTimeout(function () {
        const path = location.href.split('#')[1].split('?')[0];
        if (path !== '/' + item.path) {
          vm.router.navigate([item.path], {queryParams: this.params});
        }
      }, 500);
    }
  }

}
