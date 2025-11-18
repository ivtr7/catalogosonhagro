const products = [
    { id: 1, name: "Camisa Sonhagro", description: "Camisa oficial Sonhagro", image: "assets/camisa.png" },
    { id: 2, name: "Caneta Personalizada", description: "Caneta com logo Sonhagro", image: "assets/caneta.png" },
    { id: 3, name: "Agenda Corporativa", description: "Agenda anual Sonhagro", image: "assets/agenda.png" },
    { id: 4, name: "Bolsa Sonhagro", description: "Bolsa oficial Sonhagro", image: "assets/bolsa.png" },
    { id: 5, name: "Copo Térmico", description: "Copo térmico personalizado", image: "assets/copo.png" },
    { id: 6, name: "Garrafa Squeeze", description: "Squeeze 500ml personalizado", image: "assets/garrafa.png" },
    { id: 7, name: "Chaveiro Premium", description: "Chaveiro com logo Sonhagro", image: "assets/chaveiro_.png" },
    { id: 8, name: "Abridor de Garrafa", description: "Abridor personalizado Sonhagro", image: "assets/abridor de garrafa.png" },
    { id: 9, name: "Banner Roll-up", description: "Banner retrátil personalizado", image: "assets/banner.png" },
    { id: 10, name: "Faixa Promocional", description: "Faixa promocional Sonhagro", image: "assets/faixa.png" },
    { id: 11, name: "Outdoor", description: "Peça outdoor Sonhagro", image: "assets/out door.png" },
    { id: 12, name: "Bandeira", description: "Bandeira promocional", image: "assets/53572-convex-flag-mockup.png" },
    { id: 13, name: "Canivete", description: "Canivete personalizado", image: "assets/canivete.png" },
    { id: 14, name: "Tábua", description: "Tábua personalizada", image: "assets/tabua.png" },
    { id: 15, name: "Adesivação de Carro", description: "Envelopamento/adesivação de veículo", image: "assets/carro .png" }
];

function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');

    products.forEach(product => {
        const productCard = `
            <div class="col-lg-2 col-md-3 col-sm-6">
                <div class="product-card" onclick="openModal(${product.id})">
                    <div class="product-image-wrapper">
                        <img src="${product.image}" alt="${product.name}" class="product-image">
                        <div class="product-overlay">
                            <i class="fas fa-search-plus overlay-icon"></i>
                        </div>
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                    </div>
                </div>
            </div>
        `;

        productsGrid.innerHTML += productCard;
    });
}

function openModal(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');

    modalImage.src = product.image;
    modalTitle.textContent = product.name;
    modalDescription.textContent = product.description;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.addEventListener('click', function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
});
