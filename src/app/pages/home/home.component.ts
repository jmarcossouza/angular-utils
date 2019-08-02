import { Component, OnInit } from '@angular/core';
import { ModalsUtils } from 'src/app/utils/modals/ModalsUtils';

@Component({
    selector: 'uts-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent implements OnInit {

    constructor() { }

    modalResposta: boolean;

    ngOnInit() {
    }

    modalConfirmation() {
        ModalsUtils.confirmationModalComponent.openModal("Deseja confirmar esta ação?").subscribe(resposta => this.modalResposta = resposta);
    }

    modalMessage() {
        ModalsUtils.messageModalComponent.openModal("Mensagem de aviso.\n\n Mais detalhes da mensagem.");
    }

}
