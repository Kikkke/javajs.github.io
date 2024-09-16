document.getElementById('edadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    document.getElementById('resultado').textContent = `Tienes ${edad} años.`;
});
