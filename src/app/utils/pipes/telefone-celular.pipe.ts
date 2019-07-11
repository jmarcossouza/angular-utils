import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'telefoneCelular'
})
export class TelefoneCelularPipe implements PipeTransform {

    /**
     * @example
     * ``` html
     * <p>{{ 1836222222 | telefoneCelular }}</p>
     * ````
     */
    transform(value: string | number): string {
        if (typeof value == "number")
            value = value.toString();

        return this.converterTelefone(value);
    }

    /**
     * @description Verifica se valor é um celular (length: 11) ou telefone (length:10), e faz as separações colocando os () e -.
     * @param value Valor a ser convertivo
     */
    private converterTelefone(value: string): string {
        //Tirar as coisas desnecessárias.
        value = value.replace(/\D/g, '');

        //Formato pra celular
        if (value.length === 11) {
            //Se quiser alterar o formato do celular, é so mexer aqui.
            value = value.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else { //Formato pra telefone
            //Mexer no formato pro telefone é só mexer aqui.
            value = value.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        }
        return value;
    }

}
