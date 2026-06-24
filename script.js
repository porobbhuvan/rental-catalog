// script.js

// --- SPA Page Navigation Module ---
function switchPage(pageId) {
    // 1. Hide all main routing pages
    document.querySelectorAll('.spa-page').forEach(page => {
        page.style.display = 'none';
    });

    // 2. Remove active class markers from nav links
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.classList.remove('active');
    });

    // 3. Mount targeted page view
    document.getElementById(`page-${pageId}`).style.display = pageId === 'catalog' ? 'block' : 'block';
    if(pageId === 'catalog') {
        navigateTo('list'); // Reset view back to primary grid list
    }

    // 4. Highlight current navigation tab
    const activeLink = document.getElementById(`nav-${pageId}`);
    if(activeLink) activeLink.classList.add('active');

    window.scrollTo(0, 0);
}

// --- DOM Target Elements ---
const galleryView = document.getElementById('product-gallery');
const detailView = document.getElementById('product-detail-view');
const categoryNav = document.getElementById('category-nav');
const globalSearchBar = document.getElementById('search-bar');
const sidebarSearch = document.getElementById('sidebar-search');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// --- Catalog Rendering Engine ---
function createProductCard(product) {
    return `
        <div class="product-card" onclick="navigateTo('detail', '${product.id}')">
            <img src="${product.image}" alt="${product.name}">
            <div class="card-details">
                <h4>${product.name}</h4>
                <p class="description">${product.description.substring(0, 75)}...</p>
                <p class="price">${product.price}</p>
            </div>
        </div>
    `;
}

function renderProducts(productsToRender) {
    galleryView.innerHTML = '';
    if (!productsToRender || productsToRender.length === 0) {
        galleryView.innerHTML = '<p style="padding: 20px;">No matches found within our inventory line.</p>';
        return;
    }
    let htmlPool = '';
    productsToRender.forEach(prod => { htmlPool += createProductCard(prod); });
    galleryView.innerHTML = htmlPool;
}

// --- Sidebar Filtering ---
function createCategoryLinks() {
    categoryNav.innerHTML = '';
    categories.forEach(cat => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = cat;
        if (cat === 'View All') link.classList.add('active');

        link.addEventListener('click', (e) => {
            e.preventDefault();
            categoryNav.querySelectorAll('a').forEach(a => a.classList.remove('active'));
            link.classList.add('active');
            filterByCategory(cat);
            globalSearchBar.value = '';
        });
        categoryNav.appendChild(link);
    });
}

function filterByCategory(category) {
    const subset = category === 'View All' ? rentalProducts : rentalProducts.filter(p => p.category === category);
    renderProducts(subset);
}

// --- Live Filtering Core ---
globalSearchBar.addEventListener('keyup', () => {
    const query = globalSearchBar.value.toLowerCase().trim();
    categoryNav.querySelectorAll('a').forEach(a => a.classList.remove('active'));
    const hits = rentalProducts.filter(p => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query));
    renderProducts(hits);
});

sidebarSearch.addEventListener('keyup', () => {
    const query = sidebarSearch.value.toLowerCase().trim();
    categoryNav.querySelectorAll('a').forEach(link => {
        link.style.display = link.textContent.toLowerCase().includes(query) ? 'block' : 'none';
    });
});

// --- Dynamic Product View Switching ---
function navigateTo(view, productId = null) {
    if (view === 'list') {
        detailView.style.display = 'none';
        galleryView.style.display = 'grid';
    } else if (view === 'detail' && productId) {
        const match = rentalProducts.find(p => p.id === productId);
        if (match) {
            renderProductDetails(match);
            galleryView.style.display = 'none';
            detailView.style.display = 'block';
            window.scrollTo(0, 0);
        }
    }
}

function renderProductDetails(product) {
    let variantsHTML = '';
    if (product.extra_charges) {
        const info = product.extra_charges;
        variantsHTML = `
            <div class="extra-charges-section">
                <h4>Add-on Selection / Size Lineup:</h4>
                <p class="extra-price">${info.item} Option (${info.cost})</p>
                <div class="options">
                    ${info.options.map((opt, i) => `<label><input type="radio" name="detail-opt" ${i===0?'checked':''}> ${opt}</label><br>`).join('')}
                </div>
            </div>
        `;
    }

    const imgs = [product.image, ...product.extra_images].filter(Boolean);

    detailView.innerHTML = `
        <button class="back-button" onclick="navigateTo('list')">
            <i class="fas fa-arrow-left"></i> Return to Product Line
        </button>
        <div class="detail-container">
            <div class="gallery-side">
                <img src="${product.image}" id="view-large-img" class="main-detail-image" alt="Product Image">
                <div class="extra-images-row">
                    ${imgs.map(i => `<img src="${i}" class="thumb-image" onclick="document.getElementById('view-large-img').src='${i}'">`).join('')}
                </div>
            </div>
            <div class="info-side">
                <h2>${product.name}</h2>
                <div class="price-big">${product.price}</div>
                <p style="margin-bottom:20px; line-height:1.6;">${product.description}</p>
                <div class="spec-block">
                    <ul>
                        <li><strong>Dimensions:</strong> ${product.dimensions}</li>
                        <li><strong>Base Allocation Unit:</strong> ${product.rental_type}</li>
                    </ul>
                </div>
                ${variantsHTML}
                <a href="tel:+911234567890" class="rent-button"><i class="fas fa-phone-alt"></i> Contact to Enquire</a>
            </div>
        </div>
    `;
}

// --- Dark Mode Switch Engine ---
themeToggle.addEventListener('click', () => {
    const activeTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', activeTheme);
    themeToggle.innerHTML = activeTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// --- Boot Application Context ---
document.addEventListener('DOMContentLoaded', () => {
    createCategoryLinks();
    renderProducts(rentalProducts);
});