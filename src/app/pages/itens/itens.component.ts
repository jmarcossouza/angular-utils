import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/utils/loading-on-demand/loading-on-demand.model';

@Component({
    selector: 'uts-itens',
    templateUrl: './itens.component.html',
    styles: []
})
export class ItensComponent implements OnInit {

    constructor() { }

    public urlItens: string = "http://api.bomamigo.com:8080/pets_encontrados?page={{{page}}}&per_page={{{itensPerPage}}}";
    public itens: any[] = [];

    public handleItens(result: Pagination<any>) {
        this.itens.concat(result);
        console.log(result, this.itens)
    }

    ngOnInit() {
    }

}
