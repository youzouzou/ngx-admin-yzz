import {Component} from '@angular/core';

@Component({
  selector: 'tab-page',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.css']
})

export class TabPage {
  curTabIndex:number = 0;
  showStatus = false;

  getTabData(index) {
    this.curTabIndex = index;
  }

  openModal(index) {
    this.showStatus = true;// todo 这个要改成自动的，不要出现这个状态值
  }
  closeModal(){
    this.showStatus =false;
  }
}
