import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './/app-routing.module';
// dependences
import {ChartModule} from 'angular2-chartjs';
import {FileUploadModule} from 'ng2-file-upload';
import {FormsModule} from '@angular/forms';
import {ImageCropperModule} from 'ngx-image-cropper';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {JoditAngularModule} from 'jodit-angular';
import {NgDatepickerModule} from 'ng2-datepicker';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
// layout
import {TopNavbarComponent} from './common/layout/topNavbar/topNavbar.component';
import {SideNavbarComponent} from './common/layout/sideNavBar/sideNavBar.component';
// pages
import {TablePage} from './pages/table/table.page';
import {ChartComponent} from './pages/chart/chart.page';
import {TableDetailPage} from './pages/table/detail/detail.page';
import {TabPage} from './pages/tab/tab.page';
import {AnimationPage} from './pages/animation/animation.page';
import {DocumentPage} from './pages/document/document.page';
import {FormPage} from './pages/form/form.page';
import {LoginPage} from './pages/login/login.page';
// components
import {IconComponent} from './common/components/icon/icon.component';
import {BreadcrumbComponent} from './common/layout/breadcrumb/breadcrumb.component';
import {ModalComponent} from './common/components/modal/modal.component';
import {TabComponent} from './common/components/tab/tab.component';
import {CheckboxComponent} from './common/components/checkbox/checkbox.component';
import {PaginationComponent} from './common/components/pagination/pagination.component';
import {RadioComponent} from './common/components/radio/radio.component';
import {SelectInputComponent} from './common/components/selectInput/selectInput.component';
import {multiSelectComponent} from './common/components/multiSelect/multiSelect.component';
import {SearchComponent} from './common/components/search/search.component';
import {TagComponent} from './common/components/tag/tag.component';
import {LoaderComponent} from './common/components/loader/loader.component';
import {DatePickerComponent} from './common/components/datePicker/datePicker.component';
import {SwitcherComponent} from './common/components/switcher/switcher.component';
// directives
import {Tooltip} from './common/directives/tooltip.directive';
import {Animation} from './common/directives/animation.directive';
import {Validate} from './common/directives/validate.directive';
// service
import {selfHttp} from './common/service/selfhttp.service';
import {globalService} from './common/service/global.service';
import {msgService} from './common/service/msg.service';
import {DragulaModule} from 'ng2-dragula';
import {apiService} from './common/service/api.service';
import {alertService} from './common/service/alert.service';
// pipe
import {NumberPipe} from './common/pipe/numberPipe';
import {LengthPipe} from './common/pipe/lengthPipe';
// injector
import {httpInterceptorProviders} from './common/interceptor/index';
import {NgxCoolDialogsModule} from 'ngx-cool-dialogs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    SideNavbarComponent,
    BreadcrumbComponent,
    SearchComponent,
    TagComponent,
    LoaderComponent,
    IconComponent,
    Tooltip,
    Validate,
    Animation,
    PaginationComponent,
    multiSelectComponent,
    ModalComponent,
    ChartComponent,
    TabComponent,
    DatePickerComponent,
    CheckboxComponent,
    RadioComponent,
    SwitcherComponent,
    SelectInputComponent,
    TablePage,
    TableDetailPage,
    TabPage,
    AnimationPage,
    DocumentPage,
    FormPage,
    LoginPage,
    NumberPipe,
    LengthPipe
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
    DragulaModule,
    NgDatepickerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    NgxCoolDialogsModule.forRoot()
  ],
  providers: [selfHttp, alertService, globalService, msgService, apiService, httpInterceptorProviders, {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
