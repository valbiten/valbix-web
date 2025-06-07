
const SUPABASE_URL = "https://xoaeinwfcawcwqtnchun.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvYWVpbndmY2F3Y3dxdG5jaHVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxNDExNzIsImV4cCI6MjA2NDcxNzE3Mn0.fFa8_8nu1AWzjmzbDImh0n-NGEc6ydw9H96HNEHcwSw";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const nombre = this.nombre.value.trim();
  const email = this.email.value.trim();
  const mensaje = this.mensaje.value.trim();

  if (!nombre || !email || !mensaje) {
    alert("Por favor, rellena todos los campos.");
    return;
  }

  const { data, error } = await supabaseClient
    .from("contactos")
    .insert([{ nombre, email, mensaje }]);

  if (error) {
    console.error("Error al enviar el formulario:", error.message);
    alert("Hubo un error al enviar tu mensaje. Inténtalo más tarde.");
    return;
  }

  // Envía correo mediante la API del servidor
  try {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, email, mensaje }),
    });
    alert("Mensaje enviado con éxito. ¡Gracias por contactarnos!");
    this.reset();
  } catch (err) {
    console.error(err);
    alert("Error al enviar correo. Inténtalo más tarde.");
  }
});
