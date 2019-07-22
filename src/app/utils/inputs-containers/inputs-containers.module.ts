import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextContainerComponent } from './input-text-container/input-text-container.component';
import { InputFeedbackComponent } from './helpers/input-feedback/input-feedback.component';
import { RequiredIndicatorComponent } from './helpers/required-indicator/required-indicator.component';
import { RadioContainerComponent } from './radio-container/radio-container.component';
import { CheckboxContainerComponent } from './checkbox-container/checkbox-container.component';
import { InputTextContainer2Component } from './input-text-container2/input-text-container2.component';



@NgModule({
    declarations: [InputTextContainerComponent, InputFeedbackComponent, RequiredIndicatorComponent, RadioContainerComponent, CheckboxContainerComponent, InputTextContainer2Component],
    imports: [
        CommonModule
    ],
    exports: [InputTextContainerComponent, RadioContainerComponent, CheckboxContainerComponent, InputTextContainer2Component]
})
export class InputsContainersModule { }
