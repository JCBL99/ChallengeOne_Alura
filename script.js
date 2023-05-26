var textarea = document.querySelector('.textArea');
var btnEncriptar = document.querySelector('.btnEncriptar');
var btnDesencriptar = document.querySelector('.btnDesencriptar');
var textoResultado = document.querySelector('.textoResultado');
var munieco = document.querySelector('.munieco');
var contenedor = document.querySelector('.contenedorParrafo');
var btnCopiar = document.querySelector('.btnCopiar');

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

function encriptar() {
    mostrarBotonCopiar()
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    textoResultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar() {
    mostrarBotonCopiar()
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    textoResultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto() {
    var cajatexto = document.querySelector(".textArea");
    return cajatexto.value;
}

function ocultarAdelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai";
        } else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter";
        } else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes";
        } else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober";
        } else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat";
        } else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a";
            i = i + 1;
        } else if (texto[i] == "e") {
            textoFinal = textoFinal + "e";
            i = i + 4;
        } else if (texto[i] == "i") {
            textoFinal = textoFinal + "i";
            i = i + 3;
        } else if (texto[i] == "o") {
            textoFinal = textoFinal + "o";
            i = i + 3;
        } else if (texto[i] == "u") {
            textoFinal = textoFinal + "u";
            i = i + 3;
        } else {
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}

function mostrarBotonCopiar() {
    btnCopiar.style.display = 'inline-block';
}

btnCopiar.addEventListener("click", function () {
    var contenido = document.querySelector(".textoResultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
});
