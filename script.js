// Criptografia e Descriptografia
var listaDaCriptografia = ["enter", "imes", "ai", "ober", "ufat"];
var listaVogais = ["a", "e", "i", "o", "u"];

const letrasCriptografar = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
}

const letrasDescriptografar = {
    "ai": "a",
    "enter": "e",
    "imes": "i",
    "ober": "o",
    "ufat": "u"
}

function criptografarTexto(texto) {
    let textoConvertido = texto;
    listaVogais.forEach(function (letra) {
        textoConvertido = textoConvertido.split(letra).join(letrasCriptografar[letra]);
    });
    return textoConvertido;
}

function descriptografarTexto(texto) {
    let textoConverter = texto;
    listaDaCriptografia.forEach(function (letra) {
        textoConverter = textoConverter.split(letra).join(letrasDescriptografar[letra]);
    });
    return textoConverter;
}

// Criptografia

function criptografa() {
    var campoTexto = document.getElementById("texto-principal");
    var btnCriptografia = document.querySelector("#criptografar");

    btnCriptografia.addEventListener("click", function (event) {
        event.preventDefault();
        const textoCriptografado = criptografarTexto(campoTexto.value);

        var campoVazio = document.querySelector(".texto__resposta");
        campoVazio.classList.add("d-none");

        var campoPreenchido = document.querySelector(".texto__criptografado");
        campoPreenchido.classList.remove("d-none");

        var paragrafo = document.querySelector(".texto__criptografado p");

        var minusculas = textoCriptografado.toLowerCase();

        //verificar caracteres especiais
        function caracterEspeciais(str) {
            const caracEspecial = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            return caracEspecial.test(str);
        }

        //verificar se tem acento
        var comAcento = textoCriptografado;
        var semAcento = comAcento.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        if (textoCriptografado === minusculas && textoCriptografado === semAcento && caracterEspeciais(textoCriptografado) == false) {
            paragrafo.textContent = textoCriptografado;
        } else {
            paragrafo.textContent = "Apenas letras minúsculas e sem acento."
        }
    });
}

criptografa();

function descriptografa() {
    var campoTexto = document.getElementById("texto-principal");
    var btnCriptografia = document.querySelector("#descriptografar");

    btnCriptografia.addEventListener("click", function (event) {
        event.preventDefault();
        const textoDescriptografado = descriptografarTexto(campoTexto.value);

        var campoVazio = document.querySelector(".texto__resposta");
        campoVazio.classList.add("d-none");

        var campoPreenchido = document.querySelector(".texto__criptografado");
        campoPreenchido.classList.remove("d-none");

        var paragrafo = document.querySelector(".texto__criptografado p");

        //Verificar se tem letra minuscula
        var minusculas = textoDescriptografado.toLowerCase();

        //verificar caracteres especiais
        function caracterEspeciais(str) {
            const caracEspecial = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            return caracEspecial.test(str);
        }

        //verificar se tem acento
        var comAcento = textoDescriptografado;
        var semAcento = comAcento.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        if (textoDescriptografado === minusculas && textoDescriptografado === semAcento && caracterEspeciais(textoDescriptografado) == false) {
            paragrafo.textContent = textoDescriptografado;
        } else {
            paragrafo.textContent = "Apenas letras minúsculas e sem acento."
        }
    });
}

descriptografa();

// Copiar o texto

function copiarTexto() {
    let textoCopiado = document.querySelector(".texto__criptografado p");
    var btnCopiar = document.querySelector("#copiar");
    btnCopiar.addEventListener("click", function () {
        navigator.clipboard.writeText(textoCopiado.innerText);
        alert("Texto copiado");
        location.reload();
    });
}

copiarTexto();

// textArea

let textArea = document.querySelector("#texto-principal");
textArea.addEventListener('input', autoResize, false);

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

