import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[animation]'
})
export class Animation {
  @Input() animation:string;
  elDOM:any;

  constructor(public el:ElementRef) {
    this.elDOM = el;
  }

  ngOnInit() {
    let vm = this;
    vm.animate(vm.animation);
  }

  animate(animation) {
    // console.log('动画名称', this.elDOM, this.animation);
    console.log(animation);
    var vm = this;
    var className = vm.elDOM.nativeElement.className;
    switch (animation) {
      case 'linearShow':
        vm.elDOM.nativeElement.className = className + ' animation-linear-show';
        break;
      case 'linearShowHide':
        vm.elDOM.nativeElement.className = className + ' linear-show-hide';

    }
  }

}
