import {Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[validate]'
})
export class Validate {
  constructor(el: ElementRef) {
  }
}
