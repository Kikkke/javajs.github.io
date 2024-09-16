document.getElementById('inversionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const capital = parseFloat(document.getElementById('capital').value);
    const ganancia = capital * 0.02;
    const total = capital + ganancia;
    document.getElementById('resultado').textContent = `Ganancia: $${ganancia.toFixed(2)}, Total después de un mes: $${total.toFixed(2)}`;
});
