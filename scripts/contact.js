document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();

    if (!nombre || !email || !mensaje) {
      alert("Por favor, rellena todos los campos.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, email, mensaje }),
      });

      const result = await response.json();

      if (result.ok || result.success) {
        alert("Mensaje enviado correctamente.");
        form.reset();
      } else {
        alert("Hubo un problema al enviar tu mensaje.");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("No se pudo enviar el mensaje. Inténtalo más tarde.");
    }
  });
});

