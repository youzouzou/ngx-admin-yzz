import { Component } from '@angular/core';

@Component({
  selector: 'smart-table',
  templateUrl: './smart-table.page.html',
  styleUrls: ['./smart-table.page.css']
})

export class SmartTableComponent {
  settings = {
    columns: {
      name: {
        title: '菜名'
      },
      price: {
        title: '价格'
      },
      address: {
        title: '送餐地址'
      },
      receiver: {
        title: '客户名称'
      },
      remark: {
        title: '备注'
      }
    }
  };
  data = [
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
    },
    {
      name: '黄焖鸡',
      price: 16.00,
      remark: '不要辣',
      address: 'xx区xx街道xx楼xx层xx号',
      receiver: '王小二'
    }
  ];
}
