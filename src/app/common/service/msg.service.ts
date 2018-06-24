import { Injectable } from '@angular/core';

@Injectable()
export class msgService {
  setMsg:any;
  setBottomMsgLine:any;

  constructor() {
    this.setMsg = function (msgConfig) {
      var msgDiv = document.createElement('div');
      msgDiv.className = 'service-msg';
      msgDiv.style.left = (window.innerWidth - 200) / 2 + 'px';
      msgDiv.innerHTML = msgConfig.content;
      document.body.appendChild(msgDiv);
    };

    // todo 0624
    this.setBottomMsgLine = function (msgConfig) {
    };
    return this;
  }
}
