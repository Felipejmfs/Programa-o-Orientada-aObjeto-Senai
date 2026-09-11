export class Alerta {

    #mensagem;
    #prioridade;

    cosntructor(mensagem, prioridade){
        if (new.target === Alerta) {
            throw new Error("Nao e possivel instanciar a classe abstrata Pagamento");
        }
        this.#mensagem = mensagem;
        this.#prioridade = prioridade;
    }

    get getmensagem() {
        return this.#mensagem
    }

    get getprioridade() {
        return this.#prioridade
    }

    alterarPrioridade(novaPrioridade){
        if (novaPrioridade !== "Baixa" && novaPrioridade !== "Media" && novaPrioridade !== "Alta"){
            return false
        }
        this.#prioridade = novaPrioridade
        console.log("Prioridade alterada com sucesso")
        return true
    }

    enviar(){
        throw new Error("Faltou implementar o metodo na classe filha");
    }
}
