import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Rafael";
cliente1.cpf = 11122233344;

const cliente2 = new Cliente();
cliente2.nome = "João";
cliente2.cpf = 99988877766;

const contaCorrenteJoao = new ContaCorrente();
contaCorrenteJoao.agencia = 102
contaCorrenteJoao.cliente = cliente2;

const contaCorrenteRafael = new ContaCorrente();
contaCorrenteRafael.depositar(200);
contaCorrenteRafael.sacar(100);
contaCorrenteRafael.transferir(50, contaCorrenteJoao);

console.log(cliente1, contaCorrenteRafael);
console.log(cliente2, contaCorrenteJoao);
