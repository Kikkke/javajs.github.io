document.getElementById('comisionesForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const sueldoBase = parseFloat(document.getElementById('sueldoBase').value);
    const ventas = [
        parseFloat(document.getElementById('venta1').value),
        parseFloat(document.getElementById('venta2').value),
        parseFloat(document.getElementById('venta3').value)
    ];
    const comision = ventas.reduce((acc, venta) => acc + venta * 0.10, 0);
    const total = sueldoBase + comision;
    document.getElementById('resultado').textContent = `Comisión: $${comision.toFixed(2)}, Total: $${total.toFixed(2)}`;
});
