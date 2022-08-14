

var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector("#output");

function criptografar(){
    var texto = textInput.value;
    
    var textCripto = texto.replace("e","enter").replace("i","imes").replace("a", "ai").replace("o", "ober").replace("u", "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">'+textCripto+'</textarea>'+
    '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
} 

function descriptografar(){
    var texto = textInput.value;

    var textDescripto = texto.replace("enter", "e").replace("imes", "i").replace("ai","a").replace("ober","o").replace("ufat", "u");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">'+textDescripto+'</textarea>'+
    '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    var textoCop = document.getElementById('input-texto');

    textoCop.select();
    document.execCommand('copy') ;
    alert("Ok! Texto copiado.");
}