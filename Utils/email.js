function enviarFormulario() {
  const botonEnviar = document.getElementById('button-form');
  const textoOriginal = botonEnviar.innerText;
  botonEnviar.innerText = 'Enviando...';

  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  const correo = document.getElementById('correo').value;
  const tema = document.getElementById('tema').value;
  const mensaje = document.getElementById('mensaje').value;

  // Validar si los campos requeridos están vacíos
  if (!nombre || !telefono || !correo || !tema || !mensaje) {
    alert('Por favor, complete todos los campos antes de enviar el correo.');
    botonEnviar.innerText = textoOriginal;
    return;
  }

  const data = {
    emailjs_name: nombre,
    emailjs_phone: telefono,
    emailjs_email: correo,
    emailjs_topic: tema,
    emailjs_message: mensaje,
  };

  emailjs
    .send('service_z0vgbsl', 'template_myz7thc', data)
    .then(
      function (response) {
        console.log('Correo enviado con éxito:', response);
        alert('Correo enviado con éxito');
        document.getElementById('formulario-contacto').reset();
      },
      function (error) {
        console.log('Error al enviar el correo:', error);
        alert('Hubo un error al enviar el correo');
      }
    )
    .finally(function () {
      botonEnviar.innerText = textoOriginal;
    });
}
