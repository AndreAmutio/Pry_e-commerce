const formularioLogin = document.getElementById("form-login");

if (formularioLogin) {
    formularioLogin.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (!email || !password) {
            alert("Por favor, completá todos los campos.");
            return;
        }

        // me guarda datos de sesión del usuario
        const usuario = {
            email: email
        };

        sessionStorage.setItem("usuarioLogueado", JSON.stringify(usuario));
        sessionStorage.setItem("sesionIniciada", "true");

        window.location.href = "./index.html";
    });
}
