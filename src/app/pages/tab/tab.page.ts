import {Component} from '@angular/core';

@Component({
  selector: 'tab-page',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.css']
})

export class TabPage {
  curTabIndex: number = 0;

  getTabData(index) {
    this.curTabIndex = index;
  }
}
