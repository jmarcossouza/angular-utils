import { Component,  Renderer2 } from '@angular/core';
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

}
