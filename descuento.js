document.getElementById('compraForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const totalCompra = parseFloat(document.getElementById('totalCompra').value);
    const descuento = totalCompra * 0.15;
    const totalPagar = totalCompra - descuento;
    document.getElementById('resultado').textContent = `Total a Pagar: $${totalPagar.toFixed(2)}`;
});
