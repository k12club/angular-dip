import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
  ]
})
export class ShareModule {}
