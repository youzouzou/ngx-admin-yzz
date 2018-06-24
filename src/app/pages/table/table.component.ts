import { Component } from '@angular/core';
import {msgService} from "../../common/service/msg.service";

@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {
  pageConfig:object;
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
  screenWidth = window.innerWidth * 0.98 + 'px';

  getKeys(item) {
    return Object.keys(item);
  }

  constructor(public msgService:msgService) {
    this.msgService = msgService;
    this.pageConfig = {
      totalPage: 6,
      curPage: 3
    };
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

}
