import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from './pipes/pipes.module';



@NgModule({
    declarations: [],
    imports: [
        SharedModule,
        PipesModule
    ],
    exports: [
        PipesModule
    ]
})
export class UtilsModule { }
