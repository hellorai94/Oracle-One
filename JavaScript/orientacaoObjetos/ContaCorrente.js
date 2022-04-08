// classe
import {
  Cliente
} from "./Cliente.js";
export class ContaCorrente {
  // atributo privado
  static numeroDeContas = 0;

  constructor(agencia, cliente){
    this.agencia = agencia;
    this.cliente = cliente; 
    this._saldo = 0;
    ContaCorrente.numeroDeContas += 1;
  }

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 100) {
      return;
    }
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}