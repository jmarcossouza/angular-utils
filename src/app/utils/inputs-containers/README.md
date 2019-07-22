# Input Container

Esses componentes devem ser usados fora dos <input> para diminuir o código dos componentes e centralizar as funções. Seus principais recursos são:

- Indicação e descrição de invalidez nos campos (com base nos Validators do formControl);
- Adição dos atributos "for" e "id" para os <label> e <input> automaticamente. (Interessante para <input> do tipo checkbox e radio).

# Modificações

Esses componentes foram feitos com base no [Bootstrap 4.3](https://getbootstrap.com/docs/4.3/components/forms/). Você deve ser capaz de alterar ou criar componentes sem dificuldade. O essencial é: 
- Extender a classe [InputContainerBase](https://github.com/jmarcossouza/angular-utils/blob/master/src/app/utils/inputs-containers/InputContainerBase.ts) e sobreescrever o método `public get inputChildren(): any[]` para retornar um array localizando os elementos <input> (olhe o método principal e você entenderá).
- Nos containers o `<ng-content></ng-content>` deve estar dessa forma: `<div #inputParent><ng-content></ng-content></div>`. (Eu preciso dele dentro de uma tag com o #inputParent pra achar os inputs)

Se seu Framework CSS possuir uma estrutura muito diferente do Bootstrap, provavelmente será necessário modificar alguns métodos na classe [InputContainerBase](https://github.com/jmarcossouza/angular-utils/blob/master/src/app/utils/inputs-containers/InputContainerBase.ts):
- `private applyInputClass(status: string = this.formControl.status): void` Método que aplica e tira as classes 'is-valid' e 'is-invalid' diretamente no <input> com base na validez do FormControl. (Se você mudar o nome do método, vai dar problemas em outros lugares).

Bicho, todos os métodos e campos estão comentados, leia a classe [InputContainerBase](https://github.com/jmarcossouza/angular-utils/blob/master/src/app/utils/inputs-containers/InputContainerBase.ts) e o componente (o mais simples) [InputTextContainer](https://github.com/jmarcossouza/angular-utils/tree/master/src/app/utils/inputs-containers/input-text-container) que você vai entender tudo.

# Exemplos de uso

Todos os componentes aqui devem estar no componente [Formularios](https://github.com/jmarcossouza/angular-utils/blob/master/src/app/pages/formularios/formularios.component.html). Só tem um parâmetro obrigatório, é o `@Input() fControl: FormControl | AbstractControl;`. Os outros `Input()` são opcionais. (Classe [InputContainerBase](https://github.com/jmarcossouza/angular-utils/blob/master/src/app/utils/inputs-containers/InputContainerBase.ts)).