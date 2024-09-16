function calcularHorasExtras(horas, salarioHora) {
    let salarioTotal = 0;
    if (horas > 40) {
        let horasExtras = horas - 40;
        if (horasExtras > 8) {
            salarioTotal = 40 * salarioHora + 8 * (salarioHora * 2) + (horasExtras - 8) * (salarioHora * 3);
        } else {
            salarioTotal = 40 * salarioHora + horasExtras * (salarioHora * 2);
        }
    } else {
        salarioTotal = horas * salarioHora;
    }
    return salarioTotal;
}

document.getElementById('horasForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const horasTrabajadas = parseFloat(document.getElementById('horasTrabajadas').value);
    const salarioPorHora = parseFloat(document.getElementById('salarioPorHora').value);
    const salarioTotal = calcularHorasExtras(horasTrabajadas, salarioPorHora);
    document.getElementById('resultado').textContent = `Salario total con horas extras: $${salarioTotal.toFixed(2)}`;
});
