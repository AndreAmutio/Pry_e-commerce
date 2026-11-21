const botonCerrarSesion = document.getElementById("btn-cerrar-sesion");

// Cuando el usuario cierra sesión, se borran los datos que se guarda al ingresar.
// El btn aparece solamente cuando hay una sesión iniciada.

if (botonCerrarSesion) {
    if (sessionStorage.getItem("sesionIniciada") === "true") {
        botonCerrarSesion.style.display = "inline-flex";
    } else {
        botonCerrarSesion.style.display = "none";
    }
    botonCerrarSesion.addEventListener("click", function (event) {
        event.preventDefault();

        // Elimina datos de la sesión
        sessionStorage.removeItem("sesionIniciada");
        sessionStorage.removeItem("usuarioLogueado");

        window.location.href = "./login.html";
    });
}
