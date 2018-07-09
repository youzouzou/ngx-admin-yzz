import {Component} from '@angular/core';

@Component({
  selector: 'tab-page',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.css']
})

export class TabPage {
  curTabIndex: number = 0;
  showStatus = false;
  showStatus2 = false;

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
