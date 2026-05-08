// Data Produk
const products = [
    { id: 1, name: "Spider Knit", price: 285000, img: "https://cdn.phototourl.com/free/2026-05-07-946c810c-95c7-439c-a6b4-a207d8d9a9fd.jpg" },
    { id: 2, name: "Dreamy Tee", price: 195000, img: "https://cdn.phototourl.com/free/2026-05-07-a857f427-5f75-498b-b3e8-0cc0f4e64601.jpg" },
    { id: 3, name: "Vintage Jacket", price: 450000, img: "https://cdn.phototourl.com/free/2026-05-07-5a927ede-0022-4e4e-a022-60a6ac4c202d.jpg" },
    { id: 4, name: "Cargo Pants", price: 320000, img: "https://cdn.phototourl.com/free/2026-05-07-89f3b257-2796-4cc7-a0f1-5b3ef5d243c6.jpg" },
    { id: 5, name: "Spider Hoodie", price: 385000, img: "https://cdn.phototourl.com/free/2026-05-07-78dd156c-3f6f-446f-808e-c7327c1fba1f.jpg" },
    { id: 6, name: "Workshirt Noir", price: 275000, img: "https://cdn.phototourl.com/free/2026-05-07-4fa91ac2-bffd-4a2c-9982-776a8e066a8e.jpg" },
    { id: 7, name: "Midnight Denim", price: 350000, img: "https://cdn.phototourl.com/free/2026-05-07-04ed6576-1142-4c34-9843-4769aa02632e.jpg" }
];

let cart = [];

// Fungsi Login
function handleLogin() {
    const pass = document.getElementById('password').value;
    if (pass === "123") {
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('dashboard-page').classList.remove('hidden');
        renderProducts();
        lucide.createIcons();
    } else {
        document.getElementById('login-error').classList.remove('hidden');
    }
}

// Munculkan Produk
function renderProducts() {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = products.map(p => `
        <div class="glass overflow-hidden rounded-[2rem] border border-white/10 p-3 shadow-xl transition-all hover:border-red-600/50">
            <div class="h-60 overflow-hidden rounded-[1.5rem] bg-zinc-900">
                <img src="${p.img}" class="h-full w-full object-cover opacity-80 transition-all">
            </div>
            <div class="p-4">
                <h3 class="text-xs font-bold uppercase tracking-widest text-zinc-400">${p.name}</h3>
                <p class="mb-4 text-xl font-black text-red-500">Rp ${p.price.toLocaleString()}</p>
                <button onclick="addToCart(${p.id})" class="w-full rounded-xl bg-white py-3 text-[10px] font-black text-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all">Add to Bag</button>
            </div>
        </div>
    `).join('');
}

// Fungsi Keranjang
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    document.getElementById('cartButton').classList.remove('hidden');
    updateCartUI();
}

function updateCartUI() {
    const items = document.getElementById('cartItems');
    let total = 0;
    items.innerHTML = cart.map((item, index) => {
        total += item.price;
        return `<div class="flex justify-between bg-white/5 p-3 rounded-xl text-sm">
            <span>${item.name}</span>
            <span class="font-bold">Rp ${item.price.toLocaleString()}</span>
        </div>`;
    }).join('');
    document.getElementById('totalPrice').innerText = `Rp ${total.toLocaleString()}`;
}

function toggleCart() {
    document.getElementById('cartModal').classList.toggle('hidden');
}

function checkoutWA() {
    const number = "6285655703937";
    let list = cart.map((it, i) => `${i+1}. ${it.name} (Rp ${it.price.toLocaleString()})`).join('\n');
    let total = document.getElementById('totalPrice').innerText;
    let msg = `Halo Admin, saya mau order:\n\n${list}\n\nTotal: ${total}\n\nMohon diproses ya! 🕸️`;
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(msg)}`);
}

// Jalankan Ikon
lucide.createIcons();
