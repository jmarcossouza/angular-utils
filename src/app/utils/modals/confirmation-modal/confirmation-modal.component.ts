import { Component, ViewChild, AfterViewInit, TemplateRef, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { ModalsUtils } from '../ModalsUtils';
import { Observable } from 'rxjs';

@Component({
    selector: 'uts-confirmation-modal',
    templateUrl: './confirmation-modal.component.html',
    styles: []
})
export class ConfirmationModalComponent implements AfterViewInit {

    @ViewChild(ModalDirective, { static: false }) private modalDirective: ModalDirective;
    @Output() confirmation: EventEmitter<boolean> = new EventEmitter<boolean>();
    private modalRef: BsModalRef;

    constructor(private bsModalService: BsModalService, private changeDetection: ChangeDetectorRef) {
        ModalsUtils.confirmationModalComponent = this;
    }

    ngAfterViewInit(): void {
        console.log(this.modalDirective);
    }

    private _confirm(): void {
        this.modalDirective.hide();
        this.confirmation.emit(true);
    }

    public confirm(): void {
        this._confirm();
    }

    private _decline(): void {
        this.modalDirective.hide();
        this.confirmation.emit(false);
    }

    public decline(): void {
        this._decline();
    }

    public openModal(): Observable<boolean> {
        this.modalDirective.show()
        this.confirmation = new EventEmitter<boolean>(); //Não sei se isso é necessário, mas é pra toda vez "resetar" a instancia do EventEmitter.
        return this.confirmation;
    }



}
