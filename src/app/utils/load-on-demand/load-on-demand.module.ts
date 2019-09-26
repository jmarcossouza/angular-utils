import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicScrollToLoadComponent } from './basic-scroll-to-load/basic-scroll-to-load.component';
import { ScrollToLoadComponent } from './scroll-to-load/scroll-to-load.component';



@NgModule({
    declarations: [BasicScrollToLoadComponent, ScrollToLoadComponent],
    imports: [
        CommonModule
    ],
    exports: [BasicScrollToLoadComponent, ScrollToLoadComponent]
})
export class LoadOnDemandModule { }
