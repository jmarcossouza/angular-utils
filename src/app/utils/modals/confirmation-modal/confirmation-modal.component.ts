import { Component, OnInit, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'uts-confirmation-modal',
    templateUrl: './confirmation-modal.component.html',
    styles: []
})
export class ConfirmationModalComponent implements AfterViewInit {

    @ViewChild('modalTemplate', { static: false }) modalTemplate : TemplateRef<any>;
    modalRef: BsModalRef;

    constructor(private bsModalService: BsModalService) { }

    ngAfterViewInit(): void {
        console.log(this.modalTemplate);
        this.modalRef = this.bsModalService.show(this.modalTemplate);
        // this.modalRef.
    }

    

}
