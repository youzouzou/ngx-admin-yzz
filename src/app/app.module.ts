import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
// dependences
import { ChartModule } from 'angular2-chartjs';
import { Ng2SmartTableModule } from 'ng2-smart-table';

// layout
import { TopNavbarComponent } from './common/layout/topNavbar/topNavbar.component';
// pages
import { TableComponent } from './pages/table/table.component';
import { SmartTableComponent } from './pages/table/smart-table/smart-table.component';
import {ChartComponent} from "./pages/chart/chart.component";
import {TableDetailComponent} from "./pages/table/detail/detail.component";

// components
import {BreadcrumbComponent} from "./common/layout/breadcrumb/breadcrumb.component";
import {ModalComponent} from "./common/components/modal/modal.component";
// directives
import {Tooltip} from "./common/directives/tooltip.directive";
import {Animation} from "./common/directives/animation.directive";
import {globalService} from "./common/service/global.service";
import {msgService} from "./common/service/msg.service";
import {PaginationComponent} from "./common/components/pagination/pagination.component";
import {modalService} from "./common/service/modal.service";

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    TableComponent,
    SmartTableComponent,
    TableDetailComponent,
    BreadcrumbComponent,
    Tooltip,
    Animation,
    PaginationComponent,
    ModalComponent,
    ChartComponent
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
