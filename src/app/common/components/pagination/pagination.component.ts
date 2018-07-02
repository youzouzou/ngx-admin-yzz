import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalPage:number;
  @Input() curPage:number;
  @Output() changeCurPage:EventEmitter<Number> = new EventEmitter;// 子组件向父组件广播事件，触发改变当前页面的事件
  pageList:any;

  constructor() {
    this.pageList = [];
  }

  ngOnInit() {
    this.setPageList();
  }

  setPageList() {
    var vm = this;
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
    let vm = this;
    vm.curPage = pageNo;
    vm.changeCurPage.emit(vm.curPage);
    this.setPageList();
  }

  // todo 输入页码跳转

}
