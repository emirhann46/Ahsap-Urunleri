// Ürün listesi
const products = [
    {
        id: 1,
        name: "Ahşap Tepsi",
        description: "El yapımı dekoratif ahşap tepsi",
        price: 250,
        category: "dekoratif",
        image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=500"
    },
    {
        id: 2,
        name: "Ahşap Tabak",
        description: "Doğal ahşap yemek tabağı",
        price: 150,
        category: "mutfak",
        image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=500"
    },
    {
        id: 3,
        name: "Dekoratif Kutu",
        description: "El oyması ahşap dekoratif kutu",
        price: 300,
        category: "dekoratif",
        image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=500"
    },
    {
        id: 4,
        name: "Ahşap Kaşıklık",
        description: "Mutfak için ahşap kaşıklık",
        price: 200,
        category: "mutfak",
        image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=500"
    }
];

// Sepet
let cart = [];

// DOM yüklendikten sonra çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    setupEventListeners();
});

// Event listener'ları ayarlama
function setupEventListeners() {
    // Filtreleme butonları
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const category = button.getAttribute('data-category');
            const filteredProducts = category === 'all' 
                ? products 
                : products.filter(product => product.category === category);
            
            displayProducts(filteredProducts);
        });
    });

    // Arama fonksiyonu
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm)
        );
        displayProducts(filteredProducts);
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });

    // Sepet simgesi tıklama
    document.querySelector('.cart-icon').addEventListener('click', () => {
        const modal = document.getElementById('cart-modal');
        modal.style.display = 'block';
    });

    // Sepet modalını kapatma
    document.querySelector('.close-cart').addEventListener('click', () => {
        const modal = document.getElementById('cart-modal');
        modal.style.display = 'none';
    });

    // WhatsApp sipariş butonu
    document.getElementById('complete-order').addEventListener('click', () => {
        const cartItems = cart.map(item => 
            `${item.name} x ${item.quantity} = ${item.price * item.quantity} TL`
        ).join('\n');
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const message = `Siparişim:\n${cartItems}\n\nToplam: ${total} TL`;
        
        const whatsappNumber = '905555555555'; // WhatsApp numaranız
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });
}

// Ürünleri görüntüleme fonksiyonu
function displayProducts(filteredProducts = products) {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = '';

    filteredProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=500'">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">${product.price} TL</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i>
                    <span>Sepete Ekle</span>
                </button>
            </div>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Sepete ürün ekleme
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    updateCart();
}

// Sepeti güncelleme
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total-price');

    // Sepet sayısını güncelle
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Sepet içeriğini güncelle
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name}</span>
            <span>${item.quantity} adet</span>
            <span>${item.price * item.quantity} TL</span>
        </div>
    `).join('');

    // Toplam tutarı güncelle
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `${total} TL`;
}

// Mobil menü
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.main-nav').classList.toggle('active');
    document.querySelector('.menu-toggle').classList.toggle('active');
});

// Tema değiştirme
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const icon = document.querySelector('#theme-toggle i');
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});
