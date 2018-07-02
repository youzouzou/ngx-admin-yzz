import {Component, Input, Output, EventEmitter, OnInit, DoCheck} from '@angular/core';
@Component({
  selector: 'radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})

export class RadioComponent implements DoCheck {
  @Input() radioData = [{}];
  @Input() radioLable;
  @Input() selectedValue; // 初始化默认选中值，若要生效，必须设置用于判断的字段名selectedName
  @Input() selectedName:string;// 初始化默认选中值的字段名
  @Input() selectedIndex:number;// 初始化默认选中值的下标，可为空
  @Input() radioSize = 20;
  @Input() radioBg = '#fff';
  @Input() radioColor = '#ccc';
  @Output() changeRadio:EventEmitter<any> = new EventEmitter;

  ngDoCheck() {
    this.setData();
  }

  setData() {
    if (!this.radioLable && this.radioData.length) {
      this.radioLable = '0';
    }
    if (this.selectedName) {
      for (let i = 0; i < this.radioData.length; i++) {
        if (this.selectedValue == this.radioData[i][this.selectedName]) {
          this.selectedIndex = i;
          break;
        }
      }
    }
  }

  selectRadio(item, index) {
    this.selectedIndex = index;
    this.changeRadio.emit({item, index});
  }
}
