import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
// dependences
import {ChartModule} from 'angular2-chartjs';
import {Ng2SmartTableModule} from 'ng2-smart-table';

// layout
import {TopNavbarComponent} from './common/layout/topNavbar/topNavbar.component';
// pages
import {TableComponent} from './pages/table/table.page';
import {SmartTablePage} from './pages/table/smart-table/smart-table.page';
import {ChartComponent} from "./pages/chart/chart.page";
import {TableDetailPage} from "./pages/table/detail/detail.page";
import {TabPage} from "./pages/tab/tab.page";
import {AnimationPage} from "./pages/animation/animation.page";
import {DocumentPage} from "./pages/document/document.page";
// components
import {BreadcrumbComponent} from "./common/layout/breadcrumb/breadcrumb.component";
import {ModalComponent} from "./common/components/modal/modal.component";
import {TabComponent} from "./common/components/tab/tab.component";
import {CheckboxComponent} from "./common/components/checkbox/checkbox.component";
import {PaginationComponent} from "./common/components/pagination/pagination.component";
// directives
import {Tooltip} from "./common/directives/tooltip.directive";
import {Animation} from "./common/directives/animation.directive";
// service
import {globalService} from "./common/service/global.service";
import {msgService} from "./common/service/msg.service";
import {modalService} from "./common/service/modal.service";
import {RadioComponent} from "./common/components/radio/radio.component";


@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    BreadcrumbComponent,
    Tooltip,
    Animation,
    PaginationComponent,
    ModalComponent,
    ChartComponent,
    TabComponent,
    CheckboxComponent,
    RadioComponent,
    TableComponent,
    SmartTablePage,
    TableDetailPage,
    TabPage,
    AnimationPage,
    DocumentPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SmartTableModule,
    ChartModule
  ],
  providers: [globalService, msgService, modalService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
