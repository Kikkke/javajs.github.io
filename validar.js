document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const errores = [];
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const comentarios = document.getElementById('comentarios').value.trim();
    const aceptoCondiciones = document.getElementById('aceptoCondiciones').checked;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    if (!nombre) errores.push('El nombre es obligatorio.');
    if (!emailRegex.test(email)) errores.push('El email no es válido.');
    if (comentarios.length > 50) errores.push('Los comentarios no deben exceder de 50 caracteres.');
    if (!passwordRegex.test(password)) errores.push('El password debe tener al menos 6 caracteres, incluyendo una mayúscula, una minúscula y un número.');
    if (!aceptoCondiciones) errores.push('Debe aceptar las condiciones del servicio.');

    const erroresElemento = document.getElementById('errores');
    if (errores.length > 0) {
        erroresElemento.textContent = errores.join(', ');
    } else {
        erroresElemento.textContent = 'Formulario enviado con éxito.';
    }
});
