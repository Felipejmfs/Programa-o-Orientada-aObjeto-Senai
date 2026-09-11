import {Alerta} from './model/Alerta.js';
import {AlertaEmail} from './model/AlertaEmail.js';
import {AlertaSms} from './model/AlertaSms.js';
import {AlertaPainel} from './model/AlertaPainel.js';

const email = new AlertaEmail("oi", "Baixa", "felipe@gmail.com");
const sms = new AlertaSms("Segurança", "Alta", "1234");
const painel = new AlertaPainel("Fogo", "Alta", "Segurantes");

const alertas = [email, sms, painel]

for (let i = 0; i < alertas.length; i++){
    alertas[i].enviar();
}

console.log("Alertas enviados com sucesso!");

painel.alterarPrioridade("Media")