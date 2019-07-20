import { Input, ElementRef, ViewChild, Renderer2, OnDestroy, AfterViewInit } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

export class InputContainerBase implements OnDestroy, AfterViewInit {

    /**
     * @description String com classes a serem aplicadas à <div> principal (que contém a classe "form-group")
     * @default undefined
     */
    @Input() classes: string;
    /**
     * @description FormControl, obrigatório para várias funções do componente.
     */
    @Input() fControl: FormControl | AbstractControl;
    /**
     * @description Label que será exibida.
     * @default undefined
     */
    @Input() label: string;
    /**
     * @description (opcional) classe que será aplicada se os campos forem inválidos
     * @default "is-invalid"
     */
    @Input() invalidClass: string = "is-invalid";
    /**
     * @description (opcional) classe que será aplicada se os campos forem válidos
     * @default "is-valid"
     */
    @Input() validClass: string = "is-valid";
    /**
     * @description Boolean que decide se deve ou não ser aplicado a classe de inválido no input.
     * @default true
     */
    @Input() shouldApplyInvalidClass: boolean = true;
    /**
     * @description Boolean que decide se deve ou não ser aplicado a classe de válido no input.
     * @default false
     */
    @Input() shouldApplyValidClass: boolean = false;
    @ViewChild('inputParent', {static: false}) inputParent: ElementRef;

    protected renderer: Renderer2
    /**
     * @description Variável em que fica salvo o subscribe do método subscriptionsInput()
     * @description É feito um unsubscribe nela no ngOnDestroy() do Angular.
     */
    private ngClassInvalidInput: Subscription;

    constructor(renderer: Renderer2) {
        this.renderer = renderer;
    }

    // ngOnInit() {
    //     if (this.shouldApplyInvalidClass || this.shouldApplyValidClass) {
    //         this.subscriptionsInput();
    //     }
    // }

    ngAfterViewInit(): void {
        if (this.shouldApplyInvalidClass || this.shouldApplyValidClass) {
            this.subscriptionsInput();
        }
    }

    ngOnDestroy() {
        this.ngClassInvalidInput.unsubscribe();
    }

    /**
     * É um método get que pega os filhos (inputs) da div.
     * É importante que seja um get para que sempre esteja atualiazdo.
     */
    protected get inputChildren(): ElementRef[] {
        return this.inputParent.nativeElement.children;
    }

    /**
     * @description Faz um subscribe no statusChanges do FormCotrol. Na callback chama o método applyInputClass(). Salva esse subscribe na variável ngClassInvalidInput.
     * @description Faz um Listtener pro evento "blur" no <input> da DOM. Na callback chama o método applyInputClass().
     * @description Você pode reescrever esse método se quiser. Mas olhe como deve ser chamado o método applyInputClass()
     */
    protected subscriptionsInput(): void {
        //Pra cada elemento filho... (Nem adianta tentar substituir isso por forEach que não da.)
        for (let index = 0; index < this.inputChildren.length; index++) {
            //Adicionar um listener ao evento de blur no formControl. Assim eu posso atualizar a classe sempre que o usuário mexer no input.
            this.renderer.listen(this.inputChildren[index],
                "blur",
                () => {
                    this.applyInputClass();
                });
        }

        this.ngClassInvalidInput = this.formControl.statusChanges.subscribe(status => {
            this.applyInputClass(status);
        });
    }

    /**
     * @description Jeito único de fazer a validação dos inputs. Verifica se o imput está dirty ou touched e aplica ou remove a classe inválida nos imputs (buscando os filhos de inputParent).     
     * @param status Status do formControl, deve ser "INVALID" ou "VALID". Default: this.formControl.status;
     */
    private applyInputClass(status: string = this.formControl.status): void {
        if (this.formControl.touched || this.formControl.dirty) {
            if (status == "INVALID" && this.shouldApplyInvalidClass == true) {
                //Remover a classe de válido.
                if (this.shouldApplyValidClass == true) {
                    for (let index = 0; index < this.inputChildren.length; index++) {
                        this.renderer.removeClass(this.inputChildren[index], this.validClass);
                    }
                }

                //Adicionar a classe de inválido.
                for (let index = 0; index < this.inputChildren.length; index++) {
                    this.renderer.addClass(this.inputChildren[index], this.invalidClass);
                }
            } else {
                //Remover a classe de inválido.
                if (this.shouldApplyInvalidClass == true) {
                    for (let index = 0; index < this.inputChildren.length; index++) {
                        this.renderer.removeClass(this.inputChildren[index], this.invalidClass);
                    }
                }

                //Adicionar a classe de válido.
                if (this.shouldApplyValidClass == true) {
                    for (let index = 0; index < this.inputChildren.length; index++) {
                        this.renderer.addClass(this.inputChildren[index], this.validClass);
                    }
                }
            }
        }
    }

    public get isRequired(): boolean {
        var _validator: any = this.formControl.validator({} as AbstractControl) //Se existir o required vai retornar um objeto { required: true }
        return (_validator && _validator.required) ? true : false;
    }

    public get formControl(): FormControl | AbstractControl {
        return this.fControl;
    }

    /**
     * Faz a busca em filhos de um elemento (HTML) com a tag específicada.
     * @param tagName Elemento que quer buscar. Ex: "input", "p", "div", "label"
     * @param arrayElements Elemento HTML. Obs: Não é um ElementRef. é o ElementRef.nativeElement
     * @returns Array de elementos encontrados.
     */
    protected findBetweenChildElements(tagName: string, arrayElements: any[]): any[] {
        const foundElements = [];
        for (let index = 0; index < arrayElements.length; index++) {
            const element = arrayElements[index];
            
            if (element.tagName == tagName.toUpperCase()) {
                foundElements.push(element);
            }
        }
        return foundElements;
    }

}