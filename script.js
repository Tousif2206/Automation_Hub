document.addEventListener('DOMContentLoaded', () => {

// =================================================================================
// ICONS (Lucide SVG strings)
// =================================================================================
const ICONS = {
    home: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    list: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
    edit3: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
    shoppingCart: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
    hotel: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/><path d="M6 8h12"/><path d="M10 4v5"/><path d="M10 13v5"/><path d="m14 4-3 3-3-3"/><path d="M14 13v5"/></svg>',
    plane: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1.5-1.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>',
    film: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>',
    puzzle: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.43 12.05c.29.3.43.72.43 1.15v2.8c0 1.66-1.34 3-3 3h-2.8c-.43 0-.85.14-1.15.43l-1.82 1.82c-.9.9-2.36.9-3.27 0L5.98 19.43c-.3-.29-.72-.43-1.15-.43H2c-1.66 0-3-1.34-3-3v-2.8c0-.43.14-.85.43-1.15l1.82-1.82c.9-.9.9-2.36 0-3.27L1.43 5.98C1.14 5.68 1 5.26 1 4.83V2c0-1.66 1.34-3 3-3h2.8c.43 0 .85-.14 1.15-.43l1.82-1.82c.9-.9 2.36-.9 3.27 0l1.82 1.82c.3.29.72.43 1.15.43H18c1.66 0 3 1.34 3 3v2.8c0 .43-.14.85-.43 1.15l-1.82 1.82c-.9.9-.9 2.36 0 3.27l1.82 1.82z"/></svg>',
    checkCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    xCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-500"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
    alertTriangle: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-500"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    info: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
    x: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    sun: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    moon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    eye: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    eyeOff: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>',
    plus: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    minus: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    trash2: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>',
    upload: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
    search: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    chevronUp: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>',
    chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
};

// =================================================================================
// CONSTANTS & DATA
// =================================================================================
const NAV_ITEMS = [
  { path: '/', label: 'Home', icon: ICONS.home },
  { path: '/elements', label: 'UI Elements', icon: ICONS.list },
  { path: '/forms', label: 'Forms', icon: ICONS.edit3 },
  { path: '/ecommerce', label: 'E-Commerce', icon: ICONS.shoppingCart },
  { path: '/hotel', label: 'Hotel Booking', icon: ICONS.hotel },
  { path: '/flights', label: 'Flight Search', icon: ICONS.plane },
  { path: '/movies', label: 'Movie Booking', icon: ICONS.film },
  { path: '/advanced', label: 'Advanced', icon: ICONS.puzzle },
];

const ECOMMERCE_PRODUCTS = [
    { id: 1, name: 'Wireless Headphones', category: 'Electronics', price: 199.99, image: 'https://picsum.photos/seed/hp/400/300' },
    { id: 2, name: 'Modern JavaScript', category: 'Books', price: 39.99, image: 'https://picsum.photos/seed/book/400/300' },
    { id: 3, name: 'Classic T-Shirt', category: 'Clothing', price: 24.99, image: 'https://picsum.photos/seed/shirt/400/300' },
    { id: 4, name: 'Organic Apples', category: 'Groceries', price: 4.99, image: 'https://picsum.photos/seed/apple/400/300' },
    { id: 5, name: 'Smart Watch', category: 'Electronics', price: 299.99, image: 'https://picsum.photos/seed/watch/400/300' },
    { id: 6, name: 'The Art of Testing', category: 'Books', price: 49.99, image: 'https://picsum.photos/seed/book2/400/300' },
    { id: 7, name: 'Denim Jeans', category: 'Clothing', price: 89.99, image: 'https://picsum.photos/seed/jeans/400/300' },
    { id: 8, name: 'Almond Milk', category: 'Groceries', price: 3.49, image: 'https://picsum.photos/seed/milk/400/300' },
];

const HOTEL_ROOMS = [
    { id: 1, name: 'Standard Queen Room', price: 150, amenities: ['WiFi', 'TV', 'AC'], image: 'https://picsum.photos/seed/hotel1/400/300' },
    { id: 2, name: 'Deluxe King Suite', price: 250, amenities: ['WiFi', 'TV', 'AC', 'Mini Bar', 'Ocean View'], image: 'https://picsum.photos/seed/hotel2/400/300' },
    { id: 3, name: 'Family Room', price: 200, amenities: ['WiFi', 'TV', 'AC', '2 Queen Beds'], image: 'https://picsum.photos/seed/hotel3/400/300' },
    { id: 4, name: 'Economy Twin Room', price: 120, amenities: ['WiFi', 'Shared Bathroom'], image: 'https://picsum.photos/seed/hotel4/400/300' },
];

const AIRPORTS = [
    { code: 'JFK', name: 'New York - JFK' }, { code: 'LAX', name: 'Los Angeles - LAX' },
    { code: 'LHR', name: 'London - Heathrow' }, { code: 'HND', name: 'Tokyo - Haneda' },
    { code: 'CDG', name: 'Paris - Charles de Gaulle' }, { code: 'SYD', name: 'Sydney - SYD' },
];

const TODAY = new Date().toISOString().split('T')[0];

// =================================================================================
// STATE
// =================================================================================
let state = {};

function resetState(pageKey) {
    switch(pageKey) {
        case '/elements':
            state.uiElements = { inputs: { text: '', number: '', email: '', password: '', date: '', autocomplete: '' }, showPassword: false, radioValue: 'option1', checkboxes: { cb1: false, cb2: true }, dropdownValue: '2', sliderValue: 50, isModalOpen: false, alert: null, fileName: '', dynamicContent: [], isLoading: false };
            break;
        case '/forms':
             state.forms = { contactForm: { name: '', email: '', message: '' }, contactStatus: '', loginForm: { username: '', password: '' }, loginStatus: '', showPassword: false, step: 1, multiStepForm: { personal: {firstName: '', lastName: ''}, account: {email: '', password: ''}}, multiStepStatus: '' };
            break;
        case '/ecommerce':
            state.ecommerce = { filterCategory: 'All', priceRange: 300, cart: [] };
            break;
        case '/hotel':
            state.hotel = { search: { location: 'New York', checkIn: TODAY, checkOut: '', guests: 2 }, rooms: [], isSearching: false };
            break;
        case '/flights':
            state.flights = { flightType: 'round-trip', searchParams: { from: 'JFK', to: 'LAX', depart: TODAY, return: '', passengers: 1 } };
            break;
        case '/movies':
            state.movies = { selectedSeats: new Set(), occupiedSeats: new Set(['A3', 'B5', 'B6', 'D1', 'E7', 'F4']) };
            break;
        case '/advanced':
            state.advanced = {
                dndItems: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
                tableData: [
                    { id: 1, name: 'John Doe', age: 32, city: 'New York' }, { id: 2, name: 'Jane Smith', age: 28, city: 'London' },
                    { id: 3, name: 'Sam Green', age: 45, city: 'Sydney' }, { id: 4, name: 'Alice Brown', age: 23, city: 'Paris' },
                    { id: 5, name: 'Bob White', age: 51, city: 'Tokyo' },
                ],
                sortConfig: { key: 'name', direction: 'asc'},
            };
            break;
    }
}


// =================================================================================
// CORE APP/UI LOGIC
// =================================================================================
const appContent = document.getElementById('app-content');
const toastContainer = document.getElementById('toast-container');
const sidebarContainer = document.getElementById('sidebar-container');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const sidebarOpenBtn = document.getElementById('sidebar-open-button');
const sidebarCloseBtn = document.getElementById('sidebar-close-button');


function addToast(message, type = 'info') {
    const id = Date.now();
    const toastIcons = {
        success: ICONS.checkCircle, error: ICONS.xCircle,
        warning: ICONS.alertTriangle, info: ICONS.info,
    };
    const toast = document.createElement('div');
    toast.className = 'flex items-center w-full max-w-xs p-4 text-slate-500 bg-white rounded-lg shadow-lg dark:text-slate-400 dark:bg-slate-800 transform transition-all duration-300 animate-fade-in-right';
    toast.setAttribute('data-testid', `toast-${type}`);
    toast.innerHTML = `
        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg">${toastIcons[type]}</div>
        <div class="ml-3 text-sm font-normal">${message}</div>
        <button data-toast-dismiss="${id}" class="ml-auto -mx-1.5 -my-1.5 bg-white text-slate-400 hover:text-slate-900 rounded-lg focus:ring-2 focus:ring-slate-300 p-1.5 hover:bg-slate-100 inline-flex h-8 w-8 dark:text-slate-500 dark:hover:text-white dark:bg-slate-800 dark:hover:bg-slate-700">
            <span class="sr-only">Close</span>
            ${ICONS.x}
        </button>
    `;
    toastContainer.appendChild(toast);

    const dismiss = () => toast.remove();
    toast.querySelector(`[data-toast-dismiss="${id}"]`).addEventListener('click', dismiss);
    setTimeout(dismiss, 5000);
}

function initTheme() {
    const themeToggleDesktopContainer = document.getElementById('theme-toggle-desktop-container');
    const themeToggleMobileContainer = document.getElementById('theme-toggle-mobile-container');
    
    const renderToggle = () => {
        const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        return `
            <button id="theme-toggle" class="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors" aria-label="Toggle theme" data-testid="theme-toggle">
                ${theme === 'light' ? ICONS.moon : ICONS.sun}
            </button>
        `;
    };
    
    const updateToggles = () => {
        const toggleHTML = renderToggle();
        themeToggleDesktopContainer.innerHTML = toggleHTML;
        themeToggleMobileContainer.innerHTML = toggleHTML;
        document.querySelectorAll('#theme-toggle').forEach(btn => btn.addEventListener('click', toggleTheme));
    };

    const toggleTheme = () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateToggles();
    };

    const storedTheme = localStorage.getItem('theme');
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = storedTheme || preferredTheme;
    if (initialTheme === 'dark') {
        document.documentElement.classList.add('dark');
    }
    updateToggles();
}

function renderSidebar() {
    const navLinks = NAV_ITEMS.map(item => `
        <a href="#${item.path}" data-nav-path="${item.path}" class="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">
            ${item.icon}
            <span>${item.label}</span>
        </a>
    `).join('');

    sidebarContainer.innerHTML = `
        <div class="p-4 border-b border-slate-200 dark:border-slate-700">
            <h1 class="text-xl font-bold text-primary-600 dark:text-primary-400">Automation Hub</h1>
        </div>
        <nav class="p-4 space-y-2">${navLinks}</nav>
    `;
}

function updateActiveNav(path) {
    document.querySelectorAll('[data-nav-path]').forEach(link => {
        const linkPath = link.getAttribute('data-nav-path');
        if (linkPath === path) {
            link.classList.add('bg-primary-100', 'dark:bg-primary-900/50', 'text-primary-700', 'dark:text-primary-300');
            link.classList.remove('text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-100', 'dark:hover:bg-slate-700');
        } else {
            link.classList.remove('bg-primary-100', 'dark:bg-primary-900/50', 'text-primary-700', 'dark:text-primary-300');
            link.classList.add('text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-100', 'dark:hover:bg-slate-700');
        }
    });
}

function initSidebarToggle() {
    const toggle = () => {
        sidebarContainer.classList.toggle('-translate-x-full');
        sidebarOverlay.classList.toggle('hidden');
        sidebarOpenBtn.classList.toggle('hidden');
        sidebarCloseBtn.classList.toggle('hidden');
    };
    sidebarOpenBtn.addEventListener('click', toggle);
    sidebarCloseBtn.addEventListener('click', toggle);
    sidebarOverlay.addEventListener('click', toggle);
}

// =================================================================================
// PAGE TEMPLATES & INITIALIZERS
// Note: Templates use component-like functions for readability.
// =================================================================================

// --- Component-like Template Functions ---
const PageWrapper = (title, content, pageKey) => `
    <div class="p-4 sm:p-6 lg:p-8">
         <div class="flex justify-between items-center mb-6">
            <h1 class="text-3xl font-bold text-slate-900 dark:text-slate-100">${title}</h1>
            ${pageKey ? `<button data-reset-page="${pageKey}" class="rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 focus:ring-slate-500" data-testid="reset-page-button">Reset Page</button>` : ''}
        </div>
        ${content}
    </div>`;
const Card = (content, extraClasses = '') => `<div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 ${extraClasses}">${content}</div>`;
const SectionTitle = (title) => `<h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 border-b border-slate-300 dark:border-slate-700 pb-2">${title}</h2>`;

// --- Home Page ---
function renderHomePage() {
    const content = Card(`
        <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
            This website is a dedicated playground for automation engineers and developers. 
            It's designed to provide a rich set of UI elements, forms, and real-world application scenarios
            to practice and perfect your web automation skills.
        </p>
        <p class="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
            Use the navigation on the left to explore different pages. Each page is designed to be a stable target for your tests, with predictable states and test-friendly attributes like \`data-testid\`. Happy testing!
        </p>
    `);
    return PageWrapper('Welcome to the Automation Practice Hub', content);
}

// --- UI Elements Page ---
function renderUiElementsPage() {
    const s = state.uiElements;
    const content = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${Card(`
            ${SectionTitle('Buttons')}
            <div class="flex flex-wrap gap-4">
                <button data-testid="enabled-button" class="rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500">Enabled</button>
                <button data-testid="disabled-button" disabled class="rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed">Disabled</button>
                <button data-testid="secondary-button" class="rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 focus:ring-slate-500">Secondary</button>
                <button data-testid="danger-button" class="rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-red-600 text-white hover:bg-red-700 focus:ring-red-500">Danger</button>
            </div>
        `)}
        ${Card(`
            ${SectionTitle('Input Fields')}
            <div class="space-y-4">
                <div class="w-full">
                    <label for="text-input" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Text Input</label>
                    <input id="text-input" data-testid="text-input" name="text" value="${s.inputs.text}" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                </div>
                <div class="w-full">
                    <label for="num-input" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Number Input</label>
                    <input id="num-input" data-testid="num-input" type="number" name="number" value="${s.inputs.number}" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                </div>
                <div class="relative">
                    <label for="password-input" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password Input</label>
                    <input id="password-input" data-testid="password-input" type="${s.showPassword ? 'text' : 'password'}" name="password" value="${s.inputs.password}" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                    <button id="toggle-password-visibility" data-testid="toggle-password-visibility" class="absolute right-3 top-9 text-slate-500">
                        ${s.showPassword ? ICONS.eyeOff : ICONS.eye}
                    </button>
                </div>
            </div>
        `)}
        ${Card(`
            ${SectionTitle('Radio Buttons & Checkboxes')}
            <div class="flex flex-col sm:flex-row gap-8">
                <div data-testid="radio-group">
                    <h3 class="font-semibold text-slate-800 dark:text-slate-200 mb-2">Radio Group</h3>
                    <div class="flex items-center gap-4">
                        <label class="flex items-center gap-2"><input type="radio" name="radio-group" value="option1" ${s.radioValue === 'option1' ? 'checked' : ''}> Option 1</label>
                        <label class="flex items-center gap-2"><input type="radio" name="radio-group" value="option2" ${s.radioValue === 'option2' ? 'checked' : ''}> Option 2</label>
                    </div>
                    <p class="mt-2 text-sm text-slate-500">Selected: <span data-testid="radio-output">${s.radioValue}</span></p>
                </div>
                 <div data-testid="checkbox-group">
                    <h3 class="font-semibold text-slate-800 dark:text-slate-200 mb-2">Checkbox Group</h3>
                    <div class="flex items-center gap-4">
                        <label class="flex items-center gap-2"><input type="checkbox" data-testid="checkbox-1" name="cb1" ${s.checkboxes.cb1 ? 'checked' : ''}> Check 1</label>
                        <label class="flex items-center gap-2"><input type="checkbox" data-testid="checkbox-2" name="cb2" ${s.checkboxes.cb2 ? 'checked' : ''}> Check 2</label>
                    </div>
                </div>
            </div>
        `)}
        ${Card(`
             ${SectionTitle('Dropdowns & Sliders')}
            <div class="space-y-4">
               <div>
                    <label for="single-select" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Single Select Dropdown</label>
                    <select id="single-select" data-testid="single-select" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                        <option value="1" ${s.dropdownValue === '1' ? 'selected' : ''}>Option 1</option>
                        <option value="2" ${s.dropdownValue === '2' ? 'selected' : ''}>Option 2</option>
                        <option value="3" ${s.dropdownValue === '3' ? 'selected' : ''}>Option 3</option>
                    </select>
               </div>
               <div>
                    <label for="slider" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Slider</label>
                    <input id="slider" type="range" min="0" max="100" value="${s.sliderValue}" class="w-full" data-testid="slider">
                    <p class="text-center mt-1" data-testid="slider-value">${s.sliderValue}</p>
               </div>
            </div>
        `)}
        ${Card(`
            ${SectionTitle('Alerts & Toasts')}
            <div id="alert-container" class="mb-4">
            ${s.alert ? `
                <div data-testid="alert-${s.alert.type}" class="border-l-4 p-4 flex items-center bg-${s.alert.type === 'success' ? 'green' : s.alert.type === 'error' ? 'red' : s.alert.type === 'warning' ? 'yellow' : 'blue'}-100 border-${s.alert.type === 'success' ? 'green' : s.alert.type === 'error' ? 'red' : s.alert.type === 'warning' ? 'yellow' : 'blue'}-400 text-${s.alert.type === 'success' ? 'green' : s.alert.type === 'error' ? 'red' : s.alert.type === 'warning' ? 'yellow' : 'blue'}-700 dark:bg-${s.alert.type}-900/30 dark:border-${s.alert.type}-600/50 dark:text-${s.alert.type}-300" role="alert">
                    <div class="mr-3">${ICONS[s.alert.type === 'success' ? 'checkCircle' : s.alert.type]}</div>
                    <p class="flex-grow">${s.alert.message}</p>
                    <button id="alert-close-btn" class="ml-4 -mr-2 -my-2 p-2 rounded-md hover:bg-black/10">${ICONS.x}</button>
                </div>
            ` : ''}
            </div>
            <div class="flex flex-wrap gap-2">
                 <button data-trigger-alert="success" class="rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 focus:ring-slate-500">Success Alert</button>
                 <button data-trigger-alert="error" class="rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 focus:ring-slate-500">Error Alert</button>
                 <button data-trigger-toast="success" class="rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 focus:ring-slate-500">Success Toast</button>
                 <button data-trigger-toast="error" class="rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 focus:ring-slate-500">Error Toast</button>
            </div>
        `)}
        ${Card(`
            ${SectionTitle('Other Elements')}
            <div class="space-y-4">
                <div class="flex items-center gap-4">
                    <button id="open-modal-button" data-testid="open-modal-button" class="rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500">Open Modal</button>
                    <div class="relative group flex items-center">
                        <button data-testid="tooltip-trigger" class="rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 focus:ring-slate-500">Hover for Tooltip</button>
                        <div data-testid="tooltip" class="absolute bottom-full mb-2 w-max px-2 py-1 bg-slate-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">This is a tooltip!</div>
                    </div>
                </div>
                <div>
                     <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">File Upload</label>
                     <div class="flex items-center gap-2">
                        <label class="cursor-pointer">
                            <span class="px-4 py-2 rounded-md font-semibold bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 transition-colors inline-flex items-center gap-2">
                                ${ICONS.upload} Choose File
                            </span>
                            <input id="file-upload" type="file" class="hidden" data-testid="file-upload">
                        </label>
                        <span id="file-upload-name" data-testid="file-upload-name" class="text-sm text-slate-600 dark:text-slate-400">${s.fileName}</span>
                     </div>
                </div>
                 <div class="w-full">
                    <label for="date-picker" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Date Picker</label>
                    <input id="date-picker" data-testid="date-picker" type="date" name="date" value="${s.inputs.date}" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                </div>
            </div>
        `)}
         ${Card(`
            ${SectionTitle('Dynamic Content')}
            <div class="flex items-center gap-4">
                <button id="load-content-button" data-testid="load-content-button" class="rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500" ${s.isLoading ? 'disabled' : ''}>
                    ${s.isLoading ? 'Loading...' : 'Load Content'}
                </button>
            </div>
            <div id="dynamic-content-area" data-testid="dynamic-content-area" class="mt-4 p-4 border border-dashed border-slate-300 dark:border-slate-600 rounded-md min-h-[100px]">
                ${s.dynamicContent.map(item => `<p>${item}</p>`).join('')}
                ${s.isLoading ? `<p class="text-slate-500">Loading new content...</p>` : ''}
            </div>
        `, 'md:col-span-2')}
    </div>
    <div id="modal" data-testid="modal-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center ${s.isModalOpen ? '' : 'hidden'}">
        <div data-testid="modal-content" class="relative bg-white dark:bg-slate-800 rounded-lg shadow-xl w-full max-w-lg m-4">
            <div class="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700">
                <h3 class="text-xl font-semibold text-slate-900 dark:text-slate-100">Test Modal</h3>
                <button id="modal-close-x" data-testid="modal-close-button" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">${ICONS.x}</button>
            </div>
            <div class="p-6">
                <p class="text-slate-600 dark:text-slate-300">This is a modal dialog. You can test interactions with it.</p>
                <div class="mt-4 flex justify-end gap-2">
                    <button id="modal-cancel" class="rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 focus:ring-slate-500">Cancel</button>
                    <button id="modal-confirm" class="rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500">Confirm</button>
                </div>
            </div>
        </div>
    </div>
    `;
    return PageWrapper('UI Elements', content, '/elements');
}
function initUiElementsPage() {
    const s = state.uiElements;
    const page = document; // Use document as root for querySelectors

    const reRender = () => {
        const focusedElement = document.activeElement;
        const focusedId = focusedElement ? focusedElement.id : null;
        const selectionStart = focusedElement && focusedElement.selectionStart ? focusedElement.selectionStart : null;
        const selectionEnd = focusedElement && focusedElement.selectionEnd ? focusedElement.selectionEnd : null;

        appContent.innerHTML = renderUiElementsPage();
        initUiElementsPage();

        if (focusedId) {
            const newFocusElement = document.getElementById(focusedId);
            if (newFocusElement) {
                newFocusElement.focus();
                if (selectionStart !== null && selectionEnd !== null) {
                    try { newFocusElement.setSelectionRange(selectionStart, selectionEnd); } catch (e) {}
                }
            }
        }
    };
    
    // Inputs
    page.querySelectorAll('input[name="text"], input[name="number"], input[name="password"], input[name="date"]').forEach(input => {
        input.addEventListener('input', (e) => {
            s.inputs[e.target.name] = e.target.value;
        });
    });
    
    // Password visibility
    page.getElementById('toggle-password-visibility').addEventListener('click', () => {
        s.showPassword = !s.showPassword;
        reRender();
    });

    // Radio buttons
    page.querySelectorAll('input[name="radio-group"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            s.radioValue = e.target.value;
            reRender();
        });
    });

    // Checkboxes
    page.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
             if (e.target.name in s.checkboxes) {
                s.checkboxes[e.target.name] = e.target.checked;
                reRender();
            }
        });
    });
    
    // Dropdown
    page.getElementById('single-select').addEventListener('change', (e) => {
        s.dropdownValue = e.target.value;
        // No re-render needed, value is held by select
    });
    
    // Slider
    const slider = page.getElementById('slider');
    slider.addEventListener('input', (e) => {
        s.sliderValue = e.target.value;
        page.querySelector('[data-testid="slider-value"]').textContent = s.sliderValue;
    });
    
    // Alerts and Toasts
    page.querySelectorAll('[data-trigger-alert]').forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.triggerAlert;
            s.alert = { type, message: `This is a ${type} alert.` };
            reRender();
        });
    });
    page.querySelectorAll('[data-trigger-toast]').forEach(btn => {
        btn.addEventListener('click', () => {
            const type = btn.dataset.triggerToast;
            addToast(`${type.charAt(0).toUpperCase() + type.slice(1)} toast notification!`, type);
        });
    });
    if(s.alert) {
       page.getElementById('alert-close-btn').addEventListener('click', () => {
           s.alert = null;
           reRender();
       });
    }

    // Modal
    const modal = page.getElementById('modal');
    const openModalBtn = page.getElementById('open-modal-button');
    const closeModalX = page.getElementById('modal-close-x');
    const cancelModalBtn = page.getElementById('modal-cancel');
    const confirmModalBtn = page.getElementById('modal-confirm');

    const closeModal = () => { s.isModalOpen = false; reRender(); };
    openModalBtn.addEventListener('click', () => { s.isModalOpen = true; reRender(); });
    modal.addEventListener('click', closeModal); // Clicking on overlay
    closeModalX.addEventListener('click', closeModal);
    cancelModalBtn.addEventListener('click', closeModal);
    confirmModalBtn.addEventListener('click', () => {
        addToast('Confirmed!', 'success');
        closeModal();
    });
    modal.firstElementChild.addEventListener('click', e => e.stopPropagation());

    // File Upload
    page.getElementById('file-upload').addEventListener('change', (e) => {
        s.fileName = e.target.files?.[0]?.name || '';
        page.getElementById('file-upload-name').textContent = s.fileName;
    });

    // Dynamic Content
    page.getElementById('load-content-button').addEventListener('click', () => {
        s.isLoading = true;
        reRender();

        setTimeout(() => {
            s.isLoading = false;
            const newItem = `Dynamic item #${s.dynamicContent.length + 1}`;
            s.dynamicContent.push(newItem);
            addToast('Content loaded!', 'success');
            reRender();
        }, 1500);
    });
}


