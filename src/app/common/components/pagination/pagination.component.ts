import {Component, Input, Output, EventEmitter, DoCheck} from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements  DoCheck {
  @Input() totalPage = 1;
  @Input() curPage = 1;
  @Output() changeCurPage: EventEmitter<Number> = new EventEmitter;// 子组件向父组件广播事件，触发改变当前页面的事件
  pageList: any;

  constructor() {
    this.pageList = [];
  }

  ngDoCheck() {
    this.setPageList();
  }

  setPageList() {
    const vm = this;
    vm.pageList = [];
    if (vm.curPage > vm.totalPage) {
      vm.curPage = 1;
    }
    if (vm.totalPage <= 5 || vm.curPage <= 5) {
      for (let i = 0; (i < vm.totalPage && i < 5); i++) {
        vm.pageList.push(i + 1);
      }
    } else {
      if (vm.curPage + 2 < vm.totalPage) {
        for (let i = vm.curPage - 3; i < vm.curPage + 2; i++) {
          vm.pageList.push(i + 1);
        }
      } else {
        for (let i = vm.totalPage - 5; i < vm.totalPage; i++) {
          vm.pageList.push(i + 1);
        }
      }
    }
  }

  changePage(pageNo) {
    const vm = this;
    if (vm.curPage !== pageNo) {
      vm.curPage = pageNo;
      vm.changeCurPage.emit(vm.curPage);
      this.setPageList();
    }
  }

  // todo 输入页码跳转

}
