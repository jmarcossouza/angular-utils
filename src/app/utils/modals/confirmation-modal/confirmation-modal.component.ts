import { Component, ViewChild, AfterViewInit, TemplateRef, ChangeDetectorRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { ModalsUtils } from '../ModalsUtils';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'uts-confirmation-modal',
    templateUrl: './confirmation-modal.component.html',
    styles: []
})
export class ConfirmationModalComponent implements OnDestroy {

    @ViewChild(ModalDirective, { static: false }) public modalDirective: ModalDirective;
    @Output() modalEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
    private onHideSubscription: Subscription;

    public modalMessage: string;
    public modalBtnConfirmMessage: string;
    public modalBtnConfirmColor: string;

    constructor() {
        ModalsUtils.confirmationModalComponent = this;
    }

    ngOnDestroy() {
        this.onHideSubscription.unsubscribe();
    }

    /**
     * @description Retorna a respectiva classe CSS com base na string `modalBtnConfirmColor`
     */
    public get classBtnConfirmColor(): string {
        switch (this.modalBtnConfirmColor) {
            case "primary":
                return "btn-outline-primary";
            case "warning":
                return "btn-outline-warning";
            case "danger":
                return "btn-outline-danger";
            case "info":
                return "btn-outline-info";
            case "success":
                return "btn-outline-success";
            default:
                return "btn-outline-primary";
        }
    }

    /**
     * @description Dá subscribe no evento de onHide do ModalDirective e, logo em seguida, chama o método `onHideUnsubscribe()`. (Isso é importante pra não "acumular" os eventos.)
     */
    private onHideSubscribe(): void {
        this.onHideSubscription = this.modalDirective.onHide.subscribe(() => {
            this.modalEmitter.emit(false);
            this.onHideUnsubscribe();
        });
    }

    /**
     * @description Dá unsubscribe no evento de onHide do modalDirective.
     */
    private onHideUnsubscribe(): void {
        this.onHideSubscription.unsubscribe();
    }

    /**
     * @description Método que confirma a resposta do usuário.
     * @description Da um unsubscribe no onHide event, porque o modal será fechado após a confirmação e não posso emitir outro evento de false.
     */
    public confirm(): void {
        this.onHideUnsubscribe();
        this.modalEmitter.emit(true);
        this.modalDirective.hide();
    }

    /**
     * @description Método que abre o modal de confirmação e fica esperando uma ação do usuário.
     * @param modalMessage Mensagem que deverá aparecer no modal. Default: `"Confirmar essa ação?"`
     * @param modalBtnConfirmMessage Mensagem do botão de confirmar. Default: `"Confirmar"`
     * @param modalBtnConfirmColor Cor do botão de confirmar. Default: `"primary"`
     * @returns `Observable<boolean>` dependendo da interação do usuário com o modal. True é retornado somente se ele clicar no botão de confirmarm, qualquer outra ação retornará false.
     */
    public openModal(
        modalMessage: string = "Confirmar essa ação?",
        modalBtnConfirmMessage: string = "Confirmar",
        modalBtnConfirmColor: "primary" | "warning" | "danger" | "info" | "success" = "primary"
    ): Observable<boolean> {
        //Atribuindo as mensagens e coisas do modal.
        this.modalMessage = modalMessage;
        this.modalBtnConfirmMessage = modalBtnConfirmMessage;
        this.modalBtnConfirmColor = modalBtnConfirmColor;

        this.modalEmitter = new EventEmitter<boolean>(); //Resetar o EventEmitter, pra não duplicar os eventos.
        this.onHideSubscribe(); //Dar subscribe() no evento onHide do modal pra ficar sabendo se o usuário fechou o modal e lidar com isso.
        this.modalDirective.show();
        return this.modalEmitter;
    }
}