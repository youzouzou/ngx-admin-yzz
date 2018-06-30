import {Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})

export class CheckboxComponent {
  @Input() checkStatus: boolean | number | string; // 选中状态
  @Input() checkboxColor: 'white' | 'black'; // 复选框钩子的图标可选中，支持自定义checkIcon，参数值为图标url链接
  @Input() checkIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAXVBMVEUAAAAtJiUSCwpoTk47JyhrVlRPOjl/YGAKBwcGBAQKBwYAAAAWEhIdFBQbFhYiFhYwKSYtIyMsICEyJiUdFBQ1LC1IPDxTQkBTOzthQkCAXFukcHCAaWYAAAAKBgbQXivSAAAAHXRSTlMAp4BWNjAqIffs6OXa18vAt6GPiYF7ZmJaRBYOBU4rugEAAABTSURBVBjTtcg3DoBAFANRk3POYbj/MRHVCn7NKyx59D9/lLGBaXvKZGJNa1pPcboXhs8GELm2XsRSArOc2COXKjy9NHQDpd6ODEj0EUEgY/H1rxsobgP48AG/KwAAAABJRU5ErkJggg==';
  @Input() checkboxBg = '#fff'; // 复选框的背景色
  @Input() checkboxSize = 20; // 复选框大小
  @Output() changeCheckStatus: EventEmitter<boolean | number | string> = new EventEmitter;

  changeStatus(checkStatus) {
    this.checkStatus = !checkStatus;
    this.changeCheckStatus.emit(this.checkStatus);
    event.preventDefault();
    event.stopPropagation();
  }
}
