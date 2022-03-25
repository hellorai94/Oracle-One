console.log("Trabalhando com condicionais");
const listaDeDestinos = new Array(
  "Salvador", "São Paulo", "Minas Gerais"
);

const idadeComprador = 15;
const estaAcompanhada = true;
console.log("Destinos possíveis"); //console.log(salvador, saoPaulo, minasGerais)
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
  console.log("Comprador maior de idade");
  listaDeDestinos.splice(1, 1); //removendo um item
} else if (estaAcompanhada == true) {
  console.log("Comprador está acompanhado");
  listaDeDestinos.splice(1, 1); //removendo um item
} else {
  console.log("Comprador é menor de idade e por isso não posso vender");
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);