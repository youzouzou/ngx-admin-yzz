import {Component, Input, DoCheck} from '@angular/core';
@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  // styleUrls: ['./icon.component.css']
})

export class IconComponent implements DoCheck{
  @Input() width = 15;
  @Input() height = 15;
  @Input() desc: string;
  @Input() type = 'png';
  @Input() name: string;
  url: string;

  ngDoCheck() {
    this.url = '/assets/icon/' + this.name + '.' + this.type;
  }

}
