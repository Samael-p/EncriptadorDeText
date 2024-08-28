// Seleccionar elementos del DOM
const inputTexto = document.getElementById('milnput');
const btnEncriptar = document.querySelector('.buttonencrp');
const btnDesencriptar = document.querySelector('.buttondesencript');
const section2 = document.querySelector('.section2');

// Función para encriptar el texto
function encriptar(texto) {
    let textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptar(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return textoDesencriptado;
}

// Función para mostrar el resultado en section2
function mostrarResultado(texto) {
    section2.innerHTML = `
        <h2 class="subtitleh2">Texto Procesado</h2>
        <div class="resultado-contenedor">
            <textarea class="resultado-texto" cols="20" rows="13">${texto}</textarea>
            <button id="copiar" class="button-copiar">Copiar</button>
        </div>
    `;
    document.getElementById('copiar').addEventListener('click', () => {
        navigator.clipboard.writeText(texto).then(() => {

            document.getElementById('milnput').value = '';
            document.querySelector('.resultado-texto').value = '';
        });
    });
}


// Eventos de clic para los botones
btnEncriptar.addEventListener('click', () => {
    const texto = inputTexto.value;
    const textoEncriptado = encriptar(texto);
    mostrarResultado(textoEncriptado);
});

btnDesencriptar.addEventListener('click', () => {
    let texto = inputTexto.value;

    // Si el texto de entrada está vacío, busca en section2
    if (!texto) {
        const textoProcesado = document.querySelector('.resultado-texto');
        if (textoProcesado) {
            texto = textoProcesado.value;
        }
    }

    const textoDesencriptado = desencriptar(texto);
    mostrarResultado(textoDesencriptado);
});
