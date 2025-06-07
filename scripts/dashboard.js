const SUPABASE_URL = "https://xoaeinwfcawcwqtnchun.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZ" +
  "SIsInJlZiI6InhvYWVpbndmY2F3Y3dxdG5jaHVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxNDExNzIsImV4cCI6MjA2NDcxNzE3Mn0.fFa8_8nu1AWzjmzbDImh0n-NGEc6ydw9H96HNEHcwSw";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function loadMetrics() {
  const { data: users } = await supabase.from('users').select('*');
  const metricsDiv = document.getElementById('metrics');
  metricsDiv.innerHTML = `<p>Usuarios registrados: ${users ? users.length : 0}</p>`;
}

loadMetrics();

const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', async () => {
  await supabase.auth.signOut();
  window.location.href = 'index.html';
});
