import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import {
  ModalDirective,
  BsModalService,
  BsModalRef
} from "ngx-bootstrap/modal";

@Component({
  selector: "app-manage-database",
  templateUrl: "./manage-database.component.html",
  styleUrls: ["./manage-database.component.scss"]
})
export class ManageDatabaseComponent implements OnInit {
  modalRef: BsModalRef;
  
  constructor(private modalService: BsModalService) {}
  dtOptions: DataTables.Settings = {};
  data = [
    { code: "01", name: "เครื่องบินรบ" },
    { code: "02", name: "รถถัง" },
    { code: "03", name: "เรือดำน้ำ" },
    { code: "04", name: "จรวด" },
    { code: "05", name: "เรือเหาะ" }
  ];
  openModal(createmodal: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      createmodal,
      Object.assign({}, { class: "gray modal-md modal-dialog-centered" })
    );
  }
  ngOnInit(): void {
    this.dtOptions = {
      // pagingType: 'full_numbers'
    };
  }
}
