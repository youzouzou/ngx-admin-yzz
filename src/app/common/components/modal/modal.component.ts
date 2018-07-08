import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  screenWidth:number = window.innerWidth;
  @Input() modalStatus:boolean;
  @Output() close:EventEmitter<any> = new EventEmitter;

  constructor(el:ElementRef) {
    console.log('el', el);
    if (this.modalStatus) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal() {
    document.body.style.overflow = 'auto';
    this.modalStatus = false;
    this.close.emit(false);
  }
}
