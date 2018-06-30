import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// pages
import {TableComponent} from './pages/table/table.page';
import {TableDetailPage} from "./pages/table/detail/detail.page";
import {ChartComponent} from "./pages/chart/chart.page";
import {TabPage} from "./pages/tab/tab.page";
import {AnimationPage} from "./pages/animation/animation.page";
import {DocumentPage} from "./pages/document/document.page";
import {UploadPage} from "./pages/upload/upload.page";
const routes: Routes = [
  {
    path: 'table',
    children: [
      {
        path: 'basic_table',  component: TableComponent
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
    path: 'upload', component: UploadPage
  },
  {
    path: 'document', component: DocumentPage
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
