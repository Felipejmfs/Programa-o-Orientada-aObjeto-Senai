import {Alerta} from "./Alerta.js";

export class AlertaSms extends Alerta{
    #numeroDestino

    constructor(mensagem, prioridade, numeroDestino){
        super(mensagem, prioridade);
        this.#numeroDestino = numeroDestino
    }

    get numeroDestino(){
        return this.#numeroDestino
    }

    enviar(){
        console.log(`Enviando alerta para o numero ${this.#numeroDestino} com a mensagem ${this.mensagem} e prioridade ${this.prioridade}`);
    }
}