import {TableComponent} from "../../pages/table/table.page";
import {SmartTablePage} from "../../pages/table/smart-table/smart-table.page";
import {ChartComponent} from "../../pages/chart/chart.page";
import {TableDetailPage} from "../../pages/table/detail/detail.page";
import {TabPage} from "../../pages/tab/tab.page";
import {AnimationPage} from "../../pages/animation/animation.page";

const menuList:any = [
  {
    title: '表格', path: 'table',
    children: [
      {
        title: '基本表格', path: 'basic_table', component: TableComponent,
        children: [
          {
            path: 'table_detail', title: '表格详情', component: TableDetailPage
          }
        ]
      },
      {
        title: '智能表格', path: 'smart_table', component: SmartTablePage,
        children: [
          {
            path: 'table_detail', title: '表格详情', component: TableDetailPage
          }
        ]
      }
    ]
  },
  {
    path: 'chart', title: '图表', component: ChartComponent
  },
  {
    path: 'tab', title: '标签页', component: TabPage
  },
  {
    path: 'animation', title: '动画', component: AnimationPage
  }
];

export default {menuList}
