import {Component} from '@angular/core';
import {msgService} from "../../common/service/msg.service";
import {modalService} from "../../common/service/modal.service";

@Component({
  selector: 'table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.css']
})

export class TableComponent {
  screenWidth = (1200 > window.innerWidth ? 1200 : window.innerWidth);
  pageConfig: any;
  labelList = [
    '菜名',
    '价格',
    '送餐地址',
    '客户名称',
    '备注',
    '操作'
  ];

  data = [
    {
      name: '黄焖鸡+茄子+千张豆腐+火腿+鸡蛋+茄子+千张豆腐+火腿+鸡蛋+茄子+千张豆腐+火腿+鸡蛋',
      price: 25.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡+茄子+千张豆腐+火腿',
      price: 25.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡+茄子+千张豆腐+火腿',
      price: 25.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡+茄子+千张豆腐+火腿',
      price: 25.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡+茄子+千张豆腐+火腿',
      price: 25.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    },
    {
      name: '黄焖鸡',
      price: 16.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    }
  ];

  tableConfig = {
    width: ['15%', '10%', '20%', '30%', '15%', '10%'],
    height: '50px'
  };

  getKeys(item) {
    return Object.keys(item);
  }

  constructor(public msgService: msgService, public modalService: modalService) {
    this.pageConfig = {
      totalPage: 6,
      curPage: 3
    };
    var vm = this;
    window.onresize = function () {
      vm.screenWidth = (1200 > window.innerWidth ? 1200 : window.innerWidth);
    }
  }

  alertMsg(item, index) {
    const msg = '订单序号：' + index + '：' + 'item.receiver' + '的' + item.name + '，送到' + item.address;
    var setMsg = this.msgService.setMsg;
    setMsg({
      content: msg
    });
  }

  getPageData(curPageNo) {
    console.log('触发', curPageNo);
  }

  openModal() {
    var setModal = this.modalService.setModal;
    setModal({
      content: 'open success.'
    });
  }
}
