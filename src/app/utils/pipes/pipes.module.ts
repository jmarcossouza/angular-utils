import { NgModule } from '@angular/core';
import { TelefoneCelularPipe } from './telefone-celular.pipe';



@NgModule({
    declarations: [
        TelefoneCelularPipe
    ],
    exports: [
        TelefoneCelularPipe
    ]
})
export class PipesModule { }
