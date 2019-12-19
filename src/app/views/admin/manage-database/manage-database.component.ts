import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import {
  ModalDirective,
  BsModalService,
  BsModalRef
} from "ngx-bootstrap/modal";

import { Router } from "@angular/router";
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: "app-manage-database",
  templateUrl: "./manage-database.component.html",
  styleUrls: ["./manage-database.component.scss"]
})
export class ManageDatabaseComponent implements OnInit {
  modalRef: BsModalRef;
  checkoutForm: FormGroup;
  forbiddenUsernames = ['bamossza', 'admin', 'superadmin'];

  constructor(
    private modalService: BsModalService,
    private router: Router,
    private fb: FormBuilder
  ) {
   this.createForm()
  }
  dtOptions: DataTables.Settings = {};
  data = [
    { code: "01", name: "เครื่องบินรบ" },
    { code: "02", name: "รถถัง" },
    { code: "03", name: "เรือดำน้ำ" },
    { code: "04", name: "จรวด" },
    { code: "05", name: "เรือเหาะ" }
  ];
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
        return {'forbiddenNames': true};
    }
    return null;
}
  createForm() {
    this.checkoutForm = new FormGroup({
      'code': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'name': new FormControl(null, Validators.required)
  });
  }
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
  onSubmit(customerData:any) {
    // Process checkout data here
    console.log('Your order has been submitted', customerData);
    this.checkoutForm.reset();
    // this.modalRef.hide()
  }

  gotoClass(id: any) {
    // alert(id)
    this.router.navigate([`admin/managedatabase/class/${id}`]);
  }
}
