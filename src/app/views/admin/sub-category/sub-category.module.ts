import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../../share/share.module';
import { Routes, RouterModule } from '@angular/router';
import { SubCategoryComponent } from './sub-category.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TabsModule } from "ngx-bootstrap/tabs";

const routes: Routes = [
  {
    path: "",
    component: SubCategoryComponent,
    data: {
      title: "จัดการคลาสย่อย"
    }
  }
];

@NgModule({
  declarations: [SubCategoryComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes),
    ShareModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot()
  ],
  exports: [RouterModule]
})
export class SubCategoryModule { }
