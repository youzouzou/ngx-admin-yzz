import {Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'multi-select',
  templateUrl: './multiSelect.component.html',
  styleUrls: ['./multiSelect.component.css']
})

export class multiSelectComponent {
  @Input() data = [];// 级联数组
  /*data = [{
    province: '北京',
    provinceCode: 1,
    cities: [
      {
        city: '北京市',
        cityCode: 2,
        areas: [
          {
            area: '东城区',
            areaCode: 3
          }
        ]
      }
    ]
  }];*/
  @Input() firstName = '';// 用于展示给用户的标签字段名 如 province
  @Input() secondName = '';// 用于展示给用户的标签字段名，如 city
  @Input() thirdName = '';// 用于展示给用户的标签字段名，如 area
  @Input() secondChild = '';// 存放第二个数组的属性名，如 cities
  @Input() thirdChild = '';// 存放第三个数组的属性名，如 areas
  @Input() firstLabel = '';// 第一个数组的值的字段名，如 provinceCode
  @Input() firstValue = '';// 初始化第一个数组选中的值
  @Input() secondLabel = '';// 第二个数组的值的字段名，如 cityCode
  @Input() secondValue = '';// 初始化第二个数组选中的值
  @Input() thirdLabel = '';// 第三个数组的值的字段名，如 areaCode
  @Input() thirdValue = '';// 初始化第三个数组选中的值
  @Input() mouseHide = false; // 鼠标离开立即消失
  @Output() getValue: EventEmitter<any> = new EventEmitter;

  secondList = [];
  thirdList = [];
  firstSelectedShowName = '';
  secondSelectedShowName = '';
  thirdSelectedShowName = '';
  showStatus = false;

  ngDoCheck() {
    if (!this.firstSelectedShowName && !this.secondSelectedShowName && !this.thirdSelectedShowName) {
      if (this.firstValue && this.firstLabel && this.data) {
        for (let i = 0; i < this.data.length; i++) {// 初始化第一层
          if (this.data[i][this.firstLabel] == this.firstValue) {
            this.firstSelectedShowName = this.data[i][this.firstName];
            console.log('匹配到第1层', this.firstSelectedShowName);
            if (this.secondChild) {
              this.secondList = this.data[i][this.secondChild] ? this.data[i][this.secondChild] : [];

              if (this.secondLabel && this.secondValue) {
                for (let j = 0; j < this.secondList.length; j++) {// 初始化第二层
                  if (this.secondList[j][this.secondLabel] == this.secondValue) {
                    this.secondSelectedShowName = this.secondList[j][this.secondName];
                    console.log('匹配到第2层', this.secondSelectedShowName);
                    if (this.thirdChild) {
                      this.thirdList = this.secondList[j][this.thirdChild] ? this.secondList[j][this.thirdChild] : [];
                      if (this.thirdLabel && this.thirdValue) {
                        for (let k = 0; k < this.thirdList.length; k++) {// 初始化第三层
                          if (this.thirdList[k][this.thirdLabel] == this.thirdValue) {
                            this.thirdSelectedShowName = this.thirdList[k][this.thirdName];
                            console.log('匹配到第3层', this.thirdSelectedShowName);
                            break;
                          }
                        }
                      }

                    }
                  }
                  break;
                }
              }
            }
          }
        }
      }
    }
  }

  selected(level, item) {
    if (level == 1) {
      this.firstValue = item[this.firstLabel];
      this.firstSelectedShowName = item[this.firstName];
      this.secondSelectedShowName = '';
      this.thirdSelectedShowName = '';
      this.secondList = item[this.secondChild];
      this.thirdList = [];
      this.secondValue = '';
      this.thirdValue = '';
      if (!this.secondList || !this.secondList.length) {
        this.showStatus = false;
      }
    } else if (level == 2) {
      this.secondValue = item[this.secondLabel];
      this.secondSelectedShowName = item[this.secondName];
      this.thirdSelectedShowName = '';
      this.thirdList = item[this.thirdChild];
      this.thirdValue = '';
      if (!this.thirdList || !this.thirdList.length) {
        this.showStatus = false;
      }
    } else if (level == 3) {
      this.thirdValue = item[this.thirdLabel];
      this.thirdSelectedShowName = item[this.thirdName];
      this.showStatus = false;
    }
    // console.log('当前选中值', this.firstValue, this.secondValue, this.thirdValue);
    this.getValue.emit([this.firstValue, this.secondValue, this.thirdValue]);
  }
}
