import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from './pipes/pipes.module';
import { InputsContainersModule } from './inputs-containers/inputs-containers.module';



@NgModule({
    declarations: [],
    imports: [
        SharedModule,
        PipesModule,
        InputsContainersModule
    ],
    exports: [
        PipesModule,
        InputsContainersModule,
        InputsContainersModule
    ]
})
export class UtilsModule { }
