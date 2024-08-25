
const encriptar = document.getElementById("button__encriptar");
const desencriptar = document.getElementById("button__desencriptar");
const textoInicial = document.getElementById("textoInput");
const textFinal = document.getElementById("textoOutput");
const copy = document.getElementById("button__copiar");
const muñeco = document.getElementById("muñeco");
const textInfo = document.getElementById("textoInfo");
const rigth = document.getElementById("encriptado")

const remplace = (newvalue) => {
	textFinal.innerHTML = newvalue;
	textFinal.classList.add("ajustar");
	textoInicial.value = "";
	textoInicial.style.height = "auto"
	muñeco.classList.add("ocultar");
	textInfo.classList.add("ocultar");
	copy.classList.remove("bn_ocultar");
    rigth.classList.remove("ajuste")

}

let remplazar = [
	["e", "enter"],
	["o", "ober"],
	["i", "imes"],
	["a", "ai"],
	["u", "ufat"]
];


encriptar.addEventListener('click', () => {

	const texto = textoInicial.value;

	if (texto != "") {
		function encript(newtext) {
			for (let i = 0; i < remplazar.length; i++) {
				if (newtext.includes(remplazar[i][0])) {
					newtext = newtext.replaceAll(remplazar[i][0], remplazar[i][1]);
				};
			};
			return newtext;
		};
		remplace(encript(texto));
	} else {
		alert("Ingrese texto para encriptar");
		reset();
	};
});
