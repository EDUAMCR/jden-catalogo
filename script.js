const grid = document.getElementById("productGrid");
const filterSelect = document.getElementById("filterSelect");
const themeToggle = document.getElementById("themeToggle");

function mostrarProductos(lista) {
    grid.innerHTML = "";

    lista.forEach(p => {
        const card = document.createElement("div");
        card.className = `card ${p.tipo.toLowerCase()}`;

        card.innerHTML = `
            <div class="image-area">
                <div class="image-bg"></div>
                <img src="img/${p.imagen}" alt="${p.producto}">
            </div>

            <div class="card-content">
                <h3>${p.producto}</h3>
                <p class="tag">${p.tipo}</p>
                <p class="brand-name">${p.marca}</p>
                <span>₡${p.precio.toLocaleString("es-CR")}</span>
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

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");

    themeToggle.textContent = document.body.classList.contains("dark-mode")
        ? "☀️"
        : "🌙";
});

mostrarProductos(productos);