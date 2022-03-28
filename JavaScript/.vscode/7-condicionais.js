console.log("Trabalhando com condicionais");
const listaDeDestinos = new Array(
  "Salvador", "São Paulo", "Rio de Janeiro"
);

const idadeComprador = 25;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis"); //console.log(salvador, saoPaulo, minasGerais)
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//   console.log("Comprador maior de idade");
//   listaDeDestinos.splice(1, 1); //removendo um item
// } else if (estaAcompanhada == true) {
//   console.log("Comprador está acompanhado");
//   listaDeDestinos.splice(1, 1); //removendo um item
// } else {
//   console.log("Comprador é menor de idade e por isso não posso vender");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log("Boa viagem!");
  listaDeDestinos.splice(2, 1); //removendo um item
} else {
  console.log("Comprador é menor de idade e por isso não posso vender");
}

console.log("Embarque: \n\n")
if (idadeComprador >= 18 && temPassagemComprada) {
  console.log("Boa viagem");
} else {
  console.log("Você não pode embarcar");
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);