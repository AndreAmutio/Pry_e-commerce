const paginas = [
    {
        titulo: "Inicio",
        direccion: "index.html"
    },
    {
        titulo: "Colección",
        direccion: "index.html#productos"
    },
    {
        titulo: "Alquimia",
        direccion: "secciones/alquimia.html"
    },
    {
        titulo: "Astral",
        direccion: "secciones/astral.html"
    },
    {
        titulo: "Nosotros",
        direccion: "secciones/nosotros.html"
    }
];

const navbarLinks = document.getElementById("navbar-links");

if (navbarLinks) {
    const estamosEnSecciones = window.location.pathname.includes("/secciones/");

    paginas.forEach(function (pagina) {
        const enlace = document.createElement("a");

        enlace.textContent = pagina.titulo;

        if (estamosEnSecciones) {
            enlace.href = "../" + pagina.direccion;
        } else {
            enlace.href = "./" + pagina.direccion;
        }

        navbarLinks.appendChild(enlace);
    });
}
