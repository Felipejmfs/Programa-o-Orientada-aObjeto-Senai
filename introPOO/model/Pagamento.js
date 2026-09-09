export class Pagamento {

    #valor;

    constructor(valor) {
        this.#valor = valor
    }

    get valor(){
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