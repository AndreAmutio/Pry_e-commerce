const productos = [
    {
        nombre: "Vela Lunar",
        imagen: "imagen/vela-lunar-webp.webp",
        descripcion: "Vela aromática de lavanda y madera.",
        precio: 10500
    },
    {
        nombre: "Taza Arcana",
        imagen: "imagen/taza.webp",
        descripcion: "Cerámica artesanal inspirada en la naturaleza.",
        precio: 12800
    },
    {
        nombre: "Sahumerios Místicos",
        imagen: "",
        descripcion: "Aromas para acompañar tus momentos de calma.",
        precio: 7500
    },
    {
        nombre: "Cristal Lunar",
        imagen: "",
        descripcion: "Una pieza inspirada en la energía de la luna.",
        precio: 9200
    },
    {
        nombre: "Cuenco de Alquimia",
        imagen: "",
        descripcion: "Un detalle artesanal para tu espacio personal.",
        precio: 14500
    },
    {
        nombre: "Amuleto Astral",
        imagen: "",
        descripcion: "Un accesorio inspirado en los astros y las estrellas.",
        precio: 8900
    },
    {
        nombre: "Piedras Energéticas",
        imagen: "",
        descripcion: "Una selección de amatista, cuarzo rosa y cuarzo transparente, elegida por sus colores y belleza natural. Un detalle especial para decorar tu espacio o sumar a tu colección.",
        precio: 9800
    },
    {
        nombre: "Oráculo de la Luna",
        imagen: "",
        descripcion: "Un mazo de cartas inspirado en las fases lunares, los ciclos de la naturaleza y la simbología astral, pensado para rituales personales y reflexión.",
        precio: 14200
    }
];

const contenedorProductos = document.getElementById("productos-grid");

if (contenedorProductos) {
    productos.forEach(function (producto) {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("producto-card");

        tarjeta.innerHTML = `
            <div class="producto-imagen">
                ${
                  producto.imagen
                    ? `<img src="${producto.imagen}" alt="${producto.nombre}">`: ""
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
}
