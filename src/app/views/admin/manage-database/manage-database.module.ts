import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ManageDatabaseComponent } from "./manage-database.component";
import { Routes, RouterModule } from "@angular/router";
// import { DataTablesModule } from "angular-datatables";
import { ShareModule } from "../../../share/share.module";
import { ModalModule } from "ngx-bootstrap/modal";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TabsModule } from "ngx-bootstrap/tabs";

const routes: Routes = [
  {
    path: "",
    component: ManageDatabaseComponent,
    data: {
      title: "จัดการคลาสผลิตภัณฑ์"
    }
  }
];

@NgModule({
  declarations: [ManageDatabaseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot()
  ],
  exports: [RouterModule]
})
// @NgModule({
//   declarations: [ManageDatabaseComponent],
//   imports: [CommonModule]
// })
export class ManageDatabaseModule {}
