import { Component, OnInit, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalsUtils } from '../ModalsUtils';

@Component({
    selector: 'uts-confirmation-modal',
    templateUrl: './confirmation-modal.component.html',
    styles: []
})
export class ConfirmationModalComponent implements AfterViewInit {

    @ViewChild('modalTemplate', { static: false }) modalTemplate: TemplateRef<any>;
    modalRef: BsModalRef;

    constructor(private bsModalService: BsModalService) {
        ModalsUtils.confirmationModalComponent = this;
    }

    ngAfterViewInit(): void {
        console.log(this.modalTemplate);
        // this.modalRef = this.bsModalService.show(this.modalTemplate);
        // this.modalRef.
    }

    openModal(): void {
        this.modalRef = this.bsModalService.show(this.modalTemplate);
    }



}
