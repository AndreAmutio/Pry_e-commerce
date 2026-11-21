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

function actualizarContador() {
    const carrito = obtenerCarrito();
    const totalUnidades = carrito.reduce(function (total, producto) {
        return total + producto.cantidad;
    }, 0);

    const contador = document.getElementById("contador-carrito");

    if (contador) {
        contador.textContent = totalUnidades;
    }
}
function mostrarCarrito() {
    const carrito = obtenerCarrito();

    listaCarrito.innerHTML = "";

    if (carrito.length === 0) {
        listaCarrito.innerHTML = "<p>Tu carrito está vacío.</p>";
        totalCarrito.textContent = formatearPrecio(0);
        actualizarContador();
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
                Eliminar una unidad
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

            if (carritoActual[indice].cantidad > 1) {
                carritoActual[indice].cantidad--;
            } else {
                carritoActual.splice(indice, 1);
            }

            guardarCarrito(carritoActual);
            mostrarCarrito();
        });
    });

    actualizarContador();
}

if (botonVaciar) {
    botonVaciar.addEventListener("click", function () {
        localStorage.removeItem("carrito");
        mostrarCarrito();
    });
}
mostrarCarrito();
