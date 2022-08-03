import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private modal: NgbModal
  ) { }

  ngOnInit() {
  }

  public openModal(templateModal: any): void {
    this.modal.open(templateModal).result.then(() => {
      console.log('resolve');
    }, () => {
      console.log('reject');
    });
  }
}
