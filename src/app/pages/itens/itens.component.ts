import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'uts-itens',
    templateUrl: './itens.component.html',
    styles: []
})
export class ItensComponent implements OnInit {

    constructor() { }

    public urlItens: string = "http://api.bomamigo.com:8080/pets_encontrados?page={{{page}}}&per_page={{{itensPerPage}}}";
    public itens: any[] = [];

    ngOnInit() {
    }

}
