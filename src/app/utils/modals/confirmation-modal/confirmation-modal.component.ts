import { Component, ViewChild, AfterViewInit, TemplateRef, ChangeDetectorRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { BsModalService, BsModalRef, ModalDirective } from 'ngx-bootstrap/modal';
import { ModalsUtils } from '../ModalsUtils';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'uts-confirmation-modal',
    templateUrl: './confirmation-modal.component.html',
    styles: []
})
export class ConfirmationModalComponent implements AfterViewInit, OnDestroy {

    @ViewChild(ModalDirective, { static: false }) public modalDirective: ModalDirective;
    @Output() confirmation: EventEmitter<boolean> = new EventEmitter<boolean>();
    private onHideSubscription: Subscription;

    constructor() {
        ModalsUtils.confirmationModalComponent = this;
    }

    ngAfterViewInit(): void {
        this.onHideSubscription = this.modalDirective.onHide.subscribe(() => this.confirmation.emit(false));
    }

    ngOnDestroy() {
        this.onHideSubscription.unsubscribe();
    }

    public openModal(): Observable<boolean> {
        this.modalDirective.show()
        this.confirmation = new EventEmitter<boolean>(); //Não sei se isso é necessário, mas é pra toda vez "resetar" a instancia do EventEmitter.
        return this.confirmation;
    }
}
