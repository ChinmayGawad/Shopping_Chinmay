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
    id: 10,
    name: "Asus ZenBook 14",
    price: 65990,
    image: "assets/zenbook.jpg",
    description: "Ultra-slim laptop with Intel i5, 16GB RAM, 512GB SSD, 14\" FHD Display.",
    badges: ["16GB RAM", "512GB SSD", "Intel i5"],
    category: "Laptops"
  },
  {
    id: 11,
    name: "Acer Aspire 7",
    price: 57990,
    image: "assets/aspire7.jpg",
    description: "Gaming laptop with Ryzen 5, 8GB RAM, 512GB SSD, GTX 1650.",
    badges: ["8GB RAM", "GTX 1650", "Ryzen 5"],
    category: "Laptops"
  },
  {
    id: 12,
    name: "MSI Modern 15",
    price: 61990,
    image: "assets/msi15.jpg",
    description: "Portable laptop with Intel i7, 16GB RAM, 512GB SSD, 15.6\" FHD.",
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
    id: 13,
    name: "Lenovo IdeaCentre AIO 3",
    price: 49990,
    image: "assets/ideacentre.jpg",
    description: "All-in-one desktop, Ryzen 5, 8GB RAM, 512GB SSD, 23.8\" FHD.",
    badges: ["8GB RAM", "512GB SSD", "Ryzen 5"],
    category: "Computers"
  },
  {
    id: 14,
    name: "HP All-in-One 24",
    price: 52990,
    image: "assets/hp-aio.jpg",
    description: "24-inch AIO, Intel i3, 8GB RAM, 1TB HDD, Windows 11.",
    badges: ["8GB RAM", "1TB HDD", "Intel i3"],
    category: "Computers"
  },
  {
    id: 15,
    name: "Raspberry Pi 5 Kit",
    price: 8990,
    image: "assets/pi5.jpg",
    description: "Mini computer kit, 8GB RAM, 32GB SD, WiFi, HDMI, Linux.",
    badges: ["8GB RAM", "32GB SD", "Linux"],
    category: "Computers"
  },
  {
    id: 3,
    name: "Samsung Galaxy S21",
    price: 54999,
    image: "assets/galaxy.jpg",
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
  },
  {
    id: 16,
    name: "Google Pixel 8",
    price: 62999,
    image: "assets/pixel8.jpg",
    description: "Flagship Android, 8GB RAM, 128GB Storage, Tensor G3 chip.",
    badges: ["8GB RAM", "128GB Storage", "Android"],
    category: "Mobiles"
  },
  {
    id: 17,
    name: "Xiaomi Redmi Note 13 Pro",
    price: 24999,
    image: "assets/redmi13pro.jpg",
    description: "Midrange phone, 12GB RAM, 256GB Storage, 200MP camera.",
    badges: ["12GB RAM", "256GB Storage", "Android"],
    category: "Mobiles"
  },
  {
    id: 18,
    name: "Samsung Galaxy Z Flip5",
    price: 89999,
    image: "assets/flip5.jpg",
    description: "Foldable phone, 8GB RAM, 256GB Storage, Snapdragon 8 Gen 2.",
    badges: ["8GB RAM", "256GB Storage", "Foldable"],
    category: "Mobiles"
  },
  // Accessories category
  {
    id: 19,
    name: "Logitech MX Master 3S Mouse",
    price: 7990,
    image: "assets/mxmaster3s.jpg",
    description: "Ergonomic wireless mouse, USB-C, Bluetooth, 8K DPI.",
    badges: ["Wireless", "USB-C", "Ergonomic"],
    category: "Accessories"
  },
  {
    id: 20,
    name: "Sony WH-1000XM5 Headphones",
    price: 29990,
    image: "assets/sonyxm5.jpg",
    description: "Industry-leading noise cancelling, 30h battery, wireless.",
    badges: ["Noise Cancelling", "Wireless", "30h Battery"],
    category: "Accessories"
  },
  {
    id: 21,
    name: "Anker PowerCore 20000mAh",
    price: 3499,
    image: "assets/anker20000.jpg",
    description: "High-capacity power bank, fast charging, USB-A/USB-C.",
    badges: ["20000mAh", "Fast Charge", "USB-C"],
    category: "Accessories"
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
    // Render all categories, each with a horizontal row of products
    productList.innerHTML = Object.keys(categories)
      .map(
        (cat) => `
          <div class="w-full mb-8">
            <h2 class="text-2xl font-bold mb-4 mt-4 text-[var(--primary)]">${cat}</h2>
            <div class="product-carousel flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
              ${categories[cat]
                .map(
                  (product) => `
                    <a href="product.html?id=${product.id}" class="block snap-start">
                      <div class="product-card shadow-lg border border-[var(--primary)] rounded-2xl bg-white min-w-[320px] max-w-[320px] transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
                        <img src="${product.image}" alt="${product.name}" class="rounded-t-2xl w-full h-48 object-contain bg-[var(--bg-solid)]">
                        <div class="p-5 flex flex-col items-center">
                          <h2 class="text-xl font-bold mb-2 text-[var(--primary)]">${product.name}</h2>
                          <p class="text-lg font-semibold text-[var(--secondary)] mb-2">₹${product.price.toLocaleString()}</p>
                          <button class="add-to-cart btn btn-primary w-full py-2 text-base font-semibold shadow-md rounded-lg transition-transform duration-200 hover:scale-105">Add to Cart</button>
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
    // Add to Cart button logic for all visible products
    setTimeout(() => {
      document.querySelectorAll('.product-card .add-to-cart').forEach((btn, idx) => {
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          // Find the correct product by traversing DOM
          const card = btn.closest('.product-card');
          const name = card.querySelector('h2').textContent.trim();
          const product = products.find(p => p.name === name);
          if (typeof addToCart === 'function' && product) {
            addToCart(product);
            const cartSidebar = document.querySelector('.cart-sidebar');
            if (cartSidebar) cartSidebar.classList.add('show');
          }
        });
      });
    }, 0);
  }
});
