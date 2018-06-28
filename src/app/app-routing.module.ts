import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// pages
import {TableComponent} from './pages/table/table.component';
import {SmartTableComponent} from "./pages/table/smart-table/smart-table.component";
import {TableDetailComponent} from "./pages/table/detail/detail.component";
import {ChartComponent} from "./pages/chart/chart.component";
const routes: Routes = [
  {
    path: 'table',
    children: [
      {
        path: 'basic_table',  component: TableComponent
      },
      {
        path: 'table_detail', component: TableDetailComponent
      },
      {path: 'smart_table', component: SmartTableComponent}
    ]
  },
  {
    path: 'chart', component: ChartComponent
  },
  { path: '', redirectTo: 'table/basic_table', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
