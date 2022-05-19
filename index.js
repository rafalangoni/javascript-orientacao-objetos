import { Conta } from "./Conta.js";
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const rafael = new Cliente("Rafael", 11122233344);

const joao = new Cliente("João", 99955566611);

const contaCorrenteJoao = new ContaCorrente(102, joao, 0);

const contaCorrenteRafael = new ContaCorrente(1002, rafael, 0);
contaCorrenteRafael.depositar(200);
contaCorrenteRafael.sacar(100);
contaCorrenteRafael.transferir(50, contaCorrenteJoao);

const contaPoupancaRafael = new ContaPoupanca(1002, rafael, 1);

console.log(rafael, contaCorrenteRafael);
console.log(joao, contaCorrenteJoao);
console.log(contaPoupancaRafael);
console.log(ContaCorrente.numeroDeContas);
