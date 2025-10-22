const blushes = [
    {
        nombre: "Blush Patrick Ta",
        imagen: "patrick ta.jpg",
        descripcion: "Fórmula sedosa y pigmentación intensa para un acabado natural.",
        precio: "$15.99"
    },
    {
        nombre: "Blush Elf",
        imagen: "elff.jpg",
        descripcion: "Toque coral mate ideal para un look fresco y diario.",
        precio: "$12.49"
    },
    {
        nombre: "Blush Rhode Teddy",
        imagen: "rhode.jpg",
        descripcion: "Blush mineral durazno que aporta luminosidad natural.",
        precio: "$18.99"
    },
    {
        nombre: "Blush Rare Beauty",
        imagen: "rare beuty.jpg",
        descripcion: "Alta pigmentación con brillo sutil para un look radiante.",
        precio: "$22.99"
    }
];

const contenedor = document.getElementById('contenedor');

blushes.forEach(producto => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';

    tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p class="precio">${producto.precio}</p>
        <button class="boton-comprar">Comprar</button>
    `;

    contenedor.appendChild(tarjeta);
});


