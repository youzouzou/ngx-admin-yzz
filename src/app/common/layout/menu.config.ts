import {TableComponent} from "../../pages/table/table.page";
import {SmartTableComponent} from "../../pages/table/smart-table/smart-table.page";
import {ChartComponent} from "../../pages/chart/chart.page";
import {TableDetailComponent} from "../../pages/table/detail/detail.page";
import {TabPage} from "../../pages/tab/tab.page";

const menuList:any = [
  {
    title: '表格', path: 'table',
    children: [
      {
        title: '基本表格', path: 'basic_table', component: TableComponent,
        children: [
          {
            path: 'table_detail', title: '表格详情', component: TableDetailComponent
          }
        ]
      },
      {
        title: '智能表格', path: 'smart_table', component: SmartTableComponent,
        children: [
          {
            path: 'table_detail', title: '表格详情', component: TableDetailComponent
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
  }
];

export default {menuList}
