export class Conta{
    constructor(agencia, cliente, saldoInicial){
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = saldoInicial;
    }

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }

    get saldo(){
        return this._saldo;
    }

    _sacar(valor, taxa){
        const valorSacado = valor * taxa;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
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