// --- Forms Page ---
function renderFormsPage() {
    const s = state.forms;
    const content = `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        ${Card(`
            ${SectionTitle('Contact Us Form')}
            <form id="contact-form" data-testid="contact-form" class="space-y-4">
                <div class="w-full">
                    <label for="contact-name" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                    <input id="contact-name" name="name" required value="${s.contactForm.name}" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md">
                </div>
                 <div class="w-full">
                    <label for="contact-email" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                    <input id="contact-email" name="email" type="email" required value="${s.contactForm.email}" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md">
                </div>
                <div>
                    <label for="contact-message" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                    <textarea id="contact-message" name="message" rows="4" required class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md">${s.contactForm.message}</textarea>
                </div>
                <button type="submit" class="rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500">Submit</button>
                <p data-testid="contact-form-status" class="mt-4 text-sm">${s.contactStatus}</p>
            </form>
        `)}
         ${Card(`
            ${SectionTitle('Login Form')}
            <p class="text-sm text-slate-500 mb-4">Try with user: \`testuser\`, pass: \`password123\`</p>
            <form id="login-form" data-testid="login-form" class="space-y-4">
                <div class="w-full">
                    <label for="login-username" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Username</label>
                    <input id="login-username" name="username" value="${s.loginForm.username}" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md">
                </div>
                 <div class="relative">
                    <label for="login-password" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
                    <input id="login-password" type="${s.showPassword ? 'text' : 'password'}" name="password" value="${s.loginForm.password}" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md">
                    <button id="login-toggle-password" type="button" class="absolute right-3 top-9 text-slate-500">${s.showPassword ? ICONS.eyeOff : ICONS.eye}</button>
                </div>
                <button type="submit" class="rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500">Login</button>
                <p data-testid="login-form-status" class="mt-4 text-sm">${s.loginStatus}</p>
            </form>
        `)}
        ${Card(`
            ${SectionTitle('Multi-step Form')}
            <div class="relative p-8 border border-slate-200 dark:border-slate-700 rounded-lg">
                <div class="flex justify-between mb-8">
                    <div class="flex-1 text-center"><div class="mx-auto w-10 h-10 rounded-full flex items-center justify-center ${s.step >= 1 ? 'bg-primary-600 text-white' : 'bg-slate-200 dark:bg-slate-700'}">1</div><p class="text-sm mt-1">Personal Info</p></div>
                    <div class="flex-1 text-center"><div class="mx-auto w-10 h-10 rounded-full flex items-center justify-center ${s.step >= 2 ? 'bg-primary-600 text-white' : 'bg-slate-200 dark:bg-slate-700'}">2</div><p class="text-sm mt-1">Account</p></div>
                    <div class="flex-1 text-center"><div class="mx-auto w-10 h-10 rounded-full flex items-center justify-center ${s.step >= 3 ? 'bg-primary-600 text-white' : 'bg-slate-200 dark:bg-slate-700'}">3</div><p class="text-sm mt-1">Confirm</p></div>
                </div>
                <div data-testid="multi-step-form">
                    ${s.step === 1 ? `
                        <div data-testid="step-1" class="space-y-4 animate-fade-in">
                            <h3 class="font-bold text-lg">Step 1: Personal Information</h3>
                             <div class="w-full">
                                <label for="ms-firstname" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">First Name</label>
                                <input id="ms-firstname" value="${s.multiStepForm.personal.firstName}" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md">
                            </div>
                             <div class="w-full">
                                <label for="ms-lastname" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Last Name</label>
                                <input id="ms-lastname" value="${s.multiStepForm.personal.lastName}" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md">
                            </div>
                            <button id="ms-next-1" class="rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500">Next</button>
                        </div>
                    ` : ''}
                    ${s.step === 2 ? `
                        <div data-testid="step-2" class="space-y-4 animate-fade-in">
                            <h3 class="font-bold text-lg">Step 2: Account Details</h3>
                             <div class="w-full">
                                <label for="ms-email" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                                <input id="ms-email" type="email" value="${s.multiStepForm.account.email}" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md">
                            </div>
                             <div class="w-full">
                                <label for="ms-password" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
                                <input id="ms-password" type="password" value="${s.multiStepForm.account.password}" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md">
                            </div>
                            <div class="flex gap-2">
                                <button id="ms-back-2" class="rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 focus:ring-slate-500">Back</button>
                                <button id="ms-next-2" class="rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500">Next</button>
                            </div>
                        </div>
                    ` : ''}
                     ${s.step === 3 ? `
                        <div data-testid="step-3" class="space-y-4 animate-fade-in">
                            <h3 class="font-bold text-lg">Step 3: Confirmation</h3>
                            <p>First Name: ${s.multiStepForm.personal.firstName}</p>
                            <p>Last Name: ${s.multiStepForm.personal.lastName}</p>
                            <p>Email: ${s.multiStepForm.account.email}</p>
                            <div class="flex gap-2">
                                <button id="ms-back-3" class="rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 focus:ring-slate-500">Back</button>
                                <button id="ms-submit" class="rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500">Submit</button>
                            </div>
                        </div>
                    ` : ''}
                    ${s.step === 4 ? `
                        <div data-testid="step-4" class="text-center animate-fade-in">
                            <h3 class="font-bold text-lg text-green-600">Success!</h3>
                            <p data-testid="multi-step-form-status">${s.multiStepStatus}</p>
                        </div>
                    ` : ''}
                </div>
            </div>
        `, 'lg:col-span-2')}
    </div>
    `;
    return PageWrapper('Forms', content, '/forms');
}
function initFormsPage() {
    const s = state.forms;
    const reRender = () => { router.route(); }; // Just re-route to re-render the current page

    // Contact Form
    const contactFormEl = document.getElementById('contact-form');
    contactFormEl.addEventListener('input', e => {
        s.contactForm[e.target.name] = e.target.value;
    });
    contactFormEl.addEventListener('submit', e => {
        e.preventDefault();
        const { name, email, message } = s.contactForm;
        if (name && email.includes('@') && message) {
            s.contactStatus = `Thank you, ${name}! Your message has been received.`;
        } else {
            s.contactStatus = 'Please fill out all fields correctly.';
        }
        reRender();
    });

    // Login Form
    const loginFormEl = document.getElementById('login-form');
    loginFormEl.addEventListener('input', e => {
        s.loginForm[e.target.name] = e.target.value;
    });
    document.getElementById('login-toggle-password').addEventListener('click', () => {
        s.showPassword = !s.showPassword;
        reRender();
    });
    loginFormEl.addEventListener('submit', e => {
        e.preventDefault();
        const { username, password } = s.loginForm;
        if (username === 'testuser' && password === 'password123') {
            s.loginStatus = `Welcome, ${username}!`;
        } else {
            s.loginStatus = 'Invalid username or password.';
        }
        reRender();
    });

    // Multi-step Form
    const updateStep = (newStep) => { s.step = newStep; reRender(); };
    if (s.step === 1) {
        document.getElementById('ms-firstname').addEventListener('input', e => s.multiStepForm.personal.firstName = e.target.value);
        document.getElementById('ms-lastname').addEventListener('input', e => s.multiStepForm.personal.lastName = e.target.value);
        document.getElementById('ms-next-1').addEventListener('click', () => updateStep(2));
    }
    if (s.step === 2) {
        document.getElementById('ms-email').addEventListener('input', e => s.multiStepForm.account.email = e.target.value);
        document.getElementById('ms-password').addEventListener('input', e => s.multiStepForm.account.password = e.target.value);
        document.getElementById('ms-back-2').addEventListener('click', () => updateStep(1));
        document.getElementById('ms-next-2').addEventListener('click', () => updateStep(3));
    }
    if (s.step === 3) {
        document.getElementById('ms-back-3').addEventListener('click', () => updateStep(2));
        document.getElementById('ms-submit').addEventListener('click', () => {
            s.multiStepStatus = `Registration complete for ${s.multiStepForm.account.email}!`;
            updateStep(4);
        });
    }
}


// --- E-Commerce Page ---
function renderEcommercePage() {
    const s = state.ecommerce;
    const categories = ['All', ...Array.from(new Set(ECOMMERCE_PRODUCTS.map(p => p.category)))];
    
    const filteredProducts = ECOMMERCE_PRODUCTS.filter(p => 
        (s.filterCategory === 'All' || p.category === s.filterCategory) && p.price <= s.priceRange
    );

    const productsHTML = filteredProducts.map(product => Card(`
        <img src="${product.image}" alt="${product.name}" class="rounded-md h-48 w-full object-cover" />
        <h3 class="text-lg font-bold mt-4">${product.name}</h3>
        <p class="text-sm text-slate-500">${product.category}</p>
        <p class="text-xl font-semibold text-primary-600 mt-2 flex-grow">$${product.price}</p>
        <button data-add-to-cart="${product.id}" data-testid="add-to-cart-${product.id}" class="w-full mt-4 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500">Add to Cart</button>
    `, 'flex flex-col')).join('');
    
    const cartTotal = s.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    const cartItemsHTML = s.cart.length === 0 ? `<p data-testid="empty-cart-message">Your cart is empty.</p>` : s.cart.map(item => `
        <div data-testid="cart-item-${item.id}" class="flex items-center justify-between border-b pb-2 dark:border-slate-700">
            <div>
                <p class="font-semibold">${item.name}</p>
                <p class="text-sm text-slate-500">$${item.price.toFixed(2)}</p>
            </div>
            <div class="flex items-center gap-2">
                <button data-update-quantity="${item.id}" data-amount="-1" class="p-2 text-sm rounded-md font-semibold bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600">${ICONS.minus}</button>
                <span data-testid="cart-item-quantity-${item.id}">${item.quantity}</span>
                <button data-update-quantity="${item.id}" data-amount="1" class="p-2 text-sm rounded-md font-semibold bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600">${ICONS.plus}</button>
                <button data-update-quantity="${item.id}" data-amount="0" class="p-2 text-sm rounded-md font-semibold bg-red-600 text-white hover:bg-red-700">${ICONS.trash2}</button>
            </div>
        </div>
    `).join('') + `<div class="text-right font-bold text-xl mt-4">Total: <span data-testid="cart-total">$${cartTotal}</span></div>`;

    const content = `
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div class="lg:col-span-1">
            ${Card(`
                ${SectionTitle('Filters')}
                <div class="space-y-6">
                    <div>
                        <h4 class="font-semibold mb-2">Category</h4>
                        <select id="category-filter" data-testid="category-filter" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md">
                            ${categories.map(c => `<option value="${c}" ${s.filterCategory === c ? 'selected' : ''}>${c}</option>`).join('')}
                        </select>
                    </div>
                    <div>
                        <label for="price-range" class="font-semibold mb-2 block">Max Price: <span data-testid="price-filter-value">$${s.priceRange}</span></label>
                        <input id="price-range" data-testid="price-filter" type="range" min="0" max="300" value="${s.priceRange}" class="w-full">
                    </div>
                </div>
            `)}
        </div>
        <div class="lg:col-span-3">
            ${SectionTitle('Products')}
            <div data-testid="product-list" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">${productsHTML}</div>
        </div>
        <div class="lg:col-span-4">
            ${Card(`
                ${SectionTitle('Shopping Cart')}
                <div data-testid="shopping-cart" class="space-y-4">${cartItemsHTML}</div>
            `)}
        </div>
    </div>`;
    return PageWrapper('E-Commerce Store', content, '/ecommerce');
}
function initEcommercePage() {
    const s = state.ecommerce;
    const reRender = () => router.route();

    document.getElementById('category-filter').addEventListener('change', e => {
        s.filterCategory = e.target.value;
        reRender();
    });

    document.getElementById('price-range').addEventListener('input', e => {
        s.priceRange = e.target.value;
        // This can re-render for live updates, but for performance, we can do it on 'change'
        document.querySelector('[data-testid="price-filter-value"]').textContent = `$${s.priceRange}`;
    });
     document.getElementById('price-range').addEventListener('change', e => {
        s.priceRange = e.target.value;
        reRender();
    });

    document.querySelectorAll('[data-add-to-cart]').forEach(btn => {
        btn.addEventListener('click', e => {
            const productId = parseInt(e.currentTarget.dataset.addToCart, 10);
            const product = ECOMMERCE_PRODUCTS.find(p => p.id === productId);
            const existingItem = s.cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                s.cart.push({ ...product, quantity: 1 });
            }
            addToast(`${product.name} added to cart`, 'success');
            reRender();
        });
    });

    document.querySelectorAll('[data-update-quantity]').forEach(btn => {
        btn.addEventListener('click', e => {
            const productId = parseInt(e.currentTarget.dataset.updateQuantity, 10);
            const amount = parseInt(e.currentTarget.dataset.amount, 10);
            const item = s.cart.find(item => item.id === productId);
            if (amount === 0) { // remove
                s.cart = s.cart.filter(i => i.id !== productId);
            } else {
                item.quantity += amount;
                if (item.quantity <= 0) {
                     s.cart = s.cart.filter(i => i.id !== productId);
                }
            }
            reRender();
        });
    });
}

// --- Hotel Booking Page ---
function renderHotelBookingPage() {
    const s = state.hotel;
    const roomsHTML = s.isSearching
        ? `<p class="md:col-span-2 text-center">Searching for rooms...</p>`
        : s.rooms.map(room => Card(`
            <img src="${room.image}" alt="${room.name}" class="w-full sm:w-1/3 h-48 sm:h-auto object-cover rounded-md"/>
            <div class="flex-grow">
                <h3 class="text-xl font-bold">${room.name}</h3>
                <p class="text-sm text-slate-500 my-2">${room.amenities.join(', ')}</p>
                <p class="text-2xl font-bold text-primary-600">$${room.price}<span class="text-base font-normal text-slate-500"> / night</span></p>
                <button data-book-room="${room.id}" class="w-full mt-4 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500" data-testid="book-room-${room.id}">Book Now</button>
            </div>
        `, 'flex flex-col sm:flex-row gap-4')).join('');

    const content = `
    ${Card(`
        <form id="hotel-search-form" data-testid="hotel-search-form" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div><label class="block text-sm font-medium">Location</label><input data-testid="location-input" name="location" value="${s.search.location}" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md"></div>
            <div><label class="block text-sm font-medium">Check-in</label><input data-testid="checkin-date" name="checkIn" type="date" value="${s.search.checkIn}" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md"></div>
            <div><label class="block text-sm font-medium">Check-out</label><input data-testid="checkout-date" name="checkOut" type="date" value="${s.search.checkOut}" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md"></div>
            <div class="flex flex-col md:flex-row gap-4 items-end">
                <div class="w-full"><label class="block text-sm font-medium">Guests</label><input data-testid="guests-input" name="guests" type="number" min="1" value="${s.search.guests}" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md"></div>
                <button type="submit" class="w-full rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500" ${s.isSearching ? 'disabled' : ''}>${s.isSearching ? 'Searching...' : 'Search'}</button>
            </div>
        </form>
    `)}
    <div data-testid="hotel-room-list" class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        ${roomsHTML}
    </div>
    `;
    return PageWrapper('Hotel Booking', content, '/hotel');
}
function initHotelBookingPage() {
    const s = state.hotel;
    const reRender = () => router.route();
    const form = document.getElementById('hotel-search-form');

    form.addEventListener('input', e => {
        s.search[e.target.name] = e.target.value;
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
        s.isSearching = true;
        s.rooms = [];
        reRender();

        setTimeout(() => {
            s.isSearching = false;
            s.rooms = HOTEL_ROOMS;
            addToast(`Found ${HOTEL_ROOMS.length} rooms!`, 'success');
            reRender();
        }, 1500);
    });

    document.querySelectorAll('[data-book-room]').forEach(btn => {
        btn.addEventListener('click', e => {
            const roomId = parseInt(e.currentTarget.dataset.bookRoom, 10);
            const room = HOTEL_ROOMS.find(r => r.id === roomId);
            addToast(`You booked ${room.name}!`, 'success');
        });
    });
}

// --- Flight Search Page ---
function renderFlightSearchPage() {
    const s = state.flights;
    const content = Card(`
        <form id="flight-search-form" data-testid="flight-search-form">
            <div class="flex gap-4 mb-4" data-testid="flight-type-toggle">
                <label class="flex items-center gap-2"><input type="radio" name="flightType" value="round-trip" ${s.flightType === 'round-trip' ? 'checked' : ''}> Round Trip</label>
                <label class="flex items-center gap-2"><input type="radio" name="flightType" value="one-way" ${s.flightType === 'one-way' ? 'checked' : ''}> One Way</label>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
                <div><label class="block text-sm font-medium">From</label><select data-testid="flight-from" name="from" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md">${AIRPORTS.map(a => `<option value="${a.code}" ${s.searchParams.from === a.code ? 'selected' : ''}>${a.name}</option>`).join('')}</select></div>
                <div><label class="block text-sm font-medium">To</label><select data-testid="flight-to" name="to" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md">${AIRPORTS.map(a => `<option value="${a.code}" ${s.searchParams.to === a.code ? 'selected' : ''}>${a.name}</option>`).join('')}</select></div>
                <div><label class="block text-sm font-medium">Depart</label><input data-testid="flight-depart-date" name="depart" type="date" value="${s.searchParams.depart}" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md"></div>
                <div><label class="block text-sm font-medium">Return</label><input data-testid="flight-return-date" name="return" type="date" value="${s.searchParams.return}" ${s.flightType === 'one-way' ? 'disabled' : ''} class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md disabled:bg-slate-100 dark:disabled:bg-slate-800"></div>
                <div><label class="block text-sm font-medium">Passengers</label><input data-testid="flight-passengers" name="passengers" type="number" min="1" value="${s.searchParams.passengers}" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md"></div>
            </div>
            <div class="mt-6 flex justify-center">
                <button type="submit" class="w-full md:w-auto rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500" data-testid="flight-search-button">
                    <div class="flex items-center justify-center gap-2">${ICONS.search} Search Flights</div>
                </button>
            </div>
        </form>
    `);
    return PageWrapper('Flight Search', content, '/flights');
}
function initFlightSearchPage() {
    const s = state.flights;
    const reRender = () => router.route();
    const form = document.getElementById('flight-search-form');

    form.addEventListener('change', e => {
        if (e.target.name === 'flightType') {
            s.flightType = e.target.value;
            reRender();
        } else {
            s.searchParams[e.target.name] = e.target.value;
        }
    });
    form.addEventListener('submit', e => {
        e.preventDefault();
        addToast('Searching for flights...', 'info');
    });
}

// --- Movie Booking Page ---
function renderMovieBookingPage() {
    const s = state.movies;
    const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
    const seatsPerRow = 8;
    const totalCost = s.selectedSeats.size * 12;

    const seatsHTML = rows.map(row => `
        <div class="flex gap-2 sm:gap-3">
            ${Array.from({length: seatsPerRow}, (_, i) => {
                const seatId = `${row}${i + 1}`;
                const isOccupied = s.occupiedSeats.has(seatId);
                const isSelected = s.selectedSeats.has(seatId);
                let seatClass = 'w-8 h-8 sm:w-10 sm:h-10 rounded-md cursor-pointer transition-colors ';
                if(isOccupied) seatClass += 'bg-slate-400 dark:bg-slate-600 cursor-not-allowed';
                else if (isSelected) seatClass += 'bg-primary-500 hover:bg-primary-600';
                else seatClass += 'bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500';
                return `<div data-seat-id="${seatId}" data-testid="seat-${seatId}" class="${seatClass}"></div>`;
            }).join('')}
        </div>
    `).join('');

    const content = `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2">
            ${Card(`
                ${SectionTitle('Select Your Seats')}
                <div class="p-4 bg-slate-100 dark:bg-slate-900 rounded-lg">
                    <div class="w-full h-12 bg-slate-300 dark:bg-slate-600 rounded-md flex items-center justify-center text-lg font-bold text-slate-700 dark:text-slate-300 mb-8">SCREEN</div>
                    <div data-testid="seat-map" class="flex flex-col items-center gap-3">${seatsHTML}</div>
                </div>
            `)}
        </div>
        <div>
             ${Card(`
                ${SectionTitle('Booking Summary')}
                <div class="space-y-4">
                    <div>
                        <h4 class="font-semibold">Selected Seats:</h4>
                        <p data-testid="selected-seats" class="text-slate-600 dark:text-slate-400 min-h-[20px]">${Array.from(s.selectedSeats).sort().join(', ') || 'None'}</p>
                    </div>
                     <div>
                        <h4 class="font-semibold">Total Cost:</h4>
                        <p data-testid="total-cost" class="text-2xl font-bold text-primary-600">$${totalCost.toFixed(2)}</p>
                    </div>
                    <button id="book-tickets-btn" class="w-full rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500" ${s.selectedSeats.size === 0 ? 'disabled' : ''}>
                        Book Tickets
                    </button>
                </div>
            `)}
        </div>
    </div>
    `;
    return PageWrapper('Movie Ticket Booking', content, '/movies');
}
function initMovieBookingPage() {
    const s = state.movies;
    const reRender = () => router.route();

    document.querySelectorAll('[data-seat-id]').forEach(seat => {
        seat.addEventListener('click', e => {
            const seatId = e.currentTarget.dataset.seatId;
            if (s.occupiedSeats.has(seatId)) return;
            if (s.selectedSeats.has(seatId)) {
                s.selectedSeats.delete(seatId);
            } else {
                s.selectedSeats.add(seatId);
            }
            reRender();
        });
    });

    document.getElementById('book-tickets-btn').addEventListener('click', () => {
        if (s.selectedSeats.size > 0) {
            addToast('Booking Confirmed!', 'success');
        }
    });
}

// --- Advanced Features Page ---
function renderAdvancedFeaturesPage() {
    const s = state.advanced;
    
    // Sort table data
    const sortedTableData = [...s.tableData].sort((a, b) => {
        if (s.sortConfig) {
            const aValue = a[s.sortConfig.key];
            const bValue = b[s.sortConfig.key];
            if (aValue < bValue) return s.sortConfig.direction === 'asc' ? -1 : 1;
            if (aValue > bValue) return s.sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
    });

    const SortableHeader = (key, label) => {
        const isSorted = s.sortConfig?.key === key;
        const icon = isSorted ? (s.sortConfig.direction === 'asc' ? ICONS.chevronUp : ICONS.chevronDown) : '';
        return `<th class="p-3 text-left cursor-pointer" data-sort-key="${key}"><div class="flex items-center gap-1">${label} ${icon}</div></th>`;
    }

    const content = `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        ${Card(`
            ${SectionTitle('Dashboard Charts')}
            <div data-testid="charts-container" class="h-72">
                 <svg width="100%" height="100%" viewBox="0 0 500 250">
                    <g class="recharts-layer recharts-cartesian-grid">
                      <line stroke="#ccc" stroke-dasharray="3 3" x1="50" y1="20" x2="50" y2="220"></line>
                      <line stroke="#ccc" stroke-dasharray="3 3" x1="450" y1="20" x2="450" y2="220"></line>
                      <line stroke="#ccc" stroke-dasharray="3 3" x1="50" y1="220" x2="450" y2="220"></line>
                    </g>
                    <g class="recharts-layer recharts-bar">
                      <rect x="70" y="60" width="40" height="160" fill="#8884d8"></rect>
                      <rect x="150" y="100" width="40" height="120" fill="#82ca9d"></rect>
                      <rect x="230" y="20" width="40" height="200" fill="#8884d8"></rect>
                      <rect x="310" y="80" width="40" height="140" fill="#82ca9d"></rect>
                      <rect x="390" y="140" width="40" height="80" fill="#8884d8"></rect>
                    </g>
                     <g class="recharts-layer recharts-x-axis">
                        <text x="90" y="240" text-anchor="middle">Jan</text>
                        <text x="170" y="240" text-anchor="middle">Feb</text>
                        <text x="250" y="240" text-anchor="middle">Mar</text>
                        <text x="330" y="240" text-anchor="middle">Apr</text>
                        <text x="410" y="240" text-anchor="middle">May</text>
                     </g>
                </svg>
            </div>
        `)}
        ${Card(`
            ${SectionTitle('Drag and Drop List')}
            <div data-testid="dnd-list" id="dnd-list" class="space-y-2">
                ${s.dndItems.map((item, index) => `
                    <div data-testid="dnd-item-${index}" class="p-3 bg-slate-100 dark:bg-slate-700 rounded-md cursor-grab active:cursor-grabbing" draggable="true" data-dnd-index="${index}">
                        ${item}
                    </div>
                `).join('')}
            </div>
        `)}
        ${Card(`
            ${SectionTitle('Sortable Table')}
            <div class="overflow-x-auto">
                <table data-testid="sortable-table" class="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                   <thead class="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
                        <tr>${SortableHeader('id', 'ID')}${SortableHeader('name', 'Name')}${SortableHeader('age', 'Age')}${SortableHeader('city', 'City')}</tr>
                    </thead>
                    <tbody>
                        ${sortedTableData.map(row => `
                            <tr class="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                                <td class="p-3">${row.id}</td>
                                <td class="p-3 font-medium text-slate-900 dark:text-white">${row.name}</td>
                                <td class="p-3">${row.age}</td>
                                <td class="p-3">${row.city}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `, 'lg:col-span-2')}
        ${Card(`
            ${SectionTitle('IFrame Example')}
            <iframe data-testid="sample-iframe" class="w-full h-96 border border-slate-300 dark:border-slate-700 rounded-md" srcdoc="<html><head><style>body{font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; color: #3b82f6;}</style></head><body><h1>Hello from within the iframe!</h1></body></html>" title="Sample IFrame"></iframe>
        `, 'lg:col-span-2')}
    </div>
    `;
    return PageWrapper('Advanced Features', content, '/advanced');
}
function initAdvancedFeaturesPage() {
    const s = state.advanced;
    const reRender = () => router.route();

    // D&D
    const dndContainer = document.getElementById('dnd-list');
    let dragItem = null;
    dndContainer.addEventListener('dragstart', e => {
        dragItem = e.target;
        e.target.classList.add('dragging');
    });
    dndContainer.addEventListener('dragover', e => {
        e.preventDefault();
        const dragOverItem = e.target.closest('[data-dnd-index]');
        if (dragOverItem && dragItem !== dragOverItem) {
            const items = Array.from(dndContainer.children);
            const fromIndex = items.indexOf(dragItem);
            const toIndex = items.indexOf(dragOverItem);
            if (fromIndex < toIndex) {
                dndContainer.insertBefore(dragItem, dragOverItem.nextSibling);
            } else {
                dndContainer.insertBefore(dragItem, dragOverItem);
            }
        }
    });
    dndContainer.addEventListener('dragend', e => {
        e.target.classList.remove('dragging');
        const newOrder = Array.from(dndContainer.children).map(child => child.textContent.trim());
        s.dndItems = newOrder;
        dragItem = null;
    });

    // Sortable Table
    document.querySelectorAll('[data-sort-key]').forEach(th => {
        th.addEventListener('click', e => {
            const key = e.currentTarget.dataset.sortKey;
            let direction = 'asc';
            if (s.sortConfig && s.sortConfig.key === key && s.sortConfig.direction === 'asc') {
                direction = 'desc';
            }
            s.sortConfig = { key, direction };
            reRender();
        });
    });
}

// =================================================================================
// ROUTER
// =================================================================================
const routes = {
    '/': { render: renderHomePage, init: () => {}, pageKey: '/' },
    '/elements': { render: renderUiElementsPage, init: initUiElementsPage, pageKey: '/elements' },
    '/forms': { render: renderFormsPage, init: initFormsPage, pageKey: '/forms' },
    '/ecommerce': { render: renderEcommercePage, init: initEcommercePage, pageKey: '/ecommerce' },
    '/hotel': { render: renderHotelBookingPage, init: initHotelBookingPage, pageKey: '/hotel' },
    '/flights': { render: renderFlightSearchPage, init: initFlightSearchPage, pageKey: '/flights' },
    '/movies': { render: renderMovieBookingPage, init: initMovieBookingPage, pageKey: '/movies' },
    '/advanced': { render: renderAdvancedFeaturesPage, init: initAdvancedFeaturesPage, pageKey: '/advanced' },
};

const router = {
    route: () => {
        let path = window.location.hash.slice(1) || '/';
        if (!routes[path]) path = '/'; // Fallback to home

        const route = routes[path];

        // Reset state for the page if it doesn't exist
        if (!state[route.pageKey]) {
            resetState(route.pageKey);
        }

        // Render page
        appContent.innerHTML = route.render();
        // Attach event listeners
        route.init();

        // Attach reset button listener
        const resetButton = document.querySelector(`[data-reset-page="${route.pageKey}"]`);
        if (resetButton) {
            resetButton.addEventListener('click', () => {
                resetState(route.pageKey);
                addToast('Page state has been reset', 'info');
                router.route();
            });
        }
        
        updateActiveNav(path);
        
        // Close sidebar on navigation
        if (sidebarContainer.classList.contains('translate-x-0') && window.innerWidth < 768) {
            sidebarOpenBtn.click();
        }
    }
};

// =================================================================================
// INITIALIZATION
// =================================================================================
function init() {
    renderSidebar();
    initTheme();
    initSidebarToggle();
    
    // Set initial page states
    Object.keys(routes).forEach(key => resetState(routes[key].pageKey));
    
    window.addEventListener('hashchange', router.route);
    
    // Initial route
    router.route();
}

init();

});
