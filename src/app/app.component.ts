import {Component} from '@angular/core';
import {globalService} from './common/service/global.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  globalData = {
    loadStatus: false
  };

  constructor(global:globalService) {
    this.globalData = global;
  }
}
