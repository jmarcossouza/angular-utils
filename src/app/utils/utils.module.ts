import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from './pipes/pipes.module';
import { InputsContainersModule } from './inputs-containers/inputs-containers.module';
import { ModalsModule } from './modals/modals.module';
import { LoadOnDemandModule } from './load-on-demand/load-on-demand.module';



@NgModule({
    declarations: [],
    imports: [
        SharedModule,
        PipesModule,
        InputsContainersModule,
    ],
    exports: [
        PipesModule,
        InputsContainersModule,
        InputsContainersModule,
        ModalsModule,
        LoadOnDemandModule
    ]
})
export class UtilsModule { }
