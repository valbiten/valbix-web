document.addEventListener('DOMContentLoaded', async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = '/login';
    return;
  }

  const response = await fetch('/api/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  if (!data.success) {
    window.location.href = '/login';
  }

  document.getElementById('welcomeMessage').innerText = `Hola, ${data.user.name}`;
});
