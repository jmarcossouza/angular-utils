import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextContainerComponent } from './input-text-container/input-text-container.component';



@NgModule({
    declarations: [InputTextContainerComponent],
    imports: [
        CommonModule
    ],
    exports: [InputTextContainerComponent]
})
export class InputsContainersModule { }
