import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import {
  LocationStrategy,
  HashLocationStrategy,
  CommonModule
} from "@angular/common";

import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { ModalModule } from "ngx-bootstrap/modal";
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from "./app.component";

// Import containers
import { DefaultLayoutComponent } from "./containers";

const APP_CONTAINERS = [DefaultLayoutComponent];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule
} from "@coreui/angular";

// Import routing module
import { AppRoutingModule } from "./app.routing";

// Import 3rd party components
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TabsModule } from "ngx-bootstrap/tabs";
import { ChartsModule } from "ng2-charts";
import { ManageDatabaseComponent } from "./views/admin/manage-database/manage-database.component";
import { DataTablesModule } from "angular-datatables";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MainComponent } from "./views/admin/main/main.component";
import { SubCategoryComponent } from "./views/admin/sub-category/sub-category.component";
import { DatatableService } from "./services/datatable.service";
import { DataTableModule } from "angular2-datatable";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./views/login/login.component";

/* Firebase services */
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";
import { AngularFirestoreModule } from "@angular/fire/firestore";

/* Auth service */
import { AuthenticationService } from "./shared/authentication.service";
import { AuthGuard } from "./shared/core/auth.guard";
import { AuthService } from './shared/core/auth.service';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    DataTablesModule,
    HttpClientModule,
    ModalModule.forRoot(),
    DataTableModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ManageDatabaseComponent,
    MainComponent,
    SubCategoryComponent,
    LoginComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    DatatableService,
    AuthenticationService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
