import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private modal: NgbModal,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  public openModal(templateModal: any): void {
    this.modal.open(templateModal).result.then((res) => {
      this.toastr.success(res);
    }, (rej) => {
      this.toastr.error(rej);
    });
  }
}
