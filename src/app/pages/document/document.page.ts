import {Component} from '@angular/core';

@Component({
  selector: 'document-page',
  templateUrl: './document.page.html',
  styleUrls: ['./document.page.css']
})

export class DocumentPage {
  index = 0;
  apiList = [
    {
      title: '表格',
      checkStatus: true
    },
    {
      title: '图表',
      checkStatus: true,
    },
    {
      title: '表单',
      checkStatus: true,
    },
    {
      title: '标签页',
      checkStatus: true,
    },
    {
      title: '富文本',
      checkStatus: true,
    },
    {
      title: '上传文件',
      checkStatus: true,
    },
    {
      title: '图片裁剪',
      checkStatus: true,
    },
    {
      title: '导航栏',
      checkStatus: true,
    },
    {
      title: '面包屑导航',
      checkStatus: true,
    },
    {
      title: '联想输入',
      checkStatus: true,
    },
    {
      title: '单/复选框',
      checkStatus: true,
    },
    {
      title: 'tooltip',
      checkStatus: true,
    },
    {
      title: 'animation',
      checkStatus: true,
    },
    {
      title: 'validate',
      checkStatus: true,
    },
    {
      title: '按钮',
      checkStatus: true,
    },
    {
      title: '搜索框',
      checkStatus: true,
    },
    {
      title: '标签输入框',
      checkStatus: true,
    },
    {
      title: '拖拽排序',
      checkStatus: true,
    },
    {
      title: '下拉框',
      checkStatus: true,
    },
    {
      title: '模态框',
      checkStatus: true,
    },
    {
      title: 'filter',
      checkStatus: true,
    },
    {
      title: 'http',
      checkStatus: true,
    },

    {
      title: 'loading',
      checkStatus: false,
    },
    {
      title: 'message',
      checkStatus: false,
    },
    {
      title: '单元测试',
      checkStatus: false,
    },
    {
      title: 'webpack打包压缩',
      checkStatus: false,
    }
  ];

  changeStatus(value, index) {
    // todo 这样还是不太方便，想办法能不能换成双向数据绑定，或者就直接能获取到值
    console.log('点击改变值，当前为', value, index);
    this.apiList[index].checkStatus = value;
  }

  select(index) {
    this.index = index;
  }

  selectRadio(data) {
    console.log('选中的值', data);
  }
}
