import {Component, Input, Output, EventEmitter, DoCheck} from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements DoCheck {
  // @Input() totalPage = 1;
  @Input() curPage = 1;
  @Input() totalNum = 0;
  @Input() pageSize = 20;
  @Input() skipStatus = false; // 是否显示跳页输入框
  @Output() changeCurPage: EventEmitter<Number> = new EventEmitter;// 子组件向父组件广播事件，触发改变当前页面的事件
  pageList: any;
  totalPage = 1;

  constructor() {
    this.pageList = [];
  }

  ngDoCheck() {
    this.totalPage = Math.ceil(this.totalNum / (this.pageSize * 1.0)); // 浮点型
    this.setPageList();
  }

  setPageList() {
    const vm = this;
    vm.pageList = [];
    if (vm.totalPage && vm.curPage > vm.totalPage) {
      vm.curPage = 1;
      this.changeCurPage.emit(vm.curPage);
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

  skip(event) {
    if (event && Number(event.keyCode) === 13 || !event) {
      if (this.curPage < 1) {
        this.curPage = 1;
      } else if (this.curPage > this.totalPage) {
        this.curPage = this.totalPage;
      }
      this.changeCurPage.emit(this.curPage);
    }
  }

}
