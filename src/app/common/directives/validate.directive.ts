import {Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[validate]'
})
export class Validate {
  @Input() rule:any;
  @Input() validateValue:any;

  el:any;
  newDiv:any;
  msg:string;

  constructor(el:ElementRef) {
    this.el = el;
  }

  ngOnInit() {
    this.el.nativeElement.parentElement.style.position = 'relative';
    this.el.nativeElement.parentElement.style.height = this.el.nativeElement.parentElement.clientHeight + 10;
    this.newDiv = document.createElement('div');
    this.newDiv.style.position = 'absolute';
    this.newDiv.style.zIndex = 1000;
    this.newDiv.style.fontSize = '12px';
    this.newDiv.style.display = 'none';
    this.newDiv.style.top = this.el.nativeElement.clientHeight;
    this.newDiv.style.left = this.el.nativeElement.offsetLeft;
    this.newDiv.style.color = 'red';
    this.newDiv.innerText = this.msg;
    this.el.nativeElement.parentElement.appendChild(this.newDiv);
    let vm = this;
    this.el.nativeElement.onchange = function () {
      for (let i = 0; i < vm.rule.length; i++) {
        if(vm.rule[i].required){
          vm.msg='g';
        }
      }
    }
  }

}
