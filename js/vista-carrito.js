const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total-carrito");
const botonVaciar = document.getElementById("vaciar-carrito");

function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function formatearPrecio(precio) {
    return precio.toLocaleString("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0
    });
}

function mostrarCarrito() {
    const carrito = obtenerCarrito();

    listaCarrito.innerHTML = "";

    if (carrito.length === 0) {
        listaCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";
        totalCarrito.textContent = formatearPrecio(0);
        return;
    }

    let total = 0;

    carrito.forEach(function (producto, indice) {
        const subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        const articulo = document.createElement("article");
        articulo.classList.add("carrito-producto");

        articulo.innerHTML = `
            <div>
                <h2>${producto.nombre}</h2>
                <p>Precio unitario: ${formatearPrecio(producto.precio)}</p>
                <p>Cantidad: ${producto.cantidad}</p>
                <p>Subtotal: ${formatearPrecio(subtotal)}</p>
            </div>

            <button type="button" class="btn-eliminar" data-indice="${indice}">
                Eliminar
            </button>
        `;

        listaCarrito.appendChild(articulo);
    });

    totalCarrito.textContent = formatearPrecio(total);

    const botonesEliminar = listaCarrito.querySelectorAll(".btn-eliminar");

    botonesEliminar.forEach(function (boton) {
        boton.addEventListener("click", function () {
            const indice = Number(boton.dataset.indice);
            const carritoActual = obtenerCarrito();

            carritoActual.splice(indice, 1);

            guardarCarrito(carritoActual);
            mostrarCarrito();
        });
    });
}

botonVaciar.addEventListener("click", function () {
    localStorage.removeItem("carrito");
    mostrarCarrito();
});

mostrarCarrito();
