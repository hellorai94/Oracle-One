// execução 

import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import {ContaPoupanca} from "./ContaPoupanca.js";
import {Conta} from "./Conta.js";

// toda vez que tem um () tem a chamada de um metodo
const cliente1 = new Cliente("Ricardo", 11122233309);
const contaCorrenteRicardo = new Conta("corrente", 0, cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new Conta("poupanca", 50, cliente1, 1001);

console.log(contaPoupanca);
console.log(contaCorrenteRicardo);

