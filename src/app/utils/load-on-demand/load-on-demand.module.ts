import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicScrollToLoadComponent } from './basic-scroll-to-load/basic-scroll-to-load.component';



@NgModule({
    declarations: [BasicScrollToLoadComponent],
    imports: [
        CommonModule
    ],
    exports: [BasicScrollToLoadComponent]
})
export class LoadOnDemandModule { }
