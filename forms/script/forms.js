const currentYear = document.querySelector('.currentyear');
const lastModified = document.querySelector('#lastmodified');

const today = new Date();

currentYear.textContent = today.getFullYear();

lastModified.textContent = `Last Modified: ${document.lastModified}`;


// Custom Product Data Array
const products = [
  {
    id: "marv-snk",
    name: "marvins sneakers",
    averagerating: 4.8
  },
  {
    id: "marv-snc",
    name: "marvin snacks",
    averagerating: 4.9
  },
  {
    id: "marv-sck",
    name: "marvin socks",
    averagerating: 4.6
  },
  {
    id: "marv-pot",
    name: "marvin potatoes",
    averagerating: 4.2
  }
];

// Execute when DOM elements are ready
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product-name");

    // Loop through custom array to dynamically create option tags
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; // Assigns the unique code string as form data
        option.textContent = product.name; // Visual label shown to customer
        productSelect.appendChild(option);
    });
});