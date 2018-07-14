import {Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  @Input() keyword = '';
  @Input() palceholder: string;
  @Output() search: EventEmitter<string> = new EventEmitter;

  clearKeyword() {
    this.keyword = '';
    this.changeKeyword();
  }

  changeKeyword() {
    // console.log('改变关键词', this.keyword);
    this.search.emit(this.keyword);
  }

  enetrKeyword(event) {
    if (event.keyCode == 13) {
      this.search.emit(this.keyword);
    }
  }
}
