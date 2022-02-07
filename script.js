var textoRecebido = document.querySelector("#input-texto");
var resultado = document.querySelector("#msg");
var cripto = document.querySelector("#btn-cripto");
var descripto = document.querySelector("#btn-descripto");
var copiar = document.querySelector("#btn-copy");


cripto.addEventListener("click", function (event) {
  event.preventDefault();
});

descripto.addEventListener("click", function (event) {
  event.preventDefault();
});


function validaTexto(texto) {
  const caractEsp = /^[a-z\s]+$/i;
  var textoValidado = true;

  if (texto.length == 0) {
    alert("Escreva uma mensagem");
    textoValidado = false;
  } else {
    if (!texto || !texto.match(caractEsp)) {
      alert("Por favor, sem acentos, números ou caracteres especiais!!");
      textoValidado = false;
    }
  }
  return textoValidado;
}

function criptografar() {
  var texto = textoRecebido.value.toLowerCase();

  var primeirasLetras = [/e/g, /i/g, /a/g, /o/g, /u/g];
  var substituir = ["enter", "imes", "ai", "ober", "ufat"];

  validaTexto(texto);
  if ((textoValidado = true)) {
    for (var i = 0; i < primeirasLetras.length; i++) {
      var textoCripto = texto.replace(primeirasLetras[i], substituir[i]);
      texto = textoCripto;
    }
    resultado.value = texto;
  } else {
    resultado.value = "";
  }
}

function descriptografar() {
  var texto = textoRecebido.value.toLowerCase();

  var substituir = [/enter/g, /imes/g, /ai/g, /ober/g, /ufat/g];
  var primeirasLetras = ["e", "i", "a", "o", "u"];

  validaTexto(texto);

  if ((textoValidado = true)) {
    for (var i = 0; i < primeirasLetras.length; i++) {
      var textoDescripto = texto.replace(substituir[i], primeirasLetras[i]);
      texto = textoDescripto;
    }
    resultado.value = texto;
  } else {
    resultado.value = "";
  }
}

function copiarTexto() {
  var textoCopiado = document.getElementById("msg");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

cripto.onclick = criptografar;

descripto.onclick = descriptografar;

copiar.onclick = copiarTexto;
