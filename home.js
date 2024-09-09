document.getElementById("accept-btn").addEventListener("click", function() {
    document.getElementById("license-modal").style.display = "none";
  });
  
  document.getElementById("decline-btn").addEventListener("click", function() {
    window.location.href = "error.html";  // Redireciona para a página de erro
  });
  