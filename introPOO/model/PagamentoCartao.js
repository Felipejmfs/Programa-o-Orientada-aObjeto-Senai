import {Pagamento} from "./Pagamento.js";

export class PagamentoCartao extends Pagamento{
    #ultimoNum;
    #parcelas;
    constructor(valor, ultimoNum, parcelas){
        super(valor);
        this.#ultimoNum = ultimoNum;
        this.#parcelas = parcelas;
    }

    get ultimoNum(){
        return this.#ultimoNum;
    }

    get parcelas(){
        return this.#parcelas;
    }

    processarPagamento() {
        console.log(`Enviar os dados do cartão para a operadora ${this.#ultimoNum} em ${this.#parcelas} parcelas.`);
    }
}