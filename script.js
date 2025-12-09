// script.js

// --- DOM Elements ---
const galleryView = document.getElementById('product-gallery');
const detailView = document.getElementById('product-detail-view');
const categoryNav = document.getElementById('category-nav');
const globalSearchBar = document.getElementById('search-bar');
const sidebarSearch = document.getElementById('sidebar-search');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
let currentProducts = rentalProducts; // Array currently being displayed

// --- 1. Product Rendering and Filtering Logic ---

function createProductCard(product) {
    // Card now has an onclick handler for SPA navigation
    return `
        <div class="product-card" onclick="navigateTo('detail', '${product.id}')" 
             data-category="${product.category}" data-name="${product.name.toLowerCase()}">
            <img src="${product.image}" alt="${product.name}">
            <div class="card-details">
                <h4>${product.name}</h4>
                <p class="description">${product.description.substring(0, 50)}...</p>
                <p class="price">**\₹${product.price} / ${product.rental_type}**</p>
            </div>
        </div>
    `;
}

function renderProducts(productsToRender) {
    galleryView.innerHTML = '';
    
    if (!productsToRender || productsToRender.length === 0) {
        galleryView.innerHTML = '<p style="padding: 20px;">No products found matching your criteria.</p>';
        return;
    }

    let productHTML = '';
    productsToRender.forEach(product => {
        productHTML += createProductCard(product);
    });
    
    galleryView.innerHTML = productHTML;
    currentProducts = productsToRender; // Update current products list
}

// --- 2. Category Filtering ---

function createCategoryLinks() {
    categoryNav.innerHTML = '';

    categories.forEach(cat => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = cat;
        link.style.display = 'block'; 
        
        if (cat === 'View All') {
            link.classList.add('active');
        }

        link.addEventListener('click', (e) => {
            e.preventDefault();
            filterByCategory(cat);
            
            // Update active link class
            categoryNav.querySelectorAll('a').forEach(a => a.classList.remove('active'));
            link.classList.add('active');
            
            // Clear global search bar
            globalSearchBar.value = '';
        });

        categoryNav.appendChild(link);
    });
}

function filterByCategory(category) {
    let filteredProducts = rentalProducts;

    if (category !== 'View All') {
        filteredProducts = rentalProducts.filter(product => product.category === category);
    }
    
    renderProducts(filteredProducts);
}

// --- 3. Search Bar Functionality ---

globalSearchBar.addEventListener('keyup', () => {
    const searchText = globalSearchBar.value.toLowerCase().trim();
    
    // Deactivate category links when global search is used
    categoryNav.querySelectorAll('a').forEach(a => a.classList.remove('active'));

    const searchResults = rentalProducts.filter(product => 
        product.name.toLowerCase().includes(searchText) || 
        product.description.toLowerCase().includes(searchText)
    );
    
    renderProducts(searchResults);
});

// --- Sidebar Search (Category Filter) Functionality ---
sidebarSearch.addEventListener('keyup', () => {
    const searchText = sidebarSearch.value.toLowerCase().trim();
    const links = categoryNav.querySelectorAll('a');

    links.forEach(link => {
        const linkText = link.textContent.toLowerCase();
        
        if (linkText.includes(searchText)) {
            link.style.display = 'block';
        } else {
            link.style.display = 'none';
        }
    });
});


// --- 4. Single Page Application (SPA) Routing & Details ---

function navigateTo(view, productId = null) {
    // 1. Hide both views
    galleryView.style.display = 'none';
    detailView.style.display = 'none';

    // 2. Show the requested view
    if (view === 'list') {
        galleryView.style.display = 'grid'; 
    } else if (view === 'detail' && productId) {
        const product = rentalProducts.find(p => p.id === productId);
        if (product) {
            renderProductDetails(product);
            detailView.style.display = 'block';
            window.scrollTo(0, 0); // Scroll to top of page
        }
    }
}

// Global function to return to the catalog
window.goBack = function() {
    navigateTo('list');
}

function renderProductDetails(product) {
    // --- Extra Charges HTML ---
    let extraChargesHTML = '';
    if (product.extra_charges) {
        const charge = product.extra_charges;
        const optionsHTML = charge.options.map(option => 
            `<input type="radio" id="${product.id}-${option}" name="extra-option" value="${option}">
             <label for="${product.id}-${option}">${option}</label>`
        ).join('');

        extraChargesHTML = `
            <div class="extra-charges-section">
                <h4>Optional Add-on: ${charge.item}</h4>
                <p class="extra-price">+\$${charge.cost} / ${product.rental_type}</p>
                <div class="options">
                    ${optionsHTML}
                </div>
            </div>
        `;
    }

    // --- Extra Images HTML ---
    // Start with the main image in the thumbnail row
    const allImages = [product.image, ...product.extra_images];
    const extraImagesHTML = allImages.map(imgSrc => 
        `<img src="${imgSrc}" alt="${product.name} alternate view" 
              class="thumb-image" 
              onclick="document.getElementById('main-img').src='${imgSrc}'">`
    ).join('');
    
    // --- Construct the full detail page HTML ---
    const detailHTML = `
        <button class="back-button" onclick="goBack()">
            <i class="fas fa-arrow-left"></i> Back to Catalog
        </button>
        
        <div class="detail-container">
            <div class="gallery-side">
                <img src="${product.image}" alt="${product.name}" class="main-detail-image" id="main-img">
                <div class="extra-images-row">
                    ${extraImagesHTML}
                </div>
            </div>

            <div class="info-side">
                <h2>${product.name}</h2>
                <p class="price-big">
                    \₹${product.price} <span>/ ${product.rental_type}</span>
                </p>
                
                <p class="full-description">${product.description}</p>
                
                <div class="spec-block">
                    <h4>Key Specifications</h4>
                    <ul>
                        <li><i class="fas fa-ruler-combined"></i> **Dimensions:** ${product.dimensions}</li>
                        <li><i class="fas fa-tag"></i> **Category:** ${product.category}</li>
                    </ul>
                </div>
                
                ${extraChargesHTML}
                
                <button class="rent-button">Request to Rent This Item</button>
            </div>
        </div>
    `;

    detailView.innerHTML = detailHTML;
}


// --- 5. Dark Mode Toggle ---

function toggleDarkMode() {
    const currentTheme = body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update the button icon
    themeToggle.innerHTML = newTheme === 'dark' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>'; 
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let initialTheme = 'dark'; // Default to dark as requested
    if (savedTheme) {
        initialTheme = savedTheme;
    } else if (!prefersDark) {
        initialTheme = 'light';
    }

    body.setAttribute('data-theme', initialTheme);
    
    // Set the initial icon
    themeToggle.innerHTML = initialTheme === 'dark' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
}


// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme(); 
    createCategoryLinks(); 
    renderProducts(rentalProducts); 
});

// Event listener for the theme button
themeToggle.addEventListener('click', toggleDarkMode);