import {Component, Input} from '@angular/core';
@Component({
  selector: 'switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})

export class SwitcherComponent {
  @Input() value = false;
  @Input() model: any;
  @Input() attr = 'checkStatus';

  changeSwitch() {
    console.log('改变状态', this.value);
    if (this.model && typeof this.model === 'object') {
      this.model[this.attr] = this.value;
    }
  }
}
