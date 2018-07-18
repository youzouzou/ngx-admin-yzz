import {Component} from '@angular/core';
import {globalService} from './common/service/global.service';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  globalData = {
    loadStatus: false
  };
  reloadStatus = true;
  constructor(global: globalService, translate: TranslateService) {
    this.globalData = global;
    // 添加语言支持
    translate.addLangs(['zh-CN', 'en']);
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('zh-CN');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('zh-CN');
  }

  // todo 点击左侧菜单刷新右侧视图，这个方法能实现效果，但不是很优雅
  // 点击左侧菜单后会重新渲染右侧router-outlet组件
  reload() {
    this.reloadStatus = false;
    const vm = this;
    setTimeout(function () {
      vm.reloadStatus = true;
    }, 1);
  }
}
