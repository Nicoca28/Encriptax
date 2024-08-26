// Función para encriptar el texto
function encryptText(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Función para desencriptar el texto
function decryptText(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Capturar elementos del DOM
const inputTextArea = document.getElementById('input-text');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const encryptButton = document.getElementById('encrypt-button');
const decryptButton = document.getElementById('decrypt-button');
const copyButton = document.getElementById('copy-button');
const defaultImage = document.getElementById('default-image');

// Función para actualizar la visibilidad de la imagen y el contenedor de resultados
function updateVisibility() {
    if (inputTextArea.value.trim() === "") {
        defaultImage.style.display = "block";
        resultContainer.style.display = "none";
    } else {
        defaultImage.style.display = "none";
        resultContainer.style.display = "block";
    }
}

// Añadimos eventos a los botones
encryptButton.addEventListener('click', () => {
    const inputText = inputTextArea.value.toLowerCase();
    const encryptedText = encryptText(inputText);
    resultText.textContent = encryptedText;
    updateVisibility();
});

decryptButton.addEventListener('click', () => {
    const inputText = inputTextArea.value.toLowerCase();
    const decryptedText = decryptText(inputText);
    resultText.textContent = decryptedText;
    updateVisibility();
});

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(resultText.textContent).then(() => {
        alert('Texto copiado al portapapeles');
    });
});

// Añadir evento para detectar cambios en el texto del área de entrada
inputTextArea.addEventListener('input', updateVisibility);

// Inicializar visibilidad al cargar la página
updateVisibility();
