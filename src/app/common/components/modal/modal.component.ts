import {Component, Input, Output, EventEmitter, ElementRef, DoCheck} from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements DoCheck {
  @Input() width: number = 500;
  @Input() height: number = 300;
  screenWidth: number = window.innerWidth;
  screenHeight: number = window.innerHeight;
  @Input() modalStatus: boolean;
  @Input() bgClose: boolean = true; // 点击背景遮罩关闭模态框
  @Output() close: EventEmitter<any> = new EventEmitter;

  ngDoCheck() {
    const vm = this;
    if (this.modalStatus) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.onresize = function () {
      vm.screenWidth = window.innerWidth;
      vm.screenHeight = window.innerHeight;
    };
  }

  closeModal() {
    if (this.bgClose) {
      document.body.style.position = 'relative';
      document.body.style.overflow = 'auto';
      this.modalStatus = false;
      this.close.emit(false);
    }
  }
}
