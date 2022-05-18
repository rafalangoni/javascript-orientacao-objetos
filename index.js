class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            console.log(`Saque efetuado com sucesso! Saldo atual: ${this.saldo}`);
        }else
        console.log("Saldo insuficiente");
    }
}

const cliente1 = new Cliente();

cliente1.nome = "Rafael";
cliente1.cpf = 11122233344;

const contaCorrenteRafael = new ContaCorrente();
contaCorrenteRafael.saldo = 100;
contaCorrenteRafael.sacar(99);

console.log(contaCorrenteRafael)

console.log(cliente1)

