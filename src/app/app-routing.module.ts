import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import { TableComponent } from './pages/table/table.component';
import { SmartTableComponent } from "./pages/table/smart-table/smart-table.component";
import {TableDetailComponent} from "./pages/table/detail/detail.component";
import {ChartComponent} from "./pages/chart/chart.component";
const routes:Routes = [
  {
    path: 'table', title: '表格', children: [
    {
      path: 'basic_table', title: '基本表格', component: TableComponent
    },
    {
      path: 'table_detail', title: '表格详情', component: TableDetailComponent
    },
    {path: 'smart_table', title: '智能表格', component: SmartTableComponent}
  ]
  },
  {
    path: 'chart', title: '图表', component: ChartComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
export default {routes}
