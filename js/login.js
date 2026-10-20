const formularioLogin = document.getElementById("form-login");

formularioLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    sessionStorage.setItem("sesionIniciada", "true");

    window.location.href = "./index.html";
});