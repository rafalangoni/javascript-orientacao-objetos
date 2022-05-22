import { Conta } from "./Conta/Conta.js";
import { Cliente } from "./Clientes/Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./Funcionarios/SistemaAutenticacao.js";

// const rafael = new Cliente("Rafael", 11122233344);

// const joao = new Cliente("João", 99955566611);

// const contaCorrenteJoao = new ContaCorrente(102, joao, 0);

// const contaCorrenteRafael = new ContaCorrente(1002, rafael, 0);
// contaCorrenteRafael.depositar(200);
// contaCorrenteRafael.sacar(100);
// contaCorrenteRafael.transferir(50, contaCorrenteJoao);

// const contaPoupancaRafael = new ContaPoupanca(1002, rafael, 0);
// contaPoupancaRafael.depositar(250);
// contaPoupancaRafael.sacar(100);
// console.log(rafael, contaCorrenteRafael);
// console.log(joao, contaCorrenteJoao);
// console.log(contaPoupancaRafael);
// console.log(ContaCorrente.numeroDeContas);

// const contaSalario1 = new ContaSalario(379, rafael, 0);
// contaSalario1.depositar(100);
// contaSalario1.sacar(10);

// console.log(contaPoupancaRafael._sacar(10,0))
// console.log(diretor1)
// const conta5 = new Conta(1, joao, 0);

const diretor = new Diretor("Rafael", 12345678987, 5000);
diretor.cadastrarSenha("password");

const cliente1 = new Cliente("Rafael", 12345678987, 5000);

const estaLogado = SistemaAutenticacao.login(cliente1, 5000);

console.log(estaLogado)