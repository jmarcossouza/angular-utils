import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'uts-itens',
    templateUrl: './itens.component.html',
    styles: []
})
export class ItensComponent implements OnInit {

    constructor() { }

    public urlItens: string = "http://localhost/url?page={{{page}}}&per_page={{{itensPerPage}}}";
    public itens: any[] = [];

    ngOnInit() {
    }

}
