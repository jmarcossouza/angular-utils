import { Component, OnInit } from '@angular/core';
import { ModalsUtils } from 'src/app/utils/modals/ModalsUtils';

@Component({
    selector: 'uts-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    openModal() {
        ModalsUtils.messageModalComponent.openModal("Mensagem de teste.")
        // ModalsUtils.confirmationModalComponent.openModal().subscribe(result => {
        //     console.log("resultado: ", result);
        // });
    }

}
