import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/header/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { UtilsModule } from './utils/utils.module';
import { SharedModule } from './shared/shared.module';
import { FormulariosComponent } from './pages/formularios/formularios.component';

import { ModalsModule } from './utils/modals/modals.module';
import { ModalModule } from 'ngx-bootstrap/modal';
@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        HomeComponent,
        FormulariosComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        UtilsModule,
        ModalModule.forRoot(),
        ModalsModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
