// Ürün verileri
const products = [
    {
        id: 1,
        name: "El Yapımı Ahşap Saat",
        price: 750,
        category: "dekoratif",
        image: "https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=500",
        description: "Özel tasarım, el yapımı duvar saati"
    },
    {
        id: 2,
        name: "Ahşap Oymalı Tepsi",
        price: 450,
        category: "mutfak",
        image: "https://images.unsplash.com/photo-1635540705200-34c379d6dfc4?w=500",
        description: "Geleneksel motiflerle süslenmiş servis tepsisi"
    },
    {
        id: 3,
        name: "Ahşap Mücevher Kutusu",
        price: 600,
        category: "dekoratif",
        image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500",
        description: "El işçiliği ile yapılmış, özel tasarım mücevher kutusu"
    },
    {
        id: 4,
        name: "Oymalı Ahşap Ayna",
        price: 850,
        category: "dekoratif",
        image: "https://images.unsplash.com/photo-1616486788371-62d930495c44?w=500",
        description: "Geleneksel motiflerle süslenmiş duvar aynası"
    },
    {
        id: 5,
        name: "Ahşap Çay Seti",
        price: 550,
        category: "mutfak",
        image: "https://images.unsplash.com/photo-1578898887155-72e9a7da1fb3?w=500",
        description: "6 kişilik el yapımı ahşap çay seti"
    },
    {
        id: 6,
        name: "Dekoratif Duvar Rafı",
        price: 400,
        category: "dekoratif",
        image: "https://images.unsplash.com/photo-1593085260707-5377ba37f868?w=500",
        description: "Oymalı ahşap duvar rafı"
    },
    {
        id: 7,
        name: "Ahşap Kaşıklık",
        price: 300,
        category: "mutfak",
        image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500",
        description: "Geleneksel motifli kaşıklık"
    },
    {
        id: 8,
        name: "El Yapımı Ahşap Lamba",
        price: 950,
        category: "dekoratif",
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500",
        description: "Özel tasarım masa lambası"
    }
];

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i><span>Tema Değiştir</span>';
    } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i><span>Tema Değiştir</span>';
    }
    localStorage.setItem('darkTheme', isDark);
}

// Initialize theme from localStorage
const savedTheme = localStorage.getItem('darkTheme');
setTheme(savedTheme === 'true');

themeToggle.addEventListener('click', () => {
    const isDark = !body.classList.contains('dark-theme');
    setTheme(isDark);
});

// Cart functionality
const cartModal = document.getElementById('cart-modal');
const cartItems = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total-price');
const cartCountElement = document.getElementById('cart-count');

// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
    if (!cartCountElement || !cartItems || !cartTotalElement) return;

    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalItems;
    
    // Update cart modal
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name}</span>
            <span>${item.price} TL</span>
            <span>Adet: ${item.quantity}</span>
        </div>
    `).join('');
    
    // Update total price
    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    cartTotalElement.textContent = `${cartTotal} TL`;
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCart();
        
        // Show success feedback
        const button = document.querySelector(`[data-product-id="${productId}"]`);
        button.classList.add('success');
        setTimeout(() => button.classList.remove('success'), 1000);
    }
}

// Cart Modal Controls
function openCart() {
    cartModal.classList.add('active');
    updateCart();
}

function closeCart() {
    cartModal.classList.remove('active');
}

// Cart button event listeners
document.querySelector('.cart-icon').addEventListener('click', openCart);
document.querySelector('.close-cart').addEventListener('click', closeCart);

// Gizli bilgiler
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER; // Buraya numara gelecek

// Complete order via WhatsApp
document.getElementById('complete-order').addEventListener('click', function() {
    if (cart.length === 0) {
        alert('Sepetiniz boş!');
        return;
    }

    let message = 'Merhaba, aşağıdaki ürünleri sipariş etmek istiyorum:\n\n';
    let total = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `${index + 1}. ${item.name}\n`;
        message += `   Adet: ${item.quantity}\n`;
        message += `   Fiyat: ${item.price} TL\n`;
        message += `   Toplam: ${itemTotal} TL\n\n`;
    });

    message += `\nToplam Tutar: ${total} TL`;

    // Format message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Clear cart after order is placed
    cart = [];
    updateCart();
    closeCart();
});

// Clear cart functionality
document.getElementById('clear-cart').addEventListener('click', function() {
    if (confirm('Sepeti temizlemek istediğinize emin misiniz?')) {
        cart = [];
        updateCart();
    }
});

// Ürünleri görüntüleme fonksiyonu
function displayProducts(filteredProducts = products) {
    const productsContainer = document.getElementById('products');
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
                <button onclick="addToCart(${product.id})">Sepete Ekle</button>
            </div>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Filtreleme fonksiyonu
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
}

// Sepet işlemleri
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

// Sepet modalı
function openCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'block';
}

document.querySelector('.close-cart').addEventListener('click', () => {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'none';
});

// Bildirim gösterme
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 2000);
    }, 100);
}

// Sayfa yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    setupEventListeners();
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    const isOpen = mainNav.classList.contains('active');
    menuToggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !mainNav.contains(e.target) && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Close menu when clicking on a menu item
mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Photo Gallery functionality
const modal = document.getElementById('gallery-modal');
const modalImg = document.getElementById('gallery-img');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementsByClassName('close')[0];
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentImageIndex = 0;
let currentImages = [];

function openModal(img, images) {
    modal.style.display = 'block';
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
    currentImages = images;
    currentImageIndex = currentImages.indexOf(img);
    updateNavigationButtons();
}

function closeModal() {
    modal.style.display = 'none';
}

function navigateImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex >= currentImages.length) currentImageIndex = 0;
    if (currentImageIndex < 0) currentImageIndex = currentImages.length - 1;
    
    modalImg.src = currentImages[currentImageIndex].src;
    captionText.innerHTML = currentImages[currentImageIndex].alt;
    updateNavigationButtons();
}

function updateNavigationButtons() {
    prevBtn.style.display = currentImages.length > 1 ? 'block' : 'none';
    nextBtn.style.display = currentImages.length > 1 ? 'block' : 'none';
}

closeBtn.onclick = closeModal;
prevBtn.onclick = () => navigateImage(-1);
nextBtn.onclick = () => navigateImage(1);

// Search functionality
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const allProducts = document.querySelectorAll('.product');
    
    allProducts.forEach(product => {
        const title = product.querySelector('h3').textContent.toLowerCase();
        const description = product.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

searchBtn.addEventListener('click', searchProducts);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchProducts();
    }
});

// Sepet modalı
const cartIcon = document.querySelector('.cart-icon');

cartIcon.addEventListener('click', () => {
    cartModal.classList.add('active');
});

document.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.classList.remove('active');
    }
});
