function palabrasANumeros(arr) {
    const diccionario = {
        "cero": 0, "uno": 1, "dos": 2, "tres": 3, "cuatro": 4,
        "cinco": 5, "seis": 6, "siete": 7, "ocho": 8, "nueve": 9
    };
    return arr.map(palabra => diccionario[palabra.toLowerCase()] ?? -1);
}

document.getElementById('palabrasForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const palabras = document.getElementById('palabras').value.split(',').map(p => p.trim());
    const resultado = palabrasANumeros(palabras);
    document.getElementById('resultado').textContent = `Resultado: [${resultado.join(', ')}]`;
});
