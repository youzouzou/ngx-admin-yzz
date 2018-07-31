import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})

// todo 不能直接改变数据对象，只能通过changeCheckStatus通知外部引用列表中的第几个对象的状态变化
export class CheckboxComponent implements OnInit {
  @Input() checkStatus: boolean | number | string; // 选中状态
  @Input() checkLabel: string; // 右侧描述
  @Input() checkboxColor: 'white' | 'black'; // 复选框钩子的图标可选中，支持自定义checkIcon，参数值为图标url链接
  @Input() checkIcon: string;
  @Input() checkboxBg = '#fff'; // 复选框的背景色
  @Input() checkboxBorderColor = '#fff';
  @Input() checkboxSize = 20; // 复选框大小
  @Input() checkDisabled = false; // 是否可选，默认为可选
  @Output() changeCheckStatus: EventEmitter<boolean | number | string> = new EventEmitter;

  ngOnInit() {
    if (!this.checkIcon) {
      if (this.checkboxColor === 'white') {
        this.checkIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAYFBMVEUAAADR2trt9PWswcKXsbGUqauAn5/1+Pj5+/v1+Pn////p7e3i6+vk6end6enP1tnU2tzT397N2dri6+vK09K3w8Oevb+80tDM39+vw8Oxxsl/o6Rbj4/////8/Pz1+fnll148AAAAHXRSTlMApIBeVjAh9+zo5drXy8C3p4+JgXtmRDkzLScWDleb5DoAAABVSURBVBjTtcg3EoAwEATBBRm892bF/39JEanExepggkF86QRhJcW7Ms5iNuzEG1jC27evmjT+qccdgCUXeGfPAqiZINAyGVkhdOeks/gxjhqCShHXCyt9A/Xsc7rXAAAAAElFTkSuQmCC';
      } else if (this.checkboxColor === 'black' || !this.checkIcon) {
        this.checkIcon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAXVBMVEUAAAAtJiUSCwpoTk47JyhrVlRPOjl/YGAKBwcGBAQKBwYAAAAWEhIdFBQbFhYiFhYwKSYtIyMsICEyJiUdFBQ1LC1IPDxTQkBTOzthQkCAXFukcHCAaWYAAAAKBgbQXivSAAAAHXRSTlMAp4BWNjAqIffs6OXa18vAt6GPiYF7ZmJaRBYOBU4rugEAAABTSURBVBjTtcg3DoBAFANRk3POYbj/MRHVCn7NKyx59D9/lLGBaXvKZGJNa1pPcboXhs8GELm2XsRSArOc2COXKjy9NHQDpd6ODEj0EUEgY/H1rxsobgP48AG/KwAAAABJRU5ErkJggg==';
      }
    }
  }

  changeStatus(checkStatus) {
    if (!this.checkDisabled) {
      this.checkStatus = !checkStatus;
      this.changeCheckStatus.emit(this.checkStatus);
    }
    event.preventDefault();
    event.stopPropagation();
  }
}
