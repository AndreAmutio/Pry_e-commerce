const contenedorProductos = document.getElementById("productos-grid");

if (contenedorProductos) {
    fetch("../data/productos.json")
        .then(function (respuesta) {
            if (!respuesta.ok) {
                throw new Error("No se pudieron cargar los productos.");
            }
            return respuesta.json();
        })

        .then(function (productos) {

            // Detectarr categoría de la pag actual
            const titulo = document.querySelector("h1");

            const categoria = titulo
                ? titulo.textContent.trim()
                : null;

            // Filtrar productos. Si estoy en una pag de alguna categoria
            const productosFiltrados = categoria === "Alquimia" || categoria === "Astral"
                ? productos.filter(function (producto) {
                    return producto.categoria === categoria;
                })
                : productos;

            // Crear las tarjetas
            productosFiltrados.forEach(function (producto) {

                const tarjeta = document.createElement("article");
                tarjeta.classList.add("producto-card");

                tarjeta.innerHTML = `
                    <div class="producto-imagen">
                        ${
                         producto.imagen
                             ? `<img src="${producto.imagen}" alt="${producto.nombre}">`
                            : ""
                        }
                    </div>

                    <div class="producto-info">
                        <h3>${producto.nombre}</h3>
                        <p class="producto-descripcion">
                            ${producto.descripcion}
                        </p>
                        <p class="producto-precio">
                            $${producto.precio.toLocaleString("es-AR")}
                        </p>

                        <div class="producto-cantidad">
                            <button type="button" class="btn-restar">−</button>
                            <span class="cantidad">1</span>
                            <button type="button" class="btn-sumar">+</button>
                        </div>

                        <button type="button" class="btn-agregar-carrito">
                            Agregar al carrito
                        </button>
                    </div>
                `;
                contenedorProductos.appendChild(tarjeta);

                // Controles de cantidad
                const botonRestar = tarjeta.querySelector(".btn-restar");
                const botonSumar = tarjeta.querySelector(".btn-sumar");
                const textoCantidad = tarjeta.querySelector(".cantidad");

                let cantidad = 1;

                botonRestar.addEventListener("click", function () {

                    if (cantidad > 1) {
                        cantidad--;
                        textoCantidad.textContent = cantidad;
                    }
                });
                botonSumar.addEventListener("click", function () {
                    cantidad++;
                    textoCantidad.textContent = cantidad;
                });
            });
        })

        .catch(function (error) {
            console.error("Error:", error);
            contenedorProductos.textContent =
                "No se pudieron cargar los productos.";
        });
}
