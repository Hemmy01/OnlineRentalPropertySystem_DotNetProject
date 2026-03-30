// ===== DATA STORE =====
const DB = {
  properties: [
    { id: 1, title: "Modern 3-Bedroom Apartment", location: "Sandton, Johannesburg", type: "Apartment", listing: "rent", price: 12500, bedrooms: 3, bathrooms: 2, parking: 1, size: 120, description: "Spacious modern apartment in the heart of Sandton with stunning city views. Features open-plan living, fully fitted kitchen, and secure parking.", amenities: ["WiFi", "Pool", "Gym", "Security", "Parking", "Balcony"], image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80", featured: true, available: true, agent: { name: "Sarah Mokoena", role: "Senior Agent", avatar: "https://i.pravatar.cc/48?img=47" } },
    { id: 2, title: "Cozy Studio in Cape Town CBD", location: "Cape Town CBD, Western Cape", type: "Studio", listing: "rent", price: 7800, bedrooms: 1, bathrooms: 1, parking: 0, size: 45, description: "Charming studio apartment perfectly located in Cape Town CBD. Walking distance to restaurants, shops, and public transport.", amenities: ["WiFi", "Security", "Laundry"], image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80", featured: false, available: true, agent: { name: "James van der Berg", role: "Property Agent", avatar: "https://i.pravatar.cc/48?img=12" } },
    { id: 3, title: "Luxury 4-Bedroom House", location: "Umhlanga, Durban", type: "House", listing: "sale", price: 3200000, bedrooms: 4, bathrooms: 3, parking: 2, size: 280, description: "Stunning luxury home in the prestigious Umhlanga area. Features a private pool, landscaped garden, and high-end finishes throughout.", amenities: ["Pool", "Garden", "Security", "Parking", "Garage", "Solar"], image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80", featured: true, available: true, agent: { name: "Priya Naidoo", role: "Luxury Specialist", avatar: "https://i.pravatar.cc/48?img=32" } },
    { id: 4, title: "2-Bedroom Townhouse", location: "Pretoria East, Gauteng", type: "Townhouse", listing: "rent", price: 9500, bedrooms: 2, bathrooms: 2, parking: 1, size: 95, description: "Well-maintained townhouse in a secure complex. Close to schools, shopping centres, and major highways.", amenities: ["Security", "Parking", "Garden", "Pet Friendly"], image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80", featured: false, available: true, agent: { name: "David Khumalo", role: "Property Agent", avatar: "https://i.pravatar.cc/48?img=15" } },
    { id: 5, title: "Beachfront 2-Bedroom Flat", location: "Bloubergstrand, Cape Town", type: "Apartment", listing: "sale", price: 1850000, bedrooms: 2, bathrooms: 1, parking: 1, size: 85, description: "Breathtaking beachfront property with unobstructed views of Table Mountain. Perfect as a primary residence or holiday home.", amenities: ["Sea View", "Parking", "Security", "Balcony"], image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80", featured: true, available: true, agent: { name: "Sarah Mokoena", role: "Senior Agent", avatar: "https://i.pravatar.cc/48?img=47" } },
    { id: 6, title: "Bachelor Apartment", location: "Rosebank, Johannesburg", type: "Studio", listing: "rent", price: 5500, bedrooms: 1, bathrooms: 1, parking: 0, size: 35, description: "Affordable bachelor apartment in trendy Rosebank. Close to the Gautrain station and major shopping malls.", amenities: ["WiFi", "Security", "Laundry"], image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80", featured: false, available: false, agent: { name: "James van der Berg", role: "Property Agent", avatar: "https://i.pravatar.cc/48?img=12" } },
    { id: 7, title: "Family Home with Pool", location: "Centurion, Pretoria", type: "House", listing: "sale", price: 2100000, bedrooms: 3, bathrooms: 2, parking: 2, size: 210, description: "Lovely family home in a quiet suburb. Features a sparkling pool, large garden, and double garage. Close to top schools.", amenities: ["Pool", "Garden", "Garage", "Security", "Solar"], image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80", featured: false, available: true, agent: { name: "Priya Naidoo", role: "Luxury Specialist", avatar: "https://i.pravatar.cc/48?img=32" } },
    { id: 8, title: "Modern Office Space", location: "Sandton, Johannesburg", type: "Commercial", listing: "rent", price: 28000, bedrooms: 0, bathrooms: 2, parking: 4, size: 180, description: "Premium office space in Sandton's business hub. Open-plan layout with meeting rooms, kitchenette, and fibre internet.", amenities: ["WiFi", "Parking", "Security", "Reception", "Meeting Rooms"], image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", featured: false, available: true, agent: { name: "David Khumalo", role: "Property Agent", avatar: "https://i.pravatar.cc/48?img=15" } }
  ],

  users: [
    { id: 1, name: "John Dlamini", email: "john@example.com", password: "password123", role: "tenant", phone: "071 234 5678", joined: "2024-01-15" },
    { id: 2, name: "Admin User", email: "admin@proprent.co.za", password: "admin123", role: "admin", phone: "011 000 0000", joined: "2023-06-01" }
  ],

  applications: [
    { id: 1, propertyId: 1, tenantId: 1, tenantName: "John Dlamini", tenantEmail: "john@example.com", tenantPhone: "071 234 5678", message: "I am very interested in this property.", status: "pending", date: "2025-01-10" },
    { id: 2, propertyId: 4, tenantId: 1, tenantName: "John Dlamini", tenantEmail: "john@example.com", tenantPhone: "071 234 5678", message: "This looks perfect for my family.", status: "approved", date: "2025-01-05" }
  ],

  wishlist: [1, 5],
  currentUser: null,
  nextId: { property: 9, user: 3, application: 3 }
};

// Persist to sessionStorage
function saveDB() { sessionStorage.setItem('proprentDB', JSON.stringify(DB)); }
function loadDB() {
  const saved = sessionStorage.getItem('proprentDB');
  if (saved) { Object.assign(DB, JSON.parse(saved)); }
}

// ===== UTILITIES =====
function formatPrice(price, listing) {
  const formatted = new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', maximumFractionDigits: 0 }).format(price);
  return listing === 'rent' ? `${formatted}<span>/month</span>` : formatted;
}

function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  toast.innerHTML = `<span>${icons[type] || 'ℹ️'}</span> ${message}`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.4s'; setTimeout(() => toast.remove(), 400); }, 3000);
}

function openModal(id) { document.getElementById(id)?.classList.add('open'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }

// ===== AUTH =====
function login(email, password) {
  const user = DB.users.find(u => u.email === email && u.password === password);
  if (user) {
    DB.currentUser = user;
    saveDB();
    return user;
  }
  return null;
}

function register(name, email, password, phone) {
  if (DB.users.find(u => u.email === email)) return null;
  const user = { id: DB.nextId.user++, name, email, password, phone, role: 'tenant', joined: new Date().toISOString().split('T')[0] };
  DB.users.push(user);
  DB.currentUser = user;
  saveDB();
  return user;
}

function logout() {
  DB.currentUser = null;
  saveDB();
  window.location.href = 'index.html';
}

function requireAuth(redirectBack) {
  if (!DB.currentUser) {
    showToast('Please log in to continue', 'info');
    setTimeout(() => { window.location.href = `login.html?redirect=${redirectBack || ''}`; }, 800);
    return false;
  }
  return true;
}

// ===== PROPERTY CARD BUILDER =====
function buildPropertyCard(p) {
  const inWishlist = DB.wishlist.includes(p.id);
  return `
    <div class="card" onclick="viewProperty(${p.id})">
      <div class="card-img">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        <span class="badge badge-${p.listing}">${p.listing === 'rent' ? 'For Rent' : 'For Sale'}</span>
        ${p.featured ? '<span class="badge badge-featured" style="left:auto;right:50px">Featured</span>' : ''}
        <button class="wishlist-btn ${inWishlist ? 'active' : ''}" onclick="toggleWishlist(event,${p.id})" title="Save property">
          ${inWishlist ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="card-body">
        <div class="card-price">${formatPrice(p.price, p.listing)}</div>
        <div class="card-title">${p.title}</div>
        <div class="card-location">📍 ${p.location}</div>
        <div class="card-features">
          ${p.bedrooms > 0 ? `<span>🛏 ${p.bedrooms} Bed${p.bedrooms > 1 ? 's' : ''}</span>` : ''}
          <span>🚿 ${p.bathrooms} Bath</span>
          <span>📐 ${p.size}m²</span>
          <span class="status-badge ${p.available ? 'status-available' : 'status-rented'}" style="margin-left:auto">
            ${p.available ? 'Available' : 'Taken'}
          </span>
        </div>
      </div>
    </div>`;
}

function viewProperty(id) {
  window.location.href = `property-detail.html?id=${id}`;
}

function toggleWishlist(e, id) {
  e.stopPropagation();
  const idx = DB.wishlist.indexOf(id);
  if (idx === -1) {
    DB.wishlist.push(id);
    showToast('Property saved to wishlist', 'success');
  } else {
    DB.wishlist.splice(idx, 1);
    showToast('Removed from wishlist', 'info');
  }
  saveDB();
  // Refresh card button
  const btn = e.currentTarget;
  btn.classList.toggle('active', idx === -1);
  btn.textContent = idx === -1 ? '❤️' : '🤍';
}

// ===== NAVBAR =====
function initNavbar() {
  const user = DB.currentUser;
  const authLinks = document.getElementById('authLinks');
  if (!authLinks) return;
  if (user) {
    authLinks.innerHTML = `
      <a href="dashboard.html" class="nav-link">👤 ${user.name.split(' ')[0]}</a>
      <a href="#" onclick="logout()" class="btn-nav-outline">Logout</a>`;
  } else {
    authLinks.innerHTML = `
      <a href="login.html" class="btn-nav-outline">Login</a>
      <a href="register.html" class="btn-nav">Register</a>`;
  }

  // Hamburger
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger?.addEventListener('click', () => navLinks?.classList.toggle('open'));
}

// ===== SEARCH & FILTER =====
function filterProperties(props, filters) {
  return props.filter(p => {
    if (filters.query && !p.title.toLowerCase().includes(filters.query.toLowerCase()) && !p.location.toLowerCase().includes(filters.query.toLowerCase())) return false;
    if (filters.listing && p.listing !== filters.listing) return false;
    if (filters.type && p.type !== filters.type) return false;
    if (filters.minPrice && p.price < Number(filters.minPrice)) return false;
    if (filters.maxPrice && p.price > Number(filters.maxPrice)) return false;
    if (filters.bedrooms && p.bedrooms < Number(filters.bedrooms)) return false;
    return true;
  });
}

// ===== APPLICATION =====
function submitApplication(propertyId, data) {
  if (!requireAuth('property-detail.html?id=' + propertyId)) return false;
  const existing = DB.applications.find(a => a.propertyId === propertyId && a.tenantId === DB.currentUser.id);
  if (existing) { showToast('You have already applied for this property', 'error'); return false; }
  const app = {
    id: DB.nextId.application++,
    propertyId,
    tenantId: DB.currentUser.id,
    tenantName: DB.currentUser.name,
    tenantEmail: DB.currentUser.email,
    tenantPhone: DB.currentUser.phone,
    message: data.message,
    status: 'pending',
    date: new Date().toISOString().split('T')[0]
  };
  DB.applications.push(app);
  saveDB();
  return true;
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  loadDB();
  initNavbar();

  // Close modals on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });
  });
});
