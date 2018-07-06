import {Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'select-input',
  templateUrl: './selectInput.component.html',
  styleUrls: ['./selectInput.component.css']
})

export class SelectInputComponent {
  @Input() width: number = 150;
  @Input() keyword: string; // 初始化的默认值
  @Input() list: any; // 筛选列表
  @Input() label: string; // 展示的值
  @Input() placeholder: string;
  @Output() getInputValue: EventEmitter<any> = new EventEmitter;

  showStatus = false;

  constructor() {
  }

  changeInput() {
    // console.log('输入内容', this.keyword);
    this.getInputValue.emit({
      value: this.keyword,
      selected: null
    });
  }

  select(data) {
    // console.log('选中', data);
    this.keyword = data[this.label];
    this.getInputValue.emit({
      value: this.keyword,
      selected: data
    });
    this.showStatus = false;
  }

  blurInput() {
    let vm = this;
    setTimeout(function () {
      vm.showStatus = false;
    }, 300)
  }
}
