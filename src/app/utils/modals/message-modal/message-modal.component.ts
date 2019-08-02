import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ModalsUtils } from '../ModalsUtils';

@Component({
    selector: 'uts-message-modal',
    templateUrl: './message-modal.component.html',
    styles: [".modal-message: { white-space: pre-wrap; }"]
})
export class MessageModalComponent {

    @ViewChild(ModalDirective, { static: false }) public modalDirective: ModalDirective;
    public modalMessage: string;
    public modalBtnMessage: string;

    constructor() {
        ModalsUtils.messageModalComponent = this;
    }

    /**
     * Abrir o modal de mensagem.
     * @param message Mensagem a ser exibida no modal. Você pode adicioanr quebra de linha na string, basta usar `\n`
     * @param btnMessage Mensagem do botão de Ok. Default: Ok
     */
    public openModal(message: string, btnMessage: string = "Ok"): void {
        this.modalMessage = message;
        this.modalBtnMessage = btnMessage;

        this.modalDirective.show();
    }

}
