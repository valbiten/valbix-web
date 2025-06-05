
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  alert('Formulario enviado. Nos pondremos en contacto contigo.');
  this.reset();
});
