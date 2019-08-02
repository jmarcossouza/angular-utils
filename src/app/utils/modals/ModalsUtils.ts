import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { MessageModalComponent } from './message-modal/message-modal.component';

export let ModalsUtils = {
    /**
     * @description Modal de confirmação. Abre um modal com a opção de confirmar ou cancelar, retorna um boolean conforme a ação do usuário. Use o método  `openModal()`
     */
    confirmationModalComponent: (undefined as ConfirmationModalComponent),
    /**
     * @description Modal simples de mensagerm de Ok. Use o método `openModal()`
     */
    messageModalComponent: (undefined as MessageModalComponent)
}