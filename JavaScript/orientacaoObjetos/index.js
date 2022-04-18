// execução 

import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {SistemaAutenticacao} from "./Funcionario/SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456789")
const gerente = new Gerente("Ricardo", 5000, 1237899489);

const estaLogado = SistemaAutenticacao.login(diretor, "123456789");

console.log(estaLogado);
