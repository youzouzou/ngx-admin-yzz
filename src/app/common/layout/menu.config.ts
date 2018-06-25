import {TableComponent} from "../../pages/table/table.component";
import {SmartTableComponent} from "../../pages/table/smart-table/smart-table.component";
import {ChartComponent} from "../../pages/chart/chart.component";

const menuList = [
  {
    title: '表格', path: 'table',
    children: [
      {
        title: '基本表格', path: 'basic_table'
      },
      {
        title: '智能表格', path: 'smart_table'
      }
    ]
  },
  {
    path: 'chart', title: '图表', component: ChartComponent
  }
];

export default {menuList}
