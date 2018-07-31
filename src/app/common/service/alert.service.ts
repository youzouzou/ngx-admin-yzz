import {Injectable} from '@angular/core';
import {NgxCoolDialogsService} from 'ngx-cool-dialogs';

@Injectable()
export class alertService {
  confirm: Function;
  success: Function;
  warning: Function;
  error: Function;

  constructor(private coolDialogs: NgxCoolDialogsService) {
    const vm = this;
    if (!document.getElementById('alertStyle')) {
      const styleNode = document.createElement('style');
      styleNode.id = 'alertStyle';
      styleNode.type = 'text/css';
      styleNode.innerHTML = '.alert{padding: 10px 15px;position: fixed;top: 90px;width: 200px;font-size: 12px;text-align: center;background: #fff;border-radius: 10px;animation: show-msg 3s;opacity: 0;}';
      document.body.appendChild(styleNode);
    }
    vm.confirm = function (title: string, desc?: string, confirm?: Function) {
      vm.coolDialogs.confirm(desc, {
        theme: 'default',
        okButtonText: '确定',
        cancelButtonText: '取消',
        color: '#ff893e',
        title: title
      }).subscribe(res => {
        if (res) {
          confirm(res);
        }
      });
    };
    vm.success = function (title: string, seconds?: number) {
      const msgDiv = document.createElement('div');
      msgDiv.className = 'alert';
      msgDiv.style.color = '#1FBF5B';
      msgDiv.style.border = '1px solid #1FBF5B';
      msgDiv.style.left = (window.innerWidth - 200) / 2 + 'px';
      msgDiv.innerHTML = title;
      document.body.appendChild(msgDiv);
      setTimeout(function () {
        document.body.removeChild(msgDiv);
      }, seconds ? seconds : 2000);
    };
    vm.warning = function (title: string, seconds?: number) {
      const msgDiv = document.createElement('div');
      msgDiv.className = 'alert';
      msgDiv.style.color = '#ff893e';
      msgDiv.style.border = '1px solid #FFCC66';
      msgDiv.style.left = (window.innerWidth - 200) / 2 + 'px';
      msgDiv.innerHTML = title;
      document.body.appendChild(msgDiv);
      setTimeout(function () {
        document.body.removeChild(msgDiv);
      }, seconds ? seconds : 2000);
    };
    vm.error = function (title: string, seconds?: number) {
      const msgDiv = document.createElement('div');
      msgDiv.className = 'alert';
      msgDiv.style.color = '#EA0000';
      msgDiv.style.border = '1px solid #EA0000';
      msgDiv.style.left = (window.innerWidth - 200) / 2 + 'px';
      msgDiv.innerHTML = title;
      document.body.appendChild(msgDiv);
      setTimeout(function () {
        document.body.removeChild(msgDiv);
      }, seconds ? seconds : 2000);
    };
    return vm;
  }
}
