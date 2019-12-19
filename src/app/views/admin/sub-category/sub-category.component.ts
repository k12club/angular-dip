import { Component, OnInit, TemplateRef } from "@angular/core";
import {
  ModalDirective,
  BsModalService,
  BsModalRef
} from "ngx-bootstrap/modal";
@Component({
  selector: "app-sub-category",
  templateUrl: "./sub-category.component.html",
  styleUrls: ["./sub-category.component.scss"]
})
export class SubCategoryComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {}
  dtOptions: DataTables.Settings = {};
  data = [
    { code: "01", name: "RX-78-2" },
    { code: "02", name: "RX-178" },
    { code: "03", name: "MSZ-006" },
    { code: "04", name: "MSZ-010" },
    { code: "05", name: "RX-93" }
  ];
  openModal(createmodal: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      createmodal,
      Object.assign({}, { class: "gray modal-md modal-dialog-centered" })
    );
  }
  ngOnInit(): void {
    this.dtOptions = {
      // paging: false
      // pagingType: 'full_numbers'
    };
  }
}
