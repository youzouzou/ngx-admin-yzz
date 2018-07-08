import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
// dependences
import {ChartModule} from 'angular2-chartjs';
import {FileUploadModule} from 'ng2-file-upload';
import { FormsModule }   from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { HttpClientModule } from '@angular/common/http';
import { JoditAngularModule } from 'jodit-angular';
// layout
import {TopNavbarComponent} from './common/layout/topNavbar/topNavbar.component';
import {SideNavbarComponent} from "./common/layout/sideNavBar/sideNavBar.component";
// pages
import {TablePage} from './pages/table/table.page';
import {ChartComponent} from "./pages/chart/chart.page";
import {TableDetailPage} from "./pages/table/detail/detail.page";
import {TabPage} from "./pages/tab/tab.page";
import {AnimationPage} from "./pages/animation/animation.page";
import {DocumentPage} from "./pages/document/document.page";
import {FormPage} from "./pages/form/form.page";

// components
import {BreadcrumbComponent} from "./common/layout/breadcrumb/breadcrumb.component";
import {ModalComponent} from "./common/components/modal/modal.component";
import {TabComponent} from "./common/components/tab/tab.component";
import {CheckboxComponent} from "./common/components/checkbox/checkbox.component";
import {PaginationComponent} from "./common/components/pagination/pagination.component";
import {RadioComponent} from "./common/components/radio/radio.component";
import {SelectInputComponent} from "./common/components/selectInput/selectInput.component";
import {multiSelectComponent} from "./common/components/multiSelect/multiSelect.component";
import {SearchComponent} from "./common/components/search/search.component";
import {TagComponent} from "./common/components/tag/tag.component";
// directives
import {Tooltip} from "./common/directives/tooltip.directive";
import {Animation} from "./common/directives/animation.directive";
import {Validate} from "./common/directives/validate.directive";
// service
import {globalService} from "./common/service/global.service";
import {msgService} from "./common/service/msg.service";
import {DragulaModule} from "ng2-dragula";
import {apiService} from "./common/service/api.service";
// pipe
import {NumberPipe} from "./common/pipe/pipe";

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    SideNavbarComponent,
    BreadcrumbComponent,
    SearchComponent,
    TagComponent,
    Tooltip,
    Validate,
    Animation,
    PaginationComponent,
    multiSelectComponent,
    ModalComponent,
    ChartComponent,
    TabComponent,
    CheckboxComponent,
    RadioComponent,
    SelectInputComponent,
    TablePage,
    TableDetailPage,
    TabPage,
    AnimationPage,
    DocumentPage,
    FormPage,
    NumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule,
    FileUploadModule,
    FormsModule,
    ImageCropperModule,
    JoditAngularModule,
    DragulaModule
  ],
  providers: [globalService, msgService, apiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
