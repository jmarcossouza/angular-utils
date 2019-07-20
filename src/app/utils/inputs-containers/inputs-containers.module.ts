import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextContainerComponent } from './input-text-container/input-text-container.component';
import { InputFeedbackComponent } from './helpers/input-feedback/input-feedback.component';
import { RequiredIndicatorComponent } from './helpers/required-indicator/required-indicator.component';
import { RadioContainerComponent } from './radio-container/radio-container.component';
import { CheckboxContainerComponent } from './checkbox-container/checkbox-container.component';



@NgModule({
    declarations: [InputTextContainerComponent, InputFeedbackComponent, RequiredIndicatorComponent, RadioContainerComponent, CheckboxContainerComponent],
    imports: [
        CommonModule
    ],
    exports: [InputTextContainerComponent, RadioContainerComponent, CheckboxContainerComponent]
})
export class InputsContainersModule { }
