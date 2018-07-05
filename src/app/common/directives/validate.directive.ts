import {Directive, ElementRef, Input, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[validate]'
})
export class Validate {
  @Input() rule: any;
  @Input() validateValue: any;
  @Input() validated: string;// 验证的类型，input，submit
  @Input() validateRules: any;
  @Output() submit: EventEmitter<Boolean> = new EventEmitter;
  el: any;
  newDiv: any;

  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnInit() {
    if (this.validated !== 'submit') {
      this.el.nativeElement.parentElement.style.position = 'relative';
      this.el.nativeElement.parentElement.style.height = this.el.nativeElement.parentElement.clientHeight + 10;
      this.newDiv = document.createElement('div');
      this.newDiv.style.position = 'absolute';
      this.newDiv.style.zIndex = 500;
      this.newDiv.style.fontSize = '12px';
      this.newDiv.style.display = 'none';
      this.newDiv.style.top = this.el.nativeElement.clientHeight;
      this.newDiv.style.left = this.el.nativeElement.offsetLeft;
      this.newDiv.style.color = 'red';
      this.el.nativeElement.parentElement.appendChild(this.newDiv);
      let vm = this;
      this.el.nativeElement.onchange = function () {
        vm.newDiv.style.display = 'none';
        for (let i = 0; i < vm.rule.length; i++) {
          vm.rule[i].validateResult = true;
          if (vm.rule[i].required) {
            if ((typeof vm.validateValue === 'number' && vm.validateValue == null) || (typeof vm.validateValue !== 'number' && !vm.validateValue)) {
              vm.newDiv.innerText = vm.rule[i].message;
              vm.newDiv.style.display = 'inline-block';
              vm.rule[i].validateResult = false;
              break;
            }
          } else if (vm.rule[i].validator && vm.rule[i].validator(vm.validateValue)) {
            vm.newDiv.innerText = vm.rule[i].validator(vm.validateValue);
            vm.newDiv.style.display = 'inline-block';
            vm.rule[i].validateResult = false;
            break;
          }
        }
      }
    } else {
      let vm = this;
      vm.el.nativeElement.onclick = function () {
        event.stopPropagation();
        event.preventDefault();
        let res = true;
        let keys = vm.getKeys(vm.validateRules);
        for (let i = 0; vm.validateRules && i < keys.length; i++) {
          for (let j = 0; j < vm.validateRules[keys[i]].length; j++) {
            if (vm.validateRules[keys[i]][j].validateResult === false || (vm.validateRules[keys[i]][j].required && !vm.validateRules[keys[i]][j].validateResult)) {
              res = false;
              break;
            }
          }
          if (!res) {
            break;
          }
        }
        vm.submit.emit(res);
      }
    }
  }

  getKeys(item) {
    return Object.keys(item);
  }
}
