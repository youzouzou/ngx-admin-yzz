import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// pages
import {TablePage} from './pages/table/table.page';
import {TableDetailPage} from "./pages/table/detail/detail.page";
import {ChartComponent} from "./pages/chart/chart.page";
import {TabPage} from "./pages/tab/tab.page";
import {AnimationPage} from "./pages/animation/animation.page";
import {DocumentPage} from "./pages/document/document.page";
import {FormPage} from "./pages/form/form.page";
import {LoginPage} from "./pages/login/login.page";
const routes: Routes = [
  {
    path: 'table',
    children: [
      {
        path: 'basic_table', component: TablePage
      },
      {
        path: 'table_detail', component: TableDetailPage
      }
    ]
  },
  {
    path: 'chart', component: ChartComponent
  },
  {
    path: 'tab', component: TabPage
  },
  {
    path: 'animation', component: AnimationPage
  },
  {
    path: 'document', component: DocumentPage
  },
  {
    path: 'form', component: FormPage
  },
  {
    path: 'login', component: LoginPage
  },
  {path: '', redirectTo: 'document', pathMatch: 'full'},
  {path: '**', redirectTo: 'document', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
