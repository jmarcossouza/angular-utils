import { Component,  Renderer2, Input } from '@angular/core';
import { InputContainerBase } from '../InputContainerBase';

@Component({
  selector: 'uts-input-text-container',
  templateUrl: './input-text-container.component.html',
  styles: []
})
export class InputTextContainerComponent extends InputContainerBase {

    constructor(renderer: Renderer2) {
        super(renderer);
    }

    /**
     * @description Pra injetar alguma classe na ``<div>`` pai dos inputs.
     * @description Criei isso pra poder usar os inputs com append e prepend.
     * @example
     * inputParentClass="input-group"
     */
    @Input() inputParentClass: string;

}
