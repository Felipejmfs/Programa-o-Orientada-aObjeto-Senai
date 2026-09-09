import {Pagamento} from "./Pagamento.js";

export class PagamentoPix extends Pagamento{
    #chavePix;
    constructor(valor, chavePix){
        super(valor);
        this.#chavePix = chavePix;
    }
    
    get chavePix(){
        return this.#chavePix;
    }

    processarPagamento() {
        console.log(`Copie e cole a chave Pix: ${this.#chavePix}`);
    }
}