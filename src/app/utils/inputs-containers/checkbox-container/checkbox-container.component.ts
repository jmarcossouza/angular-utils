import { Component, Renderer2, Input } from '@angular/core';
import { InputContainerBase } from '../InputContainerBase';

@Component({
    selector: 'uts-checkbox-container',
    templateUrl: './checkbox-container.component.html',
    styles: []
})
export class CheckboxContainerComponent extends InputContainerBase {

    /**
     * @description Propriedade que decide se deve ou não mostrar um label com um &nbsp; (espaço vazio). 
     * Eu uso esse label, pro espaçamento não ficar zuado com inputs que usam o <label> em cima.
     * @default true
     */
    @Input() emptyLabel: boolean = true;

    constructor(renderer: Renderer2) {
        super(renderer)
    }

    public get inputChildren(): any[] {
        return super.findBetweenChildElements("input", this.inputParent.nativeElement.children);
    }
}
