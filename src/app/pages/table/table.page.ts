import {Component} from '@angular/core';
import {DragulaService} from 'ng2-dragula';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'table-page',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.css']
})

export class TablePage {
  date: any;// = new Date();
  pageConfig: any;
  params = {
    keyword: null
  };
  labelList = [
    '菜名',
    '价格',
    '送餐地址',
    '客户名称',
    '备注',
    '上下架',
    '操作'
  ];

  data = [
    {
      name: '黄焖鸡+茄子+千张豆腐+火腿+鸡蛋+茄子+千张豆腐+火腿+鸡蛋+茄子+千张豆腐+火腿+鸡蛋',
      price: 25,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡+茄子+千张豆腐+火腿+鸡蛋+茄子+千张豆腐+火腿+鸡蛋+茄子+千张豆腐+火腿+鸡蛋',
      price: 16,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡+茄子+千张豆腐+火腿',
      price: 25,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡+茄子+千张豆腐+火腿',
      price: 25,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡+茄子+千张豆腐+火腿',
      price: 25,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡+茄子+千张豆腐+火腿',
      price: 25,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    }
  ];

  // getKeys(item) {
  //   return Object.keys(item);
  // }


  private onDrag(args) {
    const [e, el] = args;
    // do something
  }

  private onDrop(args) {
    const [e, el] = args;
    // do something
  }

  private onOver(args) {
    const [e, el, container] = args;
    // do something
  }

  private onOut(args) {
    const [e, el, container] = args;
    // do something
  }

  constructor(private dragulaService: DragulaService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.pageConfig = {
      totalNum: 100,
      curPage: 1
    };
    console.log('router参数', activatedRoute);
    const vm = this;
    activatedRoute.queryParams.subscribe(queryParams => {
      vm.params.keyword = queryParams.keyword;
    });
  }

  ngOnInit() {
    const vm = this;
    // 拖拽事件
    vm.dragulaService.drag.subscribe((value) => {
      // console.log(`drag: ${value[0]}`, value);
      vm.onDrag(value.slice(1));
    });
    vm.dragulaService.drop.subscribe((value) => {
      // console.log('当前排序', vm.data);
      vm.onDrop(value.slice(1));
    });
    vm.dragulaService.over.subscribe((value) => {
      // console.log(`over: ${value[0]}`, value);
      vm.onOver(value.slice(1));
    });
    vm.dragulaService.out.subscribe((value) => {
      // console.log(`out: ${value[0]}`, value);
      vm.onOut(value.slice(1));
    });
  }

  alertMsg(item, index) {
    const msg = '订单序号：' + index + '：' + 'item.receiver' + '的' + item.name + '，送到' + item.address;
  }

  getPageData(curPageNo) {
    console.log('触发', curPageNo);
  }

  search(keyword) {
    console.log('搜索', keyword);
    this.params.keyword = keyword;
    this.router.navigate([], {queryParams: this.params});
    // this.getList(); // 这里还需要从后端获取数据
  }

  dateSearch(date) {
    console.log('日期', date);
    this.date = date;
  }
}
