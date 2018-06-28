import {TableComponent} from "../../pages/table/table.component";
import {SmartTableComponent} from "../../pages/table/smart-table/smart-table.component";
import {ChartComponent} from "../../pages/chart/chart.component";
import {TableDetailComponent} from "../../pages/table/detail/detail.component";

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
  }
];

export default {menuList}
