const botonCerrarSesion = document.getElementById("btn-cerrar-sesion");

if (sessionStorage.getItem("sesionIniciada") === "true") {
    botonCerrarSesion.style.display = "inline-flex";
}

botonCerrarSesion.addEventListener("click", function (event) {
    event.preventDefault();

    sessionStorage.removeItem("sesionIniciada");
    window.location.href = "./login.html";
});

