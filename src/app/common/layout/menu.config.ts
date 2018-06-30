const menuList:any = [
  {
    title: '表格', path: 'table',
    children: [
      {
        title: '基本表格', path: 'basic_table',
        children: [
          {
            path: 'table_detail', title: '表格详情'
          }
        ]
      },
      {
        title: '智能表格', path: 'smart_table',
        children: [
          {
            path: 'table_detail', title: '表格详情'
          }
        ]
      }
    ]
  },
  {
    path: 'chart', title: '图表'
  },
  {
    path: 'tab', title: '标签页'
  },
  {
    path: 'animation', title: '动画'
  },
  {
    path: 'document', title: '文档'
  }
];

export default {menuList}
