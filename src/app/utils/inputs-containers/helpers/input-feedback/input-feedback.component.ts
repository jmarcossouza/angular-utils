import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'uts-input-feedback',
    templateUrl: './input-feedback.component.html',
    styles: []
})
export class InputFeedbackComponent {

    @Input() fControl: FormControl;
    /**
     * @description Decide se deve ser mostrada alguma mensagem quando o campo for INVÁLIDO.
     * @default true
     */
    @Input() showWhenInvalid: boolean = true;
    /**
     * @description Decide se deve ser mostrada alguma mensagem quando o campo for VÁLIDO.
     * @default false
     */
    @Input() showWhenValid: boolean = false;

    @Input() validFeedbackMessage: string = "Ok.";

    /**
     * @description Método que apresenta as mensagens de erro. Ele é baseado nos booleanos showWhenValid e showWhenInvalid.
     * Ou seja, só irá retornar as mensagens de erro se eles estiverem true. Não vou entrar em muito detalhes, porque é um método fácil de entender e mudar suas propriedades.
     * @returns Mensagem de válida ou inválida de acordo com o erro do fControl.
     */
    public get errorFeedbackMessage(): string {
        if (this.fControl && (this.fControl.dirty || this.fControl.touched)) {
            if (this.fControl.invalid && this.fControl.errors && this.showWhenInvalid) {
                const error = this.fControl.errors;

                //Mensagens de campo inválido.
                if (error.required) {
                    return `Campo obrigatório.`;
                } else if (error.minlength) {
                    return `Mínimo ${error.minlength.requiredLength} caractéres.`;
                } else if (error.maxlength) {
                    return `Máximo ${error.maxlength.requiredLength} caractéres.`;
                } else if (error.min) {
                    return `Valor mínimo: ${error.min.min}`;
                } else if (error.max) {
                    return `Valor máximo: ${error.max.max}`;
                } else if (error.email) {
                    return `Não corresponde a um formato de e-mail válido.`;
                } else if (error.pattern) {
                    return `Formato inválido.`;
                } else if (error.message) { //Para erros de validators personalizados.
                    return `${error.message}`;
                }
            } else if (this.fControl.valid && this.showWhenValid) {
                //Mensagem de campo válido.
                return `${this.validFeedbackMessage}`;
            }
        }

        return null;
    }

}
