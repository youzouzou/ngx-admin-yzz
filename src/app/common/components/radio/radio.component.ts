import {Component, Input} from '@angular/core';
@Component({
  selector: 'radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})

export class RadioComponent {
  @Input() name: string;
  @Input() value: any;
  @Input() model: any;
}
