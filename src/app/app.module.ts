import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

// layout
import { TopNavbarComponent } from './common/layout/topNavbar/topNavbar.component';
// pages
import { TableComponent } from './pages/table/table.component';
import { SmartTableComponent } from './pages/table/smart-table/smart-table.component';

// components
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {TableDetailComponent} from "./pages/table/detail/detail.component";
import {BreadcrumbComponent} from "./common/layout/breadcrumb/breadcrumb.component";

// directives
import {Tooltip} from "./common/directives/tooltip.directive";
import {Animation} from "./common/directives/animation.directive";
import {globalService} from "./common/service/global.service";
import {msgService} from "./common/service/msg.service";
import {PaginationComponent} from "./common/components/pagination/pagination.component";

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
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SmartTableModule
  ],
  providers: [globalService, msgService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
