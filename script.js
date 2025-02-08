// Ürün veritabanı
const products = [
    // Sandıklar
    {
        id: 1,
        category: 'sandik',
        name: 'El İşlemeli Çeyiz Sandığı',
        price: 2500,
        image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=500',
        description: 'El işlemeli çeyiz sandığı'
    },
    {
        id: 2,
        category: 'sandik',
        name: 'Vintage Ahşap Sandık',
        price: 1800,
        image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=500',
        description: 'Vintage ahşap sandık'
    },
    {
        id: 3,
        category: 'sandik',
        name: 'Modern Dekoratif Sandık',
        price: 2200,
        image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=500',
        description: 'Modern dekoratif sandık'
    },
    {
        id: 4,
        category: 'sandik',
        name: 'Oymalı Ceviz Sandık',
        price: 3200,
        image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=500',
        description: 'Oymalı ceviz sandık'
    },
    {
        id: 5,
        category: 'sandik',
        name: 'Antika Görünümlü Sandık',
        price: 2800,
        image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=500',
        description: 'Antika görünümlü sandık'
    },
    
    // Masalar
    {
        id: 6,
        category: 'masa',
        name: 'Doğal Ahşap Yemek Masası',
        price: 4500,
        image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=500',
        description: 'Doğal ahşap yemek masası'
    },
    {
        id: 7,
        category: 'masa',
        name: 'Rustik Çalışma Masası',
        price: 3200,
        image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=500',
        description: 'Rustik çalışma masası'
    },
    {
        id: 8,
        category: 'masa',
        name: 'Modern Kahve Masası',
        price: 1500,
        image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=500',
        description: 'Modern kahve masası'
    },
    {
        id: 9,
        category: 'masa',
        name: 'Endüstriyel Yan Sehpa',
        price: 900,
        image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=500',
        description: 'Endüstriyel yan sehpa'
    },
    {
        id: 10,
        category: 'masa',
        name: 'Masif Orta Sehpa',
        price: 1200,
        image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=500',
        description: 'Masif orta sehpa'
    },
    
    // Sandalyeler
    {
        id: 11,
        category: 'sandalye',
        name: 'Klasik Ahşap Sandalye',
        price: 800,
        image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=500',
        description: 'Klasik ahşap sandalye'
    },
    {
        id: 12,
        category: 'sandalye',
        name: 'Modern Yemek Sandalyesi',
        price: 1200,
        image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=500',
        description: 'Modern yemek sandalyesi'
    },
    {
        id: 13,
        category: 'sandalye',
        name: 'Vintage Bar Taburesi',
        price: 600,
        image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=500',
        description: 'Vintage bar taburesi'
    },
    {
        id: 14,
        category: 'sandalye',
        name: 'El Oymalı Berjer',
        price: 2500,
        image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=500',
        description: 'El oymalı berjer'
    },
    {
        id: 15,
        category: 'sandalye',
        name: 'Ahşap Sallanan Sandalye',
        price: 1800,
        image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=500',
        description: 'Ahşap sallanan sandalye'
    },
    
    // Dekoratif Ürünler
    {
        id: 16,
        category: 'dekoratif',
        name: 'Ahşap Duvar Saati',
        price: 450,
        image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=500',
        description: 'Ahşap duvar saati'
    },
    {
        id: 17,
        category: 'dekoratif',
        name: 'El Yapımı Kitaplık',
        price: 1600,
        image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=500',
        description: 'El yapımı kitaplık'
    },
    {
        id: 18,
        category: 'dekoratif',
        name: 'Dekoratif Ayna Çerçevesi',
        price: 750,
        image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=500',
        description: 'Dekoratif ayna çerçevesi'
    },
    {
        id: 19,
        category: 'dekoratif',
        name: 'Ahşap Mumluk Set',
        price: 300,
        image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=500',
        description: 'Ahşap mumluk set'
    },
    {
        id: 20,
        category: 'dekoratif',
        name: 'Vintage Fotoğraf Çerçevesi',
        price: 250,
        image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=500',
        description: 'Vintage fotoğraf çerçevesi'
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
const WHATSAPP_NUMBER = '905436471714'; // Buraya numara gelecek

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

// Ürünleri görüntüleme
function displayProducts(category = 'all') {
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);

    renderProducts(filteredProducts);
}

// Update product rendering to include better UX
function renderProducts(products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-category', product.category);
        
        // Add category badge
        const categoryNames = {
            'sandik': 'Sandık',
            'masa': 'Masa',
            'sandalye': 'Sandalye',
            'dekoratif': 'Dekoratif'
        };
        
        productCard.innerHTML = `
            <div class="product-badge">${categoryNames[product.category]}</div>
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="price">${product.price.toLocaleString('tr-TR')} TL</div>
                <button class="add-to-cart" data-product-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i>
                    <span>Sepete Ekle</span>
                </button>
            </div>
        `;

        const img = productCard.querySelector('img');
        img.addEventListener('click', () => {
            const allProductImages = Array.from(document.querySelectorAll('.product-card img'));
            openModal(img, allProductImages);
        });

        const addToCartBtn = productCard.querySelector('.add-to-cart');
        addToCartBtn.addEventListener('click', (e) => {
            const btn = e.currentTarget;
            const productId = parseInt(btn.getAttribute('data-product-id'));
            
            btn.classList.add('success');
            btn.innerHTML = '<i class="fas fa-check"></i><span>Sepete Eklendi</span>';
            
            setTimeout(() => {
                btn.classList.remove('success');
                btn.innerHTML = '<i class="fas fa-shopping-cart"></i><span>Sepete Ekle</span>';
            }, 2000);
            
            addToCart(productId);
        });

        productsContainer.appendChild(productCard);
    });
}

// Filter button click handler with animation
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        
        // Update active state with animation
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter products with fade effect
        const products = document.querySelectorAll('.product-card');
        products.forEach(product => {
            product.style.opacity = '0';
            product.style.transform = 'translateY(20px)';
        });
        
        setTimeout(() => {
            displayProducts(category);
            setTimeout(() => {
                const newProducts = document.querySelectorAll('.product-card');
                newProducts.forEach(product => {
                    product.style.opacity = '1';
                    product.style.transform = 'translateY(0)';
                });
            }, 50);
        }, 300);
    });
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

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Initialize cart and theme
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    const savedTheme = localStorage.getItem('darkTheme');
    setTheme(savedTheme === 'true');
    
    // Initialize display
    updateCart();
    displayProducts();
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
    const allProducts = document.querySelectorAll('.product-card');
    
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
