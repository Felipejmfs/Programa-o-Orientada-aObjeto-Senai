import {Pagamento} from "./Pagamento.js";

export class PagamentoBoleto extends Pagamento{
    #codigoBarras;
    constructor(valor, codigoBarras){
        super(valor);
        this.#codigoBarras = codigoBarras;
    }

    get codigoBarras(){
        return this.#codigoBarras;
    }

    processarPagamento() {
        console.log(`Boleto gerado com sucesso ${this.#codigoBarras}`);
    }
}
