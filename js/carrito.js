const contadorCarrito = document.getElementById("contador-carrito");
const botonesAgregar = document.querySelectorAll(".btn-agregar-carrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function actualizarContadorCarrito() {
    const totalUnidades = carrito.reduce(function (total, producto) {
        return total + producto.cantidad;
    }, 0);

    if (contadorCarrito) {
        contadorCarrito.textContent = totalUnidades;
    }
}

botonesAgregar.forEach(function (boton) {
    boton.addEventListener("click", function () {
        const tarjeta = boton.closest(".producto-card");

        const nombre = tarjeta.querySelector("h3").textContent;
        const precioTexto = tarjeta.querySelector(".producto-precio").textContent;
        const precio = Number(
            precioTexto.replace("$", "").replace(/\./g, "").trim()
        );

        const cantidad = Number(
            tarjeta.querySelector(".cantidad").textContent
        );

        const productoExistente = carrito.find(function (producto) {
            return producto.nombre === nombre;
        });

        if (productoExistente) {
            productoExistente.cantidad += cantidad;
        } else {
            carrito.push({
                nombre: nombre,
                precio: precio,
                cantidad: cantidad
            });
        }

        localStorage.setItem("carrito", JSON.stringify(carrito));

        actualizarContadorCarrito();

        alert(nombre + " se agregó al carrito.");
    });
});

actualizarContadorCarrito();
