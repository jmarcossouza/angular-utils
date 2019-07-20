import { Input, ElementRef, ViewChild, Renderer2, OnDestroy, AfterViewInit } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

export class InputContainerBase implements OnDestroy, AfterViewInit {

    /**
     * @description Contador de "instancias". Seu valor SOMENTE deve ser INCREMENTADO.
     */
    private static instanceCounter: number = 0;

    /**
     * @description Incrementa e depois retorna o instanceCounter toda vez que chamado. É um método get.
     * @description Um bom uso disso aqui é pra aplicar os atributos "for" e "id" dos <label> e <input>. 
     * Já que toda vez que chamado, irá incrementar antes, assim impedindo a repetição.
     */
    public static get instanceCount(): number {
        return ++InputContainerBase.instanceCounter;
    }

    /**
     * @description Decide se deve ou não, através do método applyLabelIdentifierFromInput(), REMOVER e aplicar novos atributos id e for para os inputs e labels.
     * Se TRUE vai aplicar, se FALSE não irá mexer nos ids nem for.
     * @description Se você usa o seletor javascript (id) pra alguma outra coisa, deve setar isso como false.
     * @default true
     */
    @Input() autoSetId: boolean = true;

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
    @ViewChild('inputParent', { static: false }) inputParent: ElementRef;

    protected renderer: Renderer2
    /**
     * @description Variável em que fica salvo o subscribe do método subscriptionsInput()
     * @description É feito um unsubscribe nela no ngOnDestroy() do Angular.
     */
    private ngClassInvalidInput: Subscription;

    constructor(renderer: Renderer2) {
        this.renderer = renderer;
    }

    ngAfterViewInit(): void {
        if (this.shouldApplyInvalidClass || this.shouldApplyValidClass) {
            this.subscriptionsInput();
        }

        this.applyLabelIdentifierFromInput();
    }

    ngOnDestroy() {
        this.ngClassInvalidInput.unsubscribe();
    }

    /**
     * É um método get que pega os filhos (inputs) da div.
     * É importante que seja um get para que sempre esteja atualiazdo.
     */
    protected get inputChildren(): any[] {
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

    /**
     * @description Remove os atributos "id" e "for" do <input> e <label> e substitui por novos. Ambos iguais. Utiliza o contador instanceCount, portanto nunca irá se repetir dentro do projeto.
     * @param inputElement Input em que será aplicado o id
     * @param labelElement Label em que será aplicado o for
     */
    protected applyLabelIdentifier(inputElement: any, labelElement): void {
        if (inputElement && labelElement) {
            this.renderer.removeAttribute(inputElement, "id");
            this.renderer.removeAttribute(labelElement, "for");

            const identifier = `utsInput${InputContainerBase.instanceCount.toString()}`;

            this.renderer.setAttribute(inputElement, "id", identifier);
            this.renderer.setAttribute(labelElement, "for", identifier);
        }
    }

    /**
     * @description Método que varre os inputs e sai aplicando os atributos "for" e "id" pra cada um deles.
     * IMPORTANTE: Pra usar esse método, os <label> devem estar sempre juntos ao <input> (compartilhando o mesmo pai)
     */
    public applyLabelIdentifierFromInput(): void {
        if (this.autoSetId === true) {
            for (let index = 0; index < this.inputChildren.length; index++) {
                const input = this.inputChildren[index];
                const label = this.findBetweenChildElements("label", input.parentElement.children)[0];

                if (input && label) {
                    this.applyLabelIdentifier(input, label);
                }
            }
        }
    }

}