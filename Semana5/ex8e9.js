class Transações {
    constructor(conta,nConta ,valorTransacao){
        this.conta = conta;
        this.nConta = nConta
        this.valorTransacao = valorTransacao;
        this.idTransferencia = 0
        this.data = new Date
        this.saldo = 500;
    }

    debito(valor){
        this.saldo = this.saldo - valor
        this.idTransferencia ++
        return this.saldo, console.log('Id ',this.idTransferencia)
    }
    debito(valor){
        this.saldo = this.saldo + valor
        return this.saldo
    }
    
}

