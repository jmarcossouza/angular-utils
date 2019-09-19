import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingOnDemandComponent } from './loading-on-demand.component';



@NgModule({
    declarations: [LoadingOnDemandComponent],
    imports: [
        CommonModule
    ],
    exports: [LoadingOnDemandComponent]
})
export class LoadingOnDemandModule { }
