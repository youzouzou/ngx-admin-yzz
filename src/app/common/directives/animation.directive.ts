import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[animation]',
})
export class Animation {
  @Input() animation: string;
  elDOM: any;

  constructor(public el: ElementRef) {
    this.elDOM = el;
  }

  ngOnInit() {
    let vm = this;
    var styleNode = document.createElement("style");
    styleNode.type = "text/css";
    // CSS样式源码见animation.directive.css文件
    styleNode.innerHTML = '.linear-show{animation:linear-show-func 1s linear}.linear-show-hide{animation:linear-show-hide-func 2.5s linear;opacity:0}.bounce-show{animation:bounce-show-func 1s linear}.rotate-x-show{animation:rotate-x-show-func 1s linear}.rotate-y-show{animation:rotate-y-show-func 1s linear}.rotate-z-show{animation:rotate-z-show-func 1s linear}@keyframes linear-show-func{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes linear-show-func{0%{opacity:0}100%{opacity:1}}@keyframes linear-hide-func{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes linear-show-func{0%{opacity:1}100%{opacity:0}}@keyframes linear-show-hide-func{0%{opacity:0}10%{opacity:1}80%{opacity:1}100%{opacity:0}}@-webkit-keyframes linear-show-hide-func{0%{opacity:0}10%{opacity:1}80%{opacity:1}100%{opacity:0}}@keyframes bounce-show-func{0%{transform:scale(0)}30%{transform:scale(1.2)}70%{transform:scale(0.8)}100%{transform:scale(1)}}@-webkit-keyframes bounce-show-func{0%{transform:scale(0)}30%{transform:scale(1.2)}70%{transform:scale(0.8)}100%{transform:scale(1)}}@keyframes rotate-x-show-func{0%{transform:rotateX(0deg)}100%{transform:rotateX(360deg)}}@-webkit-keyframes rotate-x-show-func{0%{transform:rotateX(0deg)}100%{transform:rotateX(360deg)}}@keyframes rotate-y-show-func{0%{transform:rotateY(0deg)}100%{transform:rotateY(360deg)}}@-webkit-keyframes rotate-y-show-func{0%{transform:rotateY(0deg)}100%{transform:rotateY(360deg)}}@keyframes rotate-z-show-func{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@-webkit-keyframes rotate-z-show-func{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}';
    document.body.appendChild(styleNode);
    vm.animate(vm.animation);
  }

  animate(animation) {
    // console.log('动画名称', this.elDOM, this.animation);
    console.log(animation);
    var vm = this;
    var className = vm.elDOM.nativeElement.className;
    vm.elDOM.nativeElement.className = className + ' ' + animation;
  }

}
