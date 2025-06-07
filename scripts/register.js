const SUPABASE_URL = "https://xoaeinwfcawcwqtnchun.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZ" +
  "SIsInJlZiI6InhvYWVpbndmY2F3Y3dxdG5jaHVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxNDExNzIsImV4cCI6MjA2NDcxNzE3Mn0.fFa8_8nu1AWzjmzbDImh0n-NGEc6ydw9H96HNEHcwSw";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const form = document.getElementById('registerForm');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = form.email.value.trim();
  const password = form.password.value;
  const { error } = await supabase.auth.signUp({ email, password });
  if (error) {
    alert('Error: ' + error.message);
  } else {
    alert('Revisa tu email para confirmar el registro.');
    window.location.href = 'index.html';
  }
});
