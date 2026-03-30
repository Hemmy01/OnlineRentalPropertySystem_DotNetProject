# PropRent – Online Rental Property System (Prototype)

A fully functional HTML/CSS/JavaScript prototype for an Online Rental & Property Sales System.

## How to Run

Simply open `index.html` in any modern web browser. No server or installation required.

## Pages

| File | Description |
|---|---|
| `index.html` | Landing page with hero search, featured listings, and how-it-works |
| `properties.html` | Browse all listings with sidebar filters (type, price, bedrooms, availability) |
| `property-detail.html` | Full property view with gallery, amenities, agent contact, and application form |
| `login.html` | User login page |
| `register.html` | New user registration |
| `dashboard.html` | User & Admin dashboard |

## Demo Accounts

| Role | Email | Password |
|---|---|---|
| Tenant | john@example.com | password123 |
| Admin | admin@proprent.co.za | admin123 |

## Features

### Tenant
- Browse and search/filter rental & sale properties
- View full property details with image gallery
- Save properties to wishlist
- Submit rental applications / purchase enquiries
- Track application status (pending / approved / rejected)
- Edit profile

### Admin
- View dashboard stats (total properties, applications, pending reviews)
- Approve or reject tenant applications
- Add new property listings
- Toggle property availability
- View applicant messages

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- Data stored in `sessionStorage` (no backend required for prototype)
- Responsive design (mobile, tablet, desktop)
