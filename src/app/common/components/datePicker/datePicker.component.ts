import {Component, Input, Output, EventEmitter} from '@angular/core';
import {DatepickerOptions} from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/zh_cn';

@Component({
  selector: 'date-picker',
  templateUrl: './datePicker.component.html',
  styleUrls: ['./datePicker.component.css']
})

export class DatePickerComponent {
  @Input() date = '';
  @Input() isShowButton = true;
  @Input() buttonText = '查询';
  @Output() search: EventEmitter<string> = new EventEmitter;
  options: DatepickerOptions = {
    // minYear: 1970,
    // maxYear: 2030,
    displayFormat: 'YYYY年MM月DD日',
    // barTitleFormat: 'MMMM YYYY',
    // dayNamesFormat: 'dd',
    // firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    locale: frLocale,
    // minDate: new Date(Date.now()), // Minimal selectable date
    // maxDate: new Date(Date.now()),  // Maximal selectable date
    barTitleIfEmpty: '请选择日期',
    placeholder: '选择日期', // HTML input placeholder attribute (default: '')
    // addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
    // addStyle: {}, // Optional, value to pass to [ngStyle] on the input field
    // fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
    // useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown
  };

  clickButton() {
    console.log('点击按钮');
    this.search.emit(this.date);
  }

  clear() {
    this.date = null;
    this.clickButton();
  }

}
