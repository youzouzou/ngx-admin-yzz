import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  // styleUrls: ['./icon.component.css']
})

export class IconComponent implements OnInit {
  @Input() width = 15;
  @Input() height = 15;
  @Input() desc: string;
  @Input() type = 'png';
  @Input() name: string;
  @Input() showTipStatus = true;
  url: string;

  ngOnInit() {
    const path = window.document.location.pathname.substring(0, window.document.location.pathname.substr(1).indexOf('/') + 1);
    // console.log('路径', path);
    this.url = path + '/assets/icon/' + this.name + '.' + this.type;
  }

}
