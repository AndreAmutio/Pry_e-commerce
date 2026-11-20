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
        direccion: "alquimia.html"
    },
    {
        titulo: "Astral",
        direccion: "astral.html"
    },
    {
        titulo: "Nosotros",
        direccion: "nosotros.html"
    }
];

const navbarLinks = document.getElementById("navbar-links");

if (navbarLinks) {
    paginas.forEach(function (pagina) {
        const enlace = document.createElement("a");

        enlace.textContent = pagina.titulo;
        enlace.href = "./" + pagina.direccion;

        navbarLinks.appendChild(enlace);
    });
}
