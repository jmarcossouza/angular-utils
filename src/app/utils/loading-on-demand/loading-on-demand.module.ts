import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingOnDemandComponent } from './loading-on-demand.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClient } from '@angular/common/http';



@NgModule({
    declarations: [LoadingOnDemandComponent],
    imports: [
        CommonModule,
    ],
    exports: [LoadingOnDemandComponent]
})
export class LoadingOnDemandModule { }
