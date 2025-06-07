document.addEventListener("DOMContentLoaded", () => {
  console.log("Panel de administraci\u00f3n cargado.");

  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("authToken");
      window.location.href = "/";
    });
  }

  // Ejemplo de carga din\u00e1mica
  const statsEl = document.getElementById("stats");
  if (statsEl) {
    statsEl.innerHTML = "<p>Cargando estad\u00edsticas...</p>";
    setTimeout(() => {
      statsEl.innerHTML = "<p>Visitas hoy: 203</p><p>Valoraciones: 47</p>";
    }, 1000);
  }
});
