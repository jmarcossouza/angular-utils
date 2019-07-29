import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';


@NgModule({
    declarations: [ConfirmationModalComponent],
    imports: [
        CommonModule,
        ModalModule
    ],
    exports: [ConfirmationModalComponent],
    providers: []
})
export class ModalsModule {}
