document.getElementById('calificacionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const parciales = [
        parseFloat(document.getElementById('parcial1').value),
        parseFloat(document.getElementById('parcial2').value),
        parseFloat(document.getElementById('parcial3').value)
    ];
    const promedioParciales = parciales.reduce((acc, parcial) => acc + parcial, 0) / 3;
    const examenFinal = parseFloat(document.getElementById('examenFinal').value);
    const trabajoFinal = parseFloat(document.getElementById('trabajoFinal').value);

    const calificacionFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);
    document.getElementById('resultado').textContent = `Calificación Final: ${calificacionFinal.toFixed(2)}`;
});
