import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'uts-formularios',
    templateUrl: './formularios.component.html',
    styles: []
})
export class FormulariosComponent implements OnInit {

    constructor() { }

    public form1: FormGroup;
    public value: any;

    ngOnInit() {
        this.createForms();
    }

    private createForms(): void {
        this.form1 = new FormGroup({
            nome: new FormControl(null, [Validators.required, Validators.maxLength(60)]),
            email: new FormControl(null, [Validators.maxLength(100), Validators.email]),
            sexo: new FormControl(null, [Validators.required])
        });
    }

}
