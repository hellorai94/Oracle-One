console.log("Trabalhando com listas");
// const salvador = "Salvador";
// const saoPaulo = "São Paulo";
// const minasGerais = "Minas Gerais";

const listaDeDestinos = new Array(
  "Salvador", "São Paulo", "Minas Gerais"
);

listaDeDestinos.push("Curitiba") // add um item na lista
console.log("Destinos possíveis");  //console.log(salvador, saoPaulo, minasGerais)
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[0]); //imprimir somente essa posição

