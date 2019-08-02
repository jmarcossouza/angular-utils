import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { MessageModalComponent } from './message-modal/message-modal.component';


@NgModule({
    declarations: [ConfirmationModalComponent, MessageModalComponent],
    imports: [
        CommonModule,
        ModalModule
    ],
    exports: [ConfirmationModalComponent, MessageModalComponent],
    providers: []
})
export class ModalsModule {}
