import {Alerta} from "./Alerta.js";

export class AlertaPainel extends Alerta{
    #setor

    constructor(mensagem, prioridade, setor){
    super(mensagem, prioridade);
    this.#setor = setor;
    }

    get setor(){
        return this.#setor
    }

    enviar(){
        console.log(`Enviando alerta para o setor ${this.#setor} com a mensagem ${this.mensagem} e prioridade ${this.prioridade}`);
    }
}