import {Component} from '@angular/core';

@Component({
  selector: 'tab-page',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.css']
})

export class TabPage {
  curTabIndex = 0;
  showStatus = false;
  showStatus2 = false;
  tabList = [];

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
    ];
  }

  getTabData(index) {
    this.curTabIndex = index;
  }

  openModal2() {
    this.showStatus2 = true;
  }

  openModal() {
    this.showStatus = true;
  }

  closeModal() {
    this.showStatus = false;
  }

  closeModal2() {
    this.showStatus2 = false;
  }

}
