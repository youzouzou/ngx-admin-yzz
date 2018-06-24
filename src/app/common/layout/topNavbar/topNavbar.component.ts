import { Component } from '@angular/core';
import menuConfig from '../menu.config';

@Component({
  selector: 'top-navbar',
  templateUrl: './topNavbar.component.html',
  styleUrls: ['./topNavbar.component.css']
})
export class TopNavbarComponent {
  menuList = menuConfig.menuList;
  screenWidth = window.innerWidth;
}
