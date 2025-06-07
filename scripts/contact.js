document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nombre = form.nombre.value;
    const email = form.email.value;
    const mensaje = form.mensaje.value;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ nombre, email, mensaje })
    });

    const data = await res.json();
    if (data.ok) {
      alert("Mensaje enviado correctamente");
      form.reset();
    } else {
      alert("Hubo un error al enviar el mensaje.");
    }
  });
});
