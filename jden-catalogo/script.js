const grid = document.getElementById("productGrid");

function mostrarProductos(lista) {
    grid.innerHTML = "";

    lista.forEach(p => {
        const card = document.createElement("div");
        card.className = `card ${p.tipo.toLowerCase()}`;

        card.innerHTML = `
            <img src="img/${p.imagen}" alt="${p.producto}">
            <h3>${p.producto}</h3>
            <p class="tag">${p.tipo}</p>
            <p>${p.marca}</p>
            <span>₡${p.precio.toLocaleString("es-CR")}</span>
        `;

        grid.appendChild(card);
    });
}

function filterProducts(tipo) {
    setActiveButton(tipo);

    if (tipo === "all") {
        mostrarProductos(productos);
        return;
    }

    const filtrados = productos.filter(p =>
        p.tipo.toLowerCase() === tipo.toLowerCase()
    );

    mostrarProductos(filtrados);
}

function setActiveButton(tipo) {
    const buttons = document.querySelectorAll(".filter-card button");

    buttons.forEach(btn => {
        btn.classList.remove("active");

        const texto = btn.innerText.toLowerCase();

        if (
            texto.includes(tipo) ||
            (tipo === "all" && texto.includes("vista completa"))
        ) {
            btn.classList.add("active");
        }
    });
}

mostrarProductos(productos);
setActiveButton("all");