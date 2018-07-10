import {Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})

export class TabComponent {
  @Input() tabList;
  @Input() curIndex: number = 0;
  @Input() style: string;
  @Output() changeTab: EventEmitter<Number> = new EventEmitter;// 子组件向父组件广播事件，触发改变当前页面的事件

  changeCurTab(index) {
    this.curIndex = index;
    this.changeTab.emit(this.curIndex);
  }
}
