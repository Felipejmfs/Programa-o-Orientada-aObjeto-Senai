import {PagamentoCartao} from './model/PagamentoCartao.js';
import {PagamentoBoleto} from './model/PagamentoBoleto.js';
import {PagamentoPix} from './model/PagamentoPix.js';

const pix = new PagamentoPix(100, '123456789');

const boleto = new PagamentoBoleto(200, '123456789');

const cartao = new PagamentoCartao(300, '1234', 3);

pix.aplicarDesconto(10);

const pagamentos = [pix, boleto, cartao];

for (let i = 0; i < pagamentos.length; i++) {
    pagamentos[i].processarPagamento();
}

console.log("Pagamentos processados com sucesso!");