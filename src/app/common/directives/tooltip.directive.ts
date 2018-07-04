import {Directive, ElementRef, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class Tooltip {
  @Input() tooltip: string;
  newDiv: any;
  ELDOM: any;

  constructor(el: ElementRef) {
    var vm = this;
    el.nativeElement.style.position = 'relative';
    vm.newDiv = document.createElement('div');
    // todo 0629 设置位置和颜色，并且不一定需要超长才展示
    vm.newDiv.style.position = 'absolute';
    vm.newDiv.style.zIndex = 1000;
    vm.newDiv.style.borderRadius = '8px';
    vm.newDiv.style.padding = '5px 15px';
    vm.newDiv.style.lineHeight = '24px';
    vm.newDiv.style.fontSize = '12px';
    vm.newDiv.style.display = 'none';
    // 配置颜色
    if(el.nativeElement.getAttribute('tooltip-type') === 'black'){
      vm.newDiv.style.background = '#000';
      vm.newDiv.style.color = '#fff';
    } else {
      vm.newDiv.style.background = '#fff';
      vm.newDiv.style.color = '#000';
    }

    vm.newDiv.onmouseenter = function () {
      vm.newDiv.style.display = 'block';
    };
    vm.newDiv.onmouseleave = function () {
      vm.newDiv.style.display = 'none';
    };
    document.body.appendChild(this.newDiv);
    vm.ELDOM = el;
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.tooltip && this.ELDOM.nativeElement.clientWidth < this.ELDOM.nativeElement.scrollWidth) {
      this.newDiv.style.display = 'block';
      this.newDiv.innerText = this.tooltip;
      this.newDiv.style.top = this.ELDOM.nativeElement.offsetTop + this.ELDOM.nativeElement.clientHeight * 0.8 + 'px';
      this.newDiv.style.left = this.ELDOM.nativeElement.offsetLeft + this.ELDOM.nativeElement.clientWidth * 0.5 + 'px';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.newDiv.style.display = 'none';
    this.newDiv.innerText = this.tooltip;
  }

}
