document.getElementById('scriptForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const html = document.getElementById('htmlInput').value;
    const limpio = html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '');
    document.getElementById('resultado').textContent = `HTML Limpio: ${limpio}`;
});
