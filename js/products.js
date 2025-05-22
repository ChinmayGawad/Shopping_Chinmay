// products.js
// Array of product objects for dynamic generation
const products = [
  {
    id: 1,
    name: "Dell Inspiron 15",
    price: 58990,
    image: "assets/laptop.jpg",
    description: "Powerful laptop for work and play. 11th Gen Intel Core i5, 8GB RAM, 512GB SSD, 15.6\" FHD Display.",
    badges: ["8GB RAM", "512GB SSD", "Intel i5"],
    category: "Laptops"
  },
  {
    id: 4,
    name: "Apple MacBook Air M2",
    price: 104900,
    image: "assets/M2.jpg",
    description: "Apple M2 chip, 8GB RAM, 256GB SSD, 13.6\" Liquid Retina Display.",
    badges: ["8GB RAM", "256GB SSD", "Apple M2"],
    category: "Laptops"
  },
  {
    id: 5,
    name: "Lenovo ThinkPad E14",
    price: 74990,
    image: "assets/thinkpad.jpg",
    description: "Intel Core i7, 16GB RAM, 512GB SSD, 14\" FHD Display.",
    badges: ["16GB RAM", "512GB SSD", "Intel i7"],
    category: "Laptops"
  },
  {
    id: 2,
    name: "HP Pavilion Desktop",
    price: 42990,
    image: "assets/hp desktop.png",
    description: "Reliable desktop for home and office. Intel Core i3, 8GB RAM, 1TB HDD.",
    badges: ["8GB RAM", "1TB HDD", "Intel i3"],
    category: "Computers"
  },
  {
    id: 6,
    name: "Dell OptiPlex 3080",
    price: 52990,
    image: "assets/optiplex.png",
    description: "Compact business desktop. Intel Core i5, 8GB RAM, 256GB SSD.",
    badges: ["8GB RAM", "256GB SSD", "Intel i5"],
    category: "Computers"
  },
  {
    id: 7,
    name: "Apple iMac 24-inch",
    price: 134900,
    image: "assets/mac.webp",
    description: "Apple M1 chip, 8GB RAM, 256GB SSD, 4.5K Retina Display.",
    badges: ["8GB RAM", "256GB SSD", "Apple M1"],
    category: "Computers"
  },
  {
    id: 3,
    name: "Samsung Galaxy S21",
    price: 54999,
    image: "assets/oneplus.png",
    description: "Flagship mobile with stunning display and camera. 8GB RAM, 128GB Storage.",
    badges: ["8GB RAM", "128GB Storage", "Android"],
    category: "Mobiles"
  },
  {
    id: 8,
    name: "Apple iPhone 14",
    price: 69999,
    image: "assets/iphone14.jpg",
    description: "6.1-inch Super Retina XDR display, A15 Bionic chip, 128GB Storage.",
    badges: ["128GB Storage", "A15 Bionic", "iOS"],
    category: "Mobiles"
  },
  {
    id: 9,
    name: "OnePlus 11 5G",
    price: 56999,
    image: "assets/oneplus.png",
    description: "Snapdragon 8 Gen 2, 16GB RAM, 256GB Storage, 120Hz AMOLED.",
    badges: ["16GB RAM", "256GB Storage", "Android"],
    category: "Mobiles"
  }
];

// Function to render products on the shop page
// Group by category

document.addEventListener("DOMContentLoaded", function () {
  const productList = document.querySelector(".product-listing");
  if (productList) {
    // Group products by category
    const categories = {};
    products.forEach(product => {
      if (!categories[product.category]) categories[product.category] = [];
      categories[product.category].push(product);
    });
    productList.innerHTML = Object.keys(categories)
      .map(
        (cat) => `
          <div class="w-full">
            <h2 class="text-2xl font-bold mb-4 mt-8">${cat}</h2>
            <div class="flex flex-wrap gap-4">
              ${categories[cat]
                .map(
                  (product) => `
                    <a href="product.html?id=${product.id}" class="block">
                      <div class="product-card">
                        <img src="${product.image}" alt="${product.name}">
                        <div>
                          <h2>${product.name}</h2>
                          <p>₹${product.price.toFixed(2)}</p>
                          <button class="add-to-cart">Add to Cart</button>
                        </div>
                      </div>
                    </a>
                  `
                )
                .join("")}
            </div>
          </div>
        `
      )
      .join("");
  }
});

// Function to render product details on the product page
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("product.html")) {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get("id"));
    const product = products.find((p) => p.id === productId) || products[0];
    const productImg = document.querySelector(".product-details img");
    const productName = document.querySelector(".product-info h1");
    const productDesc = document.querySelector(".product-info p");
    const productBadges = document.querySelector(".product-info .mb-4");
    const productPrice = document.querySelector(".product-info .text-2xl");
    if (productImg) productImg.src = product.image;
    if (productName) productName.textContent = product.name;
    if (productDesc) productDesc.textContent = product.description;
    if (productBadges) {
      productBadges.innerHTML = product.badges
        .map(
          (badge, i) =>
            `<span class="badge badge-${
              i === 0 ? "primary" : i === 1 ? "secondary" : "accent"
            } mr-2">${badge}</span>`
        )
        .join("");
    }
    if (productPrice) productPrice.textContent = `₹${product.price.toFixed(2)}`;
  }
});
