export class Pagamento {

    #valor;

    constructor(valor) {
        if(new.target === Pagamento){
            throw new Error("Não é possível instanciar a classe abstrata Pagamento");
        }
        this.#valor = valor
    }

    get getvalor(){
        return this.#valor;
    }

    aplicarDesconto(percentual) {
        if (percentual <= 0 || percentual >= 100) {
            return false;
        }

        this.#valor = this.#valor - (this.#valor * percentual / 100);
        return true;
    }

    processarPagamento() {
        throw new Error("Faltou implementar o método na classe filha");
    }
}