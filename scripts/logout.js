function logoutUser() {
  localStorage.removeItem("token");
  window.location.href = "/login";
}

document.getElementById("logout-btn")?.addEventListener("click", logoutUser);
