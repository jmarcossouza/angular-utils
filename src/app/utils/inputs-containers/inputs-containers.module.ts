import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextContainerComponent } from './input-text-container/input-text-container.component';
import { InputFeedbackComponent } from './helpers/input-feedback/input-feedback.component';
import { RequiredIndicatorComponent } from './helpers/required-indicator/required-indicator.component';



@NgModule({
    declarations: [InputTextContainerComponent, InputFeedbackComponent, RequiredIndicatorComponent],
    imports: [
        CommonModule
    ],
    exports: [InputTextContainerComponent]
})
export class InputsContainersModule { }
