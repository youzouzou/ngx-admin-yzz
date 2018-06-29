import {Component, Input, Output, EventEmitter} from '@angular/core';
import {} from "selenium-webdriver";
@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})

export class TabComponent {
  @Input() tabList;
  @Output() changeTab: EventEmitter<Number> = new EventEmitter;// 子组件向父组件广播事件，触发改变当前页面的事件
  @Input() curIndex: number = 0;

  constructor() {
    this.tabList = [
      {
        title: '标签页',
        hidden: false
      },
      {
        title: '标签页',
        hidden: false
      },
      {
        title: '标签页',
        hidden: false
      },
      {
        title: '标签页',
        hidden: false
      },
      {
        title: '标签页',
        hidden: false
      }
    ]
  }

  changeCurTab(index) {
    this.curIndex = index;
    this.changeTab.emit(this.curIndex);
  }
}
