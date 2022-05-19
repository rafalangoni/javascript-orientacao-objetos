export class ContaCorrente{
    agencia;
    cliente;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
    }
}   
 //conceito de early return: coloca-se a condição que NÃO quer que seja satisfeita ANTES, terminando a função 
 //com o return
    depositar(valor){
        if(valor <= 0){
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorTransferido = this.sacar(valor);
        conta.depositar(valorTransferido);
    }
}
