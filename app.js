
const encriptar = document.getElementById("button__encriptar");
const desencriptar = document.getElementById("button__desencriptar");
const textoInicial = document.getElementById("textoInput");
const textFinal = document.getElementById("textoOutput");
const copy = document.getElementById("button__copiar");
const muñeco = document.getElementById("muñeco");
const textInfo = document.getElementById("textoInfo");
const encriptado = document.getElementById("encriptado")

let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"]
];

const remplace = (newvalue) => {
	textFinal.innerHTML = newvalue;
	textFinal.classList.add("ajustar");
	textoInicial.value = "";
	textoInicial.style.height = "auto"
	muñeco.classList.add("ocultar");
	textInfo.classList.add("ocultar");
	copy.classList.remove("bn_ocultar");
    encriptado.classList.remove("ajuste")

}

const reset = () => {
	textoInicial.value = "";
    textoInicial.style.height = "auto";
	textFinal.innerHTML = "";
	encriptado.classList.remove("ajuste")
	textFinal.classList.remove("ajustar");
	muñeco.classList.remove("ocultar");
	textFinal.placeholder = "Ningún mensaje fue encontrado";
	textInfo.classList.remove("ocultar")
	copy.classList.add("bn_ocultar");
	textoInicial.focus();
};

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

desencriptar.addEventListener('click', () => {

	const texto = textoInicial.value;

	if (texto != "") {
		function desencript(newtext) {
			for (let i = 0; i < remplazar.length; i++) {
				if (newtext.includes(remplazar[i][1])) {
					newtext = newtext.replaceAll(remplazar[i][1], remplazar[i][0]);
				};
			};
			return newtext;
		};
		remplace(desencript(texto));
	} else {
		alert("Ingrese texto a desencriptar");
		reset();
	};
});

copy.addEventListener("click", () => {
	let texto = textFinal;
    navigator.clipboard.writeText(texto.value);
	alert("Texto Copiado");
	reset();
});

