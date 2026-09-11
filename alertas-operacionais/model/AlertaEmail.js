import {Alerta} from "./Alerta.js";

export class AlertaEmail extends Alerta{
    #emailDestinatario;
    constructor(mensagem, prioridade, emailDestinatario){
        super(mensagem, prioridade);
        this.#emailDestinatario = emailDestinatario;
    };

    get emailDestinatario(){
        return this.#emailDestinatario
    };

    enviar(){
        console.log(`Enviando email para ${this.emailDestinatario} com a mensagem ${this.mensagem} e prioridade ${this.prioridade}`);
    }
}