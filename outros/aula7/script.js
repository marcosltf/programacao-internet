const titulo = document.querySelector("#titulo");
const inputTexto = document.querySelector("#inputTexto")
const btTexto  = document.querySelector("#btTexto")

function trocarTexto() {
    let textoDigitado = inputTexto.value;
    console.log(textoDigitado);

    titulo.textContent = textoDigitado;
}

btTexto.onclick = function() {
    trocarTexto()
    console.log("Texto Trocado")
}
