import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
  "https://<TU_PROYECTO>.supabase.co",
  "PUBLIC_ANON_KEY"
);

document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    alert("Error al iniciar sesión");
  } else {
    alert("Inicio de sesión correcto");
    window.location.href = "/control-panel";
  }
});
