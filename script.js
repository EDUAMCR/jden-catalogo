const grid = document.getElementById("productGrid");
const filterSelect = document.getElementById("filterSelect");


function mostrarProductos(lista) {
    grid.innerHTML = "";

    lista.forEach(p => {
        const card = document.createElement("div");
        card.className = `card ${p.tipo.toLowerCase()}`;

        card.innerHTML = `
    <h3 class="card-title">${p.producto}</h3>

    <div class="divider"></div>

    <div class="card-body">
        <div class="card-image">
            <img src="img/${p.imagen}" alt="${p.producto}">
        </div>

        <div class="card-details">
            <div class="chips">
                <span class="chip">${p.tipo}</span>
                <span class="chip">${p.marca}</span>
                <span class="chip">${p.volumen}</span>
            </div>

            <div class="divider small"></div>

            <div class="price-wrapper">
                <span class="price">₡${p.precio.toLocaleString("es-CR")}</span>
            </div>
        </div>
    </div>
`;

        grid.appendChild(card);
    });
}

function filterProducts(tipo) {
    if (filterSelect) {
        filterSelect.value = tipo;
    }

    if (tipo === "all") {
        mostrarProductos(productos);
        return;
    }

    const filtrados = productos.filter(p =>
        p.tipo.toLowerCase() === tipo.toLowerCase()
    );

    mostrarProductos(filtrados);
}

filterSelect.addEventListener("change", function () {
    filterProducts(this.value);
});


mostrarProductos(productos);