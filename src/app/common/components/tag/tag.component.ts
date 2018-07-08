import {Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})

export class TagComponent {
  @Input() tagList = [];
  @Input() placeholder:string;
  focusStatus = false;
  tagInputValue:string;

  deleteTag(index) {
    this.tagList.splice(index, 1);
  }

  operateTag(event) {
    if (event.keyCode == 13 && this.tagInputValue) {// 回车添加
      this.addTag();
    } else if (event.keyCode == 8 && !this.tagInputValue) { // back删除
      if (this.tagList.length) {
        this.deleteTag(this.tagList.length - 1);
      }
    }
  }

  addTag() {
    if (this.tagInputValue && this.tagInputValue.replace(/\s/g, '').length) {
      this.tagList.push(this.tagInputValue);
    }
    this.tagInputValue = '';
  }

}
