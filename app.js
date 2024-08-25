document.addEventListener("DOMContentLoaded", function() {
    const encriptar = document.getElementById("button__encriptar");
    const desencriptar = document.getElementById("button__desencriptar");
    const textoInicial = document.getElementById("textoInput");
    const textFinal = document.getElementById("textoOutput");
    const copy = document.getElementById("button__copiar");

    encriptar.addEventListener("click", () => {
        console.log(textoInicial.value)
    });
});

