import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

let status = false; // todo 是否开启控制台打印日志
if (status) {
  window.console.log = () => {};
  window.console.info = () => {};
  window.console.warn = () => {};
  window.console.error = () => {};
  window.console.debug = () => {};
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
