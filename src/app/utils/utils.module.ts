import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from './pipes/pipes.module';
import { InputsContainersModule } from './inputs-containers/inputs-containers.module';
import { ModalsModule } from './modals/modals.module';
import { LoadingOnDemandModule } from './loading-on-demand/loading-on-demand.module';



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
        LoadingOnDemandModule
    ]
})
export class UtilsModule { }
