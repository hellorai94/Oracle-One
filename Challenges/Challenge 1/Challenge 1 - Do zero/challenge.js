const area = document.getElementById("minusculas");
const cript = document.getElementById("botao-cripto");
const descript = document.getElementById("botao-descripto");

let textoInicial = document.querySelector("#minusculas");
let textoResultado = document.querySelector("#mensagem");

area.addEventListener("input", function () {
    area.value = area.value.replaceAll(/[^a-z]/g, "");
    // let pegar = area.value.replaceAll(/a-z/g, "");
    // alert(pegar);
})

// Criptografar o texto

cript.addEventListener("click", function () {
    let texto = area.value;
    texto = texto.replaceAll(/e/gi, "enter").replaceAll(/i/gi, "imes")
        .replaceAll(/a/gi, "ai").replaceAll(/o/gi, "ober").replaceAll(/u/gi, "ufat")
    return texto;
})
// Descriptografar o texto

descript.addEventListener("click", function () {
    let descripTexto = area.value;
    descripTexto = descripTexto.replaceAll(/enter/gi, "e").replaceAll(/imes/gi, "i")
        .replaceAll(/ai/gi, "a").replaceAll(/ober/gi, "o").replaceAll(/ufat/gi, "u")
    return descripTexto;
})








// textoInicial.onkeyup = function(){
//     let valor = textoInicial.value
//     textoResultado.value = valor
//   }


// let textoResultado = document.querySelector("#mensagem");
// textoResultado.value = textoModificado