import {Injectable} from '@angular/core';

@Injectable()
export class msgService {
  setMsg: any;

  constructor() {
    // todo 自定义可选参数：常见类型的提示，显示的位置
    this.setMsg = function (msgConfig) {
      const msgDiv = document.createElement('div');
      msgDiv.className = 'service-msg';
      msgDiv.style.left = (window.innerWidth - 200) / 2 + 'px';
      msgDiv.innerHTML = msgConfig.content;
      document.body.appendChild(msgDiv);
    };

    // todo 0624
    // this.setBottomMsgLine = function (msgConfig) {
    // };
    return this;
  }
}
