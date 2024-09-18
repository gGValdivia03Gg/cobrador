// script.js

// Función para cargar los productos desde el archivo JSON
async function loadProducts() {
    try {
        const response = await fetch('products.json'); // Ruta relativa al archivo JSON
        const products = await response.json();
        displayProducts(products); // Llama a la función para mostrar los productos en el HTML
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
}

// Función para mostrar los productos en el HTML
function displayProducts(products) {
    const productList = document.getElementById('product-list'); // Obtén el contenedor de la lista
    productList.innerHTML = ''; // Limpia la lista antes de agregar nuevos elementos

    products.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.product} - $${item.price}`;
        productList.appendChild(listItem);
    });
}

// Llama a la función para cargar los productos cuando la página esté completamente cargada
document.addEventListener('DOMContentLoaded', loadProducts);
