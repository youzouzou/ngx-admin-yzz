import { Injectable } from '@angular/core';

@Injectable()
export class modalService {
  setModal:any;
  modalConfig:object;

  constructor() {
    // todo  可能要用动态组件 https://angular.cn/guide/dynamic-component-loader
    this.setModal = function (modalConfig) {
      ////console.log('模态框设置参数', modalConfig);
      //var modalDiv = document.createElement('modal');
      ////modalDiv.innerHTML = '<modal></modal>';
      //document.body.appendChild(modalDiv);
    };
    return this;
  }
}
