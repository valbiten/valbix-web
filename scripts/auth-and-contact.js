import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
  "https://TU_PROYECTO.supabase.co", // Sustituye esto por el real
  "PUBLIC_ANON_KEY"                  // Sustituye esto por tu clave real
);

// Login
document.getElementById("login-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    alert("Error al iniciar sesión: " + error.message);
  } else {
    alert("Inicio de sesión correcto");
    window.location.href = "/control-panel";
  }
});

// Contacto
document.getElementById("contact-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = e.target.nombre.value.trim();
  const email = e.target.email.value.trim();
  const mensaje = e.target.mensaje.value.trim();

  if (!nombre || !email || !mensaje) {
    alert("Por favor, rellena todos los campos.");
    return;
  }

  try {
    const response = await fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: nombre, email, message: mensaje }),
    });

    const result = await response.text();

    if (response.ok) {
      alert("Mensaje enviado correctamente.");
      e.target.reset();
    } else {
      alert("Hubo un problema al enviar tu mensaje.");
    }
  } catch (error) {
    console.error("Error al enviar:", error);
    alert("No se pudo enviar el mensaje. Inténtalo más tarde.");
  }
});
