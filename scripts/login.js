// scripts/login.js

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// Configuración real de Supabase
const supabase = createClient(
  "https://xoaeinwfcawcwqtnchun.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvYWVpbndmY2F3Y3dxdG5jaHVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxNDExNzIsImV4cCI6MjA2NDcxNzE3Mn0.fFa8_8nu1AWzjmzbDImh0n-NGEc6ydw9H96HNEHcwSw"
);

document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert("Error al iniciar sesión: " + error.message);
  } else {
    alert("Inicio de sesión correcto");
    window.location.href = "/control-panel";
  }
});

