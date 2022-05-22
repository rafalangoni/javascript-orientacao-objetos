//Classe abstrata
export class Conta{
    constructor(agencia, cliente, saldoInicial){
        if(this.constructor == Conta){
            throw new Error ("Não é possível instanciar a classe Conta diretamente!");
        }

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

    //Método abstrato, deve ser implementado nas classes filhas
    sacar(valor){
        throw new Error("Método sacar deve ser implementado!");
    }

    //sobrescrita de método com visibilidade protegida, ou seja, somente a classe e filhos enxergam
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