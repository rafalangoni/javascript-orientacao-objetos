import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const rafael = new Cliente("Rafael", 11122233344);

const joao = new Cliente("João", 99955566611);

const contaCorrenteJoao = new ContaCorrente(102, joao);

const contaCorrenteRafael = new ContaCorrente(1002, rafael);
contaCorrenteRafael.depositar(200);
contaCorrenteRafael.sacar(100);
contaCorrenteRafael.transferir(50, contaCorrenteJoao);

console.log(rafael, contaCorrenteRafael);
console.log(joao, contaCorrenteJoao);
console.log(ContaCorrente.numeroDeContas);
