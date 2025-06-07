const SUPABASE_URL = "https://xoaeinwfcawcwqtnchun.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZ" +
  "SIsInJlZiI6InhvYWVpbndmY2F3Y3dxdG5jaHVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxNDExNzIsImV4cCI6MjA2NDcxNzE3Mn0.fFa8_8nu1AWzjmzbDImh0n-NGEc6ydw9H96HNEHcwSw";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Login
const form = document.getElementById('loginForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = form.email.value.trim();
  const password = form.password.value;
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    alert('Error: ' + error.message);
  } else {
    window.location.href = 'dashboard.html';
  }
});

// Reset password
const resetLink = document.getElementById('resetLink');
resetLink.addEventListener('click', async (e) => {
  e.preventDefault();
  const email = prompt('Introduce tu email');
  if (!email) return;
  const { error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) alert('Error: ' + error.message);
  else alert('Se ha enviado un enlace de recuperación a tu email.');
});
