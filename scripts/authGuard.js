// Protecci\u00f3n del panel para evitar acceso sin token
(function () {
  const token = localStorage.getItem("authToken");
  if (!token) {
    window.location.href = "/";
  }
})();
