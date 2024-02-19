var textInput = document.querySelector("#input_texto");
var output = document.querySelector("#output");

function criptografar() {
    var texto = textInput.value;
    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    output.innerHTML = '<textarea readonly id="input_texto">' + resultCripto +
        '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
    var texto = textInput.value;
    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    output.innerHTML = '<textarea readonly id="input_texto">' + resultDescripto +
        '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
    var textoCop = output.querySelector('textarea');
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado: " + textoCop.value);
}