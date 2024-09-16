function calcularUtilidad(salario, antiguedad) {
    let porcentajeUtilidad;
    if (antiguedad < 1) {
        porcentajeUtilidad = 0.05;
    } else if (antiguedad < 2) {
        porcentajeUtilidad = 0.07;
    } else if (antiguedad < 5) {
        porcentajeUtilidad = 0.10;
    } else if (antiguedad < 10) {
        porcentajeUtilidad = 0.15;
    } else {
        porcentajeUtilidad = 0.20;
    }
    return salario * porcentajeUtilidad;
}

document.getElementById('utilidadesForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const salario = parseFloat(document.getElementById('salario').value);
    const antiguedad = parseInt(document.getElementById('antiguedad').value);
    const utilidad = calcularUtilidad(salario, antiguedad);
    document.getElementById('resultado').textContent = `Utilidad a recibir: $${utilidad.toFixed(2)}`;
});
