import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ModalsUtils } from '../ModalsUtils';

@Component({
    selector: 'uts-message-modal',
    templateUrl: './message-modal.component.html',
    styles: []
})
export class MessageModalComponent {

    @ViewChild(ModalDirective, { static: false }) public modalDirective: ModalDirective;
    public modalMessage: string;
    public modalBtnMessage: string;

    constructor() {
        ModalsUtils.messageModalComponent = this;
    }

    public openModal(message: string, btnMessage: string = "Ok"): void {
        this.modalMessage = message;
        this.modalBtnMessage = btnMessage;

        this.modalDirective.show();
    }

}
