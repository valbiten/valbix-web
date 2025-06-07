const SUPABASE_URL = "https://xoaeinwfcawcwqtnchun.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZ" +
  "SIsInJlZiI6InhvYWVpbndmY2F3Y3dxdG5jaHVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxNDExNzIsImV4cCI6MjA2NDcxNzE3Mn0.fFa8_8nu1AWzjmzbDImh0n-NGEc6ydw9H96HNEHcwSw";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const form = document.getElementById('loginForm');
const errorMsg = document.createElement('p');
errorMsg.id = 'errorMsg';
errorMsg.style.color = 'red';
form.insertAdjacentElement('afterend', errorMsg);

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = form.email.value.trim();
  const password = form.password.value;

  const { data: user, error } = await supabase
    .from('usuarios')
    .select('email, password, rol')
    .eq('email', email)
    .single();

  if (error || !user || user.password !== password) {
    errorMsg.textContent = 'Email o contraseña incorrectos';
    return;
  }

  localStorage.setItem('email', user.email);
  localStorage.setItem('rol', user.rol);

  if (user.rol === 'admin') {
    window.location.href = '/control-panel';
  } else if (user.rol === 'pro' || user.rol === 'free') {
    window.location.href = '/dashboard';
  } else {
    window.location.href = '/dashboard';
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
