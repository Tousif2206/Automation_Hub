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
    film: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>',
    puzzle: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.43 12.05c.29.3.43.72.43 1.15v2.8c0 1.66-1.34 3-3 3h-2.8c-.43 0-.85.14-1.15.43l-1.82 1.82c-.9.9-2.36.9-3.27 0L5.98 19.43c-.3-.29-.72-.43-1.15-.43H2c-1.66 0-3-1.34-3-3v-2.8c0-.43.14-.85.43-1.15l1.82-1.82c.9-.9.9-2.36 0-3.27L1.43 5.98C1.14 5.68 1 5.26 1 4.83V2c0-1.66 1.34-3 3-3h2.8c.43 0 .85-.14 1.15-.43l1.82-1.82c.9-.9 2.36-.9 3.27 0l1.82 1.82c.3.29.72.43 1.15.43H18c1.66 0 3 1.34 3 3v2.8c0 .43-.14.85-.43 1.15l-1.82 1.82c-.9.9-.9 2.36 0 3.27l1.82 1.82z"/></svg>',
    checkCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    xCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-500"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
    x: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    sun: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    moon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    eye: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    eyeOff: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>',
    plus: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    minus: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    trash2: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    chevronDown: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
};

// =================================================================================
// CONSTANTS & DATA
// =================================================================================
const NAV_ITEMS = [
  { path: '/', label: 'Home', icon: ICONS.home },
  { path: '/ecommerce', label: 'E-Commerce', icon: ICONS.shoppingCart },
  { path: '/hotel', label: 'Hotel Booking', icon: ICONS.hotel },
  { path: '/movies', label: 'Movie Booking', icon: ICONS.film },
  { path: '/forms', label: 'Forms', icon: ICONS.edit3 },
  { path: '/elements', label: 'UI Elements', icon: ICONS.list },
  { path: '/advanced', label: 'Advanced', icon: ICONS.puzzle },
];

const ECOMMERCE_PRODUCTS = [
    { id: 1, name: 'Wireless Headphones', category: 'Electronics', brand: 'SoundWave', color: 'Black', size: 'One Size', price: 199.99, rating: 4.5, onSale: true, image: 'https://picsum.photos/seed/hp/400/300' },
    { id: 2, name: 'Classic T-Shirt', category: 'Clothing', brand: 'UrbanThreads', color: 'White', size: 'M', price: 24.99, rating: 4.2, onSale: false, image: 'https://picsum.photos/seed/shirt/400/300' },
    { id: 3, name: 'Smart Watch', category: 'Electronics', brand: 'TechGear', color: 'Silver', size: '44mm', price: 299.99, rating: 4.8, onSale: false, image: 'https://picsum.photos/seed/watch/400/300' },
    { id: 4, name: 'Denim Jeans', category: 'Clothing', brand: 'UrbanThreads', color: 'Blue', size: '32/32', price: 89.99, rating: 4.6, onSale: true, image: 'https://picsum.photos/seed/jeans/400/300' },
    { id: 5, name: 'Running Shoes', category: 'Shoes', brand: 'FastLane', color: 'Red', size: '10', price: 129.99, rating: 4.7, onSale: false, image: 'https://picsum.photos/seed/shoes/400/300' },
    { id: 6, name: 'Leather Jacket', category: 'Clothing', brand: 'UrbanThreads', color: 'Black', size: 'L', price: 249.99, rating: 4.9, onSale: false, image: 'https://picsum.photos/seed/jacket/400/300' },
    { id: 7, name: 'Gaming Mouse', category: 'Electronics', brand: 'TechGear', color: 'Black', size: 'One Size', price: 79.99, rating: 4.4, onSale: true, image: 'https://picsum.photos/seed/mouse/400/300' },
    { id: 8, name: 'Sneakers', category: 'Shoes', brand: 'FastLane', color: 'White', size: '9', price: 99.99, rating: 4.3, onSale: false, image: 'https://picsum.photos/seed/sneakers/400/300' },
];

const HOTEL_ROOMS = [
    { id: 1, name: 'Standard Queen Room', price: 150, amenities: ['WiFi', 'TV', 'AC'], rating: 4.2, image: 'https://picsum.photos/seed/hotel1/400/300' },
    { id: 2, name: 'Deluxe King Suite', price: 250, amenities: ['WiFi', 'TV', 'AC', 'Mini Bar', 'Ocean View'], rating: 4.8, image: 'https://picsum.photos/seed/hotel2/400/300' },
    { id: 3, name: 'Family Room', price: 200, amenities: ['WiFi', 'TV', 'AC', '2 Queen Beds'], rating: 4.5, image: 'https://picsum.photos/seed/hotel3/400/300' },
    { id: 4, name: 'Economy Twin Room', price: 120, amenities: ['WiFi', 'Shared Bathroom'], rating: 3.9, image: 'https://picsum.photos/seed/hotel4/400/300' },
];

const MOVIES_DATA = [
    { id: 1, title: 'Galaxy Quest', genre: 'Sci-Fi', language: 'English', rating: 4.9, duration: '1h 42m', poster: 'https://picsum.photos/seed/movie1/400/600', description: 'The alumni cast of a space opera television series have to play their roles as the real thing when an alien race needs their help.' },
    { id: 2, title: 'The Grand Adventure', genre: 'Adventure', language: 'English', rating: 4.7, duration: '2h 10m', poster: 'https://picsum.photos/seed/movie2/400/600', description: 'A group of unlikely heroes embarks on a journey to find a lost city of gold, facing treacherous challenges along the way.' },
    { id: 3, title: 'Cybernetic Dreams', genre: 'Sci-Fi', language: 'Japanese', rating: 4.8, duration: '2h 25m', poster: 'https://picsum.photos/seed/movie3/400/600', description: 'In a futuristic city, a detective hunts down a rogue android that believes it\'s human.' },
    { id: 4, title: 'Laugh Riot', genre: 'Comedy', language: 'English', rating: 4.5, duration: '1h 35m', poster: 'https://picsum.photos/seed/movie4/400/600', description: 'A stand-up comedian gets into a world of trouble when he accidentally becomes a getaway driver for a bank robbery.' },
    { id: 5, title: 'Echoes of the Past', genre: 'Drama', language: 'French', rating: 4.6, duration: '2h 05m', poster: 'https://picsum.photos/seed/movie5/400/600', description: 'A historian discovers a series of letters that unveil a hidden family secret from a bygone era.' },
    { id: 6, title: 'Midnight Mystery', genre: 'Thriller', language: 'English', rating: 4.4, duration: '1h 55m', poster: 'https://picsum.photos/seed/movie6/400/600', description: 'A private investigator takes on a case that spirals into a dark conspiracy in the heart of the city.' },
];

const TODAY = new Date();
const TOMORROW = new Date(TODAY);
TOMORROW.setDate(TOMORROW.getDate() + 1);

// =================================================================================
// STATE
// =================================================================================
let state = {};
let timers = {
    dealCountdown: null
};

function clearAllTimers() {
    Object.values(timers).forEach(timer => clearInterval(timer));
}

function resetState(pageKey) {
    clearAllTimers();
    switch(pageKey) {
        case '/elements':
            state.uiElements = { inputs: { text: '', number: '', email: '', password: '', date: '', autocomplete: '' }, showPassword: false, radioValue: 'option1', checkboxes: { cb1: false, cb2: true }, dropdownValue: '2', sliderValue: 50, isModalOpen: false, alert: null, fileName: '', dynamicContent: [], isLoading: false };
            break;
        case '/forms':
             state.forms = { contactForm: { name: '', email: '', message: '' }, contactStatus: '', loginForm: { username: '', password: '' }, loginStatus: '', showPassword: false, step: 1, multiStepForm: { personal: {firstName: '', lastName: ''}, account: {email: '', password: ''}}, multiStepStatus: '' };
            break;
        case '/ecommerce':
            const allColors = [...new Set(ECOMMERCE_PRODUCTS.map(p => p.color))];
            const allBrands = [...new Set(ECOMMERCE_PRODUCTS.map(p => p.brand))];
            const allSizes = [...new Set(ECOMMERCE_PRODUCTS.map(p => p.size))];
            state.ecommerce = {
                filters: {
                    category: 'All',
                    price: 300,
                    colors: allColors,
                    brands: allBrands,
                    sizes: allSizes,
                },
                sortOrder: 'rating_desc',
                cart: [],
                modalProductId: null,
                dealEnds: Date.now() + 24 * 60 * 60 * 1000,
            };
            break;
        case '/hotel':
            state.hotel = { search: { location: 'New York', checkIn: TODAY.toISOString().split('T')[0], checkOut: TOMORROW.toISOString().split('T')[0], guests: 2 }, filters: { rating: 0, amenities: [] }, rooms: [], isSearching: false };
            break;
        case '/movies':
            state.movies = {
                view: 'list', // 'list', 'details', 'seats'
                filters: { genre: 'All', language: 'All' },
                selectedMovieId: null,
                selectedShowtime: null,
                selectedSeats: new Set(),
                occupiedSeats: new Set(['A3', 'B5', 'B6', 'D1', 'E7', 'F4', 'C2', 'C3']),
                discountCode: '',
                discountApplied: false,
                isBookingConfirmed: false,
            };
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
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

function addToast(message, type = 'info') {
    const id = Date.now();
    const toastIcons = { success: ICONS.checkCircle, error: ICONS.xCircle };
    const toast = document.createElement('div');
    toast.className = 'flex items-center w-full max-w-xs p-4 text-slate-500 bg-white rounded-lg shadow-lg dark:text-slate-400 dark:bg-slate-800 transform transition-all duration-300 animate-fade-in-right';
    toast.setAttribute('data-testid', `toast-${type}`);
    toast.innerHTML = `
        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg">${toastIcons[type] || ''}</div>
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
            <button id="theme-toggle" class="p-2 rounded-full text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors" aria-label="Toggle theme" data-testid="theme-toggle">
                ${theme === 'light' ? ICONS.moon : ICONS.sun}
            </button>
        `;
    };
    
    const updateToggles = () => {
        const toggleHTML = renderToggle();
        if (themeToggleDesktopContainer) themeToggleDesktopContainer.innerHTML = toggleHTML;
        if (themeToggleMobileContainer) themeToggleMobileContainer.innerHTML = toggleHTML;
        document.querySelectorAll('#theme-toggle').forEach(btn => btn.addEventListener('click', toggleTheme));
    };

    const toggleTheme = () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateToggles();
    };

    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    updateToggles();
}

function renderHeaderNav() {
    const desktopNavContainer = document.getElementById('desktop-nav');
    const mobileNavContainer = document.getElementById('mobile-nav');

    const navLinksHTML = NAV_ITEMS.map(item => `
        <a href="#${item.path}" data-nav-path="${item.path}" class="nav-link text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100 rounded-md px-3 py-2 text-sm font-medium transition-colors">
            ${item.label}
        </a>
    `).join('');
    
    const mobileNavLinksHTML = NAV_ITEMS.map(item => `
        <a href="#${item.path}" data-nav-path="${item.path}" class="nav-link text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-slate-100 block rounded-md px-3 py-2 text-base font-medium transition-colors">
            ${item.label}
        </a>
    `).join('');

    desktopNavContainer.innerHTML = navLinksHTML;
    mobileNavContainer.innerHTML = mobileNavLinksHTML;
}

function updateActiveNav(path) {
    document.querySelectorAll('[data-nav-path]').forEach(link => {
        const linkPath = link.getAttribute('data-nav-path');
        if (linkPath === path) {
            link.classList.add('bg-primary-50', 'dark:bg-primary-900/50', 'text-primary-700', 'dark:text-primary-300');
            link.classList.remove('text-slate-500', 'dark:text-slate-300');
        } else {
            link.classList.remove('bg-primary-50', 'dark:bg-primary-900/50', 'text-primary-700', 'dark:text-primary-300');
            link.classList.add('text-slate-500', 'dark:text-slate-300');
        }
    });
}

function initMobileMenu() {
    mobileMenuButton.addEventListener('click', () => {
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('hidden');
        document.getElementById('mobile-menu-open-icon').classList.toggle('hidden');
        document.getElementById('mobile-menu-close-icon').classList.toggle('hidden');
    });
}

// =================================================================================
// PAGE TEMPLATES & INITIALIZERS
// =================================================================================

const PageWrapper = (title, content, pageKey, showReset = true) => `
    <div class="animate-fade-in-up">
         <div class="flex justify-between items-center mb-6 flex-wrap gap-4">
            <h1 class="text-3xl font-bold text-slate-900 dark:text-slate-100">${title}</h1>
            ${showReset && pageKey ? `<button data-reset-page="${pageKey}" class="rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 focus:ring-slate-500" data-testid="reset-page-button">Reset Page</button>` : ''}
        </div>
        ${content}
    </div>`;
const Card = (content, extraClasses = '') => `<div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 ${extraClasses}">${content}</div>`;
const SectionTitle = (title) => `<h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 border-b border-slate-300 dark:border-slate-700 pb-2">${title}</h2>`;

// --- Home Page ---
function renderHomePage() {
    const content = `
    <div class="space-y-12">
        <!-- Hero Section -->
        <div class="text-center py-16 bg-primary-500/10 dark:bg-primary-900/20 rounded-lg">
            <h2 class="text-4xl md:text-5xl font-extrabold text-primary-700 dark:text-primary-300">A Sandbox for Automation</h2>
            <p class="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">Practice, refine, and master your web automation skills on a site built for testing. Explore complex UI elements, realistic forms, and dynamic content.</p>
        </div>

        <!-- Animated Counters -->
        <div data-testid="counters-section" class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            ${Card(`<p class="text-4xl font-bold text-primary-600 dark:text-primary-400" data-counter-target="150">0</p><p class="mt-2 text-slate-500">UI Elements</p>`)}
            ${Card(`<p class="text-4xl font-bold text-primary-600 dark:text-primary-400" data-counter-target="5">0</p><p class="mt-2 text-slate-500">App Simulations</p>`)}
            ${Card(`<p class="text-4xl font-bold text-primary-600 dark:text-primary-400" data-counter-target="99">0</p><p class="mt-2 text-slate-500">% Test-Friendly</p>`)}
        </div>

        <!-- Features (Tabs) -->
        <div data-testid="features-tabs-section">
            ${SectionTitle('Key Features')}
            <div class="flex border-b border-slate-200 dark:border-slate-700 mb-4">
                <button data-tab="ecommerce" class="tab-button p-4 border-b-2 border-transparent font-medium text-slate-500 hover:text-primary-500 active">E-Commerce</button>
                <button data-tab="booking" class="tab-button p-4 border-b-2 border-transparent font-medium text-slate-500 hover:text-primary-500">Booking Flows</button>
                <button data-tab="advanced" class="tab-button p-4 border-b-2 border-transparent font-medium text-slate-500 hover:text-primary-500">Advanced UI</button>
            </div>
            <div id="features-content">
                <!-- Tab content is rendered by initHomePage -->
            </div>
        </div>

        <!-- FAQ (Accordion) -->
        <div data-testid="faq-accordion-section">
            ${SectionTitle('Frequently Asked Questions')}
            <div class="space-y-2">
                <div class="accordion-item" data-testid="faq-1">
                    <div class="accordion-header bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-700/60 p-4 rounded-lg cursor-pointer flex justify-between items-center">
                        <h3 class="font-semibold">What is this site for?</h3>
                        <span class="transform transition-transform duration-300">${ICONS.chevronDown}</span>
                    </div>
                    <div class="accordion-content p-4 pt-0">
                        <p>This is a practice website for QA engineers and developers to test their automation scripts. It includes a variety of elements and scenarios found in real-world web applications.</p>
                    </div>
                </div>
                 <div class="accordion-item" data-testid="faq-2">
                    <div class="accordion-header bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-700/60 p-4 rounded-lg cursor-pointer flex justify-between items-center">
                        <h3 class="font-semibold">Are the elements stable for testing?</h3>
                         <span class="transform transition-transform duration-300">${ICONS.chevronDown}</span>
                    </div>
                    <div class="accordion-content p-4 pt-0">
                        <p>Yes! All elements have stable selectors, including `data-testid` attributes, to make them easy to target. The "Reset Page" button allows you to return to a predictable state for repeatable tests.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    return PageWrapper('Welcome!', content, '/', false);
}
function initHomePage() {
    // Animated Counters
    const counters = document.querySelectorAll('[data-counter-target]');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.dataset.counterTarget;
                let current = 0;
                const increment = target / 100;

                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.innerText = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.8 });
    counters.forEach(counter => observer.observe(counter));
    
    // Accordion
    document.querySelectorAll('.accordion-item').forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const icon = header.querySelector('span');
        header.addEventListener('click', () => {
            const isOpen = content.classList.contains('open');
            document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open', 'p-4', 'pt-4'));
            document.querySelectorAll('.accordion-header span').forEach(i => i.style.transform = '');
            if (!isOpen) {
                content.classList.add('open', 'p-4', 'pt-4');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    // Tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContentContainer = document.getElementById('features-content');
    const tabContents = {
        ecommerce: Card(`<strong>Advanced E-Commerce Simulation:</strong> Test a full shopping experience with multi-level filtering (category, brand, color, size), sorting, a shopping cart, product preview modals, and a live "Deal of the Day" countdown timer.`, 'animate-fade-in'),
        booking: Card(`<strong>Realistic Booking Flows:</strong> Practice on multi-step booking forms for hotels and movies. Handle date pickers, dynamic room listings, interactive seat maps, and discount code validation.`, 'animate-fade-in'),
        advanced: Card(`<strong>Complex UI Interactions:</strong> Challenge your scripts with advanced elements like drag-and-drop lists, sortable tables, iframes, dynamic content loading, and various types of alerts and modals.`, 'animate-fade-in'),
    };
    const switchTab = (tabName) => {
        tabContentContainer.innerHTML = tabContents[tabName];
        tabButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabName);
        });
    };
    tabButtons.forEach(btn => btn.addEventListener('click', () => switchTab(btn.dataset.tab)));
    switchTab('ecommerce'); // Default tab
}

// --- UI Elements Page ---
function renderUiElementsPage() { return PageWrapper('UI Elements', 'Coming Soon...', '/elements'); }
function initUiElementsPage() {}

// --- Forms Page ---
function renderFormsPage() { return PageWrapper('Forms', 'Coming Soon...', '/forms'); }
function initFormsPage() {}

// --- E-Commerce Page ---
function renderEcommercePage() {
    const s = state.ecommerce;
    const { category, price, colors, brands, sizes } = s.filters;

    const allCategories = ['All', ...new Set(ECOMMERCE_PRODUCTS.map(p => p.category))];
    const allBrands = [...new Set(ECOMMERCE_PRODUCTS.map(p => p.brand))];
    const allColors = [...new Set(ECOMMERCE_PRODUCTS.map(p => p.color))];
    const allSizes = [...new Set(ECOMMERCE_PRODUCTS.map(p => p.size))];

    let filteredProducts = ECOMMERCE_PRODUCTS
        .filter(p => (category === 'All' || p.category === category))
        .filter(p => p.price <= price)
        .filter(p => s.filters.brands.includes(p.brand))
        .filter(p => s.filters.colors.includes(p.color))
        .filter(p => s.filters.sizes.includes(p.size));

    filteredProducts.sort((a, b) => {
        if (s.sortOrder === 'price_asc') return a.price - b.price;
        if (s.sortOrder === 'rating_desc') return b.rating - a.rating;
        return 0;
    });

    const productsHTML = filteredProducts.length ? filteredProducts.map(product => {
        const ratingHTML = `<div class="flex items-center" data-testid="product-rating-${product.id}">${Array(5).fill(0).map((_, i) => `<span class="${i < Math.round(product.rating) ? 'star-rating' : 'empty-star'}">${ICONS.star}</span>`).join('')} <span class="text-xs ml-1 text-slate-500">(${product.rating})</span></div>`;
        return Card(`
            <div class="relative">
                <img src="${product.image}" alt="${product.name}" class="rounded-md h-48 w-full object-cover cursor-pointer" data-open-product-modal="${product.id}" />
                ${product.onSale ? `<div class="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full" data-testid="sale-badge-${product.id}">SALE</div>` : ''}
            </div>
            <h3 class="text-lg font-bold mt-4 truncate">${product.name}</h3>
            <p class="text-sm text-slate-500">${product.brand}</p>
            <div class="flex justify-between items-center mt-2">
                <p class="text-xl font-semibold text-primary-600 dark:text-primary-400">$${product.price.toFixed(2)}</p>
                ${ratingHTML}
            </div>
            <button data-add-to-cart="${product.id}" data-testid="add-to-cart-${product.id}" class="w-full mt-4 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500">Add to Cart</button>
        `, 'flex flex-col relative');
    }).join('') : `<p class="md:col-span-2 xl:col-span-3 text-center py-10 text-slate-500">No products match your filters.</p>`;

    const cartTotal = s.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    const cartItemsHTML = s.cart.length === 0 ? `<p data-testid="empty-cart-message">Your cart is empty.</p>` : s.cart.map(item => `
        <div data-testid="cart-item-${item.id}" class="flex items-center justify-between border-b pb-2 mb-2 dark:border-slate-700">
            <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded-md object-cover mr-4"/>
            <div class="flex-grow"><p class="font-semibold">${item.name}</p><p class="text-sm text-slate-500">$${item.price.toFixed(2)}</p></div>
            <div class="flex items-center gap-2">
                <button data-update-quantity="${item.id}" data-amount="-1" class="p-1 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600">${ICONS.minus}</button>
                <span data-testid="cart-item-quantity-${item.id}" class="w-6 text-center">${item.quantity}</span>
                <button data-update-quantity="${item.id}" data-amount="1" class="p-1 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600">${ICONS.plus}</button>
                <button data-update-quantity="${item.id}" data-amount="0" class="p-1 rounded-full text-red-500 hover:bg-red-100 dark:hover:bg-red-900/50">${ICONS.trash2}</button>
            </div>
        </div>
    `).join('') + `<div class="text-right font-bold text-xl mt-4">Total: <span data-testid="cart-total">$${cartTotal}</span></div>`;
    
    const modalProduct = ECOMMERCE_PRODUCTS.find(p => p.id === s.modalProductId);
    const modalHTML = modalProduct ? `
      <div id="product-modal-overlay" data-testid="product-modal-overlay" class="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 animate-fade-in">
        <div class="bg-white dark:bg-slate-800 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row" data-testid="product-modal-content">
          <button id="product-modal-close" class="absolute top-2 right-2 text-slate-500 hover:text-slate-800 dark:hover:text-white z-10">${ICONS.x}</button>
          <img src="${modalProduct.image}" alt="${modalProduct.name}" class="w-full md:w-1/2 h-64 md:h-auto object-cover rounded-l-lg product-modal-image"/>
          <div class="p-6 flex-grow overflow-y-auto">
            <h2 class="text-3xl font-bold">${modalProduct.name}</h2>
            <p class="text-lg text-slate-500 dark:text-slate-400">${modalProduct.brand}</p>
            <div class="flex items-center my-4">${Array(5).fill(0).map((_, i) => `<span class="${i < Math.round(modalProduct.rating) ? 'star-rating' : 'empty-star'}">${ICONS.star}</span>`).join('')} <span class="ml-2 text-slate-500">(${modalProduct.rating} rating)</span></div>
            <p class="text-3xl font-bold text-primary-600 dark:text-primary-400">$${modalProduct.price.toFixed(2)}</p>
            <p class="mt-4 text-slate-600 dark:text-slate-300">A high-quality ${modalProduct.category.toLowerCase()} available in ${modalProduct.color.toLowerCase()}. This is a placeholder description, but it's perfect for testing your automation scripts against modal content.</p>
            <button data-add-to-cart="${modalProduct.id}" class="w-full mt-6 rounded-md font-semibold px-4 py-3 bg-primary-600 text-white hover:bg-primary-700">Add to Cart</button>
          </div>
        </div>
      </div>
    ` : '';

    const content = `
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <!-- Filters -->
        <div class="lg:col-span-1 space-y-6">
            ${Card(`
                ${SectionTitle('Filters')}
                <div>
                    <h4 class="font-semibold mb-2">Sort By</h4>
                     <select id="sort-order" data-testid="sort-order-select" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md">
                        <option value="rating_desc" ${s.sortOrder === 'rating_desc' ? 'selected' : ''}>Rating: High to Low</option>
                        <option value="price_asc" ${s.sortOrder === 'price_asc' ? 'selected' : ''}>Price: Low to High</option>
                    </select>
                </div>
                <div>
                    <h4 class="font-semibold mb-2">Category</h4>
                    <select id="category-filter" data-testid="category-filter" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md">
                        ${allCategories.map(c => `<option value="${c}" ${category === c ? 'selected' : ''}>${c}</option>`).join('')}
                    </select>
                </div>
                <div>
                    <label for="price-range" class="font-semibold mb-2 block">Max Price: <span data-testid="price-filter-value">$${price}</span></label>
                    <input id="price-range" data-testid="price-filter" type="range" min="0" max="300" value="${price}" class="w-full">
                </div>
                <div>
                    <h4 class="font-semibold mb-2">Brand</h4>
                    <div class="space-y-1" data-testid="brand-filter">${allBrands.map(b => `<label class="flex items-center gap-2"><input type="checkbox" data-filter-type="brands" value="${b}" ${s.filters.brands.includes(b) ? 'checked' : ''}>${b}</label>`).join('')}</div>
                </div>
                <div>
                    <h4 class="font-semibold mb-2">Color</h4>
                    <div class="space-y-1" data-testid="color-filter">${allColors.map(c => `<label class="flex items-center gap-2"><input type="checkbox" data-filter-type="colors" value="${c}" ${s.filters.colors.includes(c) ? 'checked' : ''}>${c}</label>`).join('')}</div>
                </div>
            `)}
        </div>
        <!-- Products and Cart -->
        <div class="lg:col-span-3 space-y-6">
            <!-- Deal of the day -->
            <div data-testid="deal-of-the-day" class="bg-gradient-to-r from-amber-400 to-red-500 text-white rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                 <div>
                    <h3 class="text-2xl font-bold">Deal of the Day!</h3>
                    <p>Get the Wireless Headphones for 50% off!</p>
                </div>
                <div id="countdown-timer" data-testid="countdown-timer" class="flex gap-2 text-center">
                    <!-- Timer rendered by JS -->
                </div>
            </div>
            ${SectionTitle('Products')}
            <div data-testid="product-list" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">${productsHTML}</div>
             <div class="lg:col-span-3">
                ${Card(`
                    ${SectionTitle('Shopping Cart')}
                    <div data-testid="shopping-cart" class="space-y-4">${cartItemsHTML}</div>
                `)}
            </div>
        </div>
    </div>
    ${modalHTML}
    `;
    return PageWrapper('E-Commerce Store', content, '/ecommerce');
}
function initEcommercePage() {
    const s = state.ecommerce;
    const reRender = () => router.route();
    
    document.getElementById('category-filter').addEventListener('change', e => { s.filters.category = e.target.value; reRender(); });
    document.getElementById('sort-order').addEventListener('change', e => { s.sortOrder = e.target.value; reRender(); });
    document.getElementById('price-range').addEventListener('input', e => { document.querySelector('[data-testid="price-filter-value"]').textContent = `$${e.target.value}`; });
    document.getElementById('price-range').addEventListener('change', e => { s.filters.price = e.target.value; reRender(); });

    document.querySelectorAll('input[type="checkbox"][data-filter-type]').forEach(checkbox => {
        checkbox.addEventListener('change', e => {
            const { filterType, value } = e.target.dataset;
            const set = new Set(s.filters[filterType]);
            if (e.target.checked) set.add(value);
            else set.delete(value);
            s.filters[filterType] = Array.from(set);
            reRender();
        });
    });

    document.querySelectorAll('[data-add-to-cart]').forEach(btn => {
        btn.addEventListener('click', e => {
            const productId = parseInt(e.currentTarget.dataset.addToCart, 10);
            const product = ECOMMERCE_PRODUCTS.find(p => p.id === productId);
            const existingItem = s.cart.find(item => item.id === productId);
            if (existingItem) existingItem.quantity++;
            else s.cart.push({ ...product, quantity: 1 });
            addToast(`${product.name} added to cart`, 'success');
            if(s.modalProductId) { // if modal is open, close it and rerender
                s.modalProductId = null;
            }
            reRender();
        });
    });
    
    document.querySelectorAll('[data-update-quantity]').forEach(btn => {
        btn.addEventListener('click', e => {
            const productId = parseInt(e.currentTarget.dataset.updateQuantity, 10);
            const amount = parseInt(e.currentTarget.dataset.amount, 10);
            const item = s.cart.find(item => item.id === productId);
            if (amount === 0) s.cart = s.cart.filter(i => i.id !== productId);
            else if(item) {
                item.quantity += amount;
                if (item.quantity <= 0) s.cart = s.cart.filter(i => i.id !== productId);
            }
            reRender();
        });
    });
    
    document.querySelectorAll('[data-open-product-modal]').forEach(el => {
        el.addEventListener('click', e => {
            s.modalProductId = parseInt(e.currentTarget.dataset.openProductModal, 10);
            reRender();
        });
    });

    if (s.modalProductId) {
        document.getElementById('product-modal-close').addEventListener('click', () => { s.modalProductId = null; reRender(); });
        document.getElementById('product-modal-overlay').addEventListener('click', (e) => { if (e.target.id === 'product-modal-overlay') { s.modalProductId = null; reRender(); } });
    }
    
    // Countdown Timer
    const countdownContainer = document.getElementById('countdown-timer');
    const updateCountdown = () => {
        const now = Date.now();
        const diff = s.dealEnds - now;
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        
        countdownContainer.innerHTML = `
            <div class="countdown-item"><div class="text-2xl font-bold">${String(d).padStart(2,'0')}</div><div class="text-xs">Days</div></div>
            <div class="countdown-item"><div class="text-2xl font-bold">${String(h).padStart(2,'0')}</div><div class="text-xs">Hours</div></div>
            <div class="countdown-item"><div class="text-2xl font-bold">${String(m).padStart(2,'0')}</div><div class="text-xs">Mins</div></div>
            <div class="countdown-item"><div class="text-2xl font-bold">${String(s).padStart(2,'0')}</div><div class="text-xs">Secs</div></div>
        `;
    };
    if (countdownContainer) {
        updateCountdown();
        timers.dealCountdown = setInterval(updateCountdown, 1000);
    }
}

// --- Hotel Booking Page ---
function renderHotelBookingPage() {
    const s = state.hotel;
    const amenitiesList = ['WiFi', 'Pool', 'Parking', 'Gym'];
    const filteredRooms = s.rooms
        .filter(room => s.filters.rating == 0 || room.rating >= s.filters.rating)
        .filter(room => s.filters.amenities.every(amenity => room.amenities.includes(amenity)));

    const roomsHTML = s.isSearching
        ? `<p class="md:col-span-2 text-center py-10">Searching for rooms...</p>`
        : filteredRooms.map(room => Card(`
            <img src="${room.image}" alt="${room.name}" class="w-full sm:w-1/3 h-48 sm:h-auto object-cover rounded-md"/>
            <div class="flex-grow p-4">
                <h3 class="text-xl font-bold">${room.name}</h3>
                <div class="flex items-center my-2">${Array(5).fill(0).map((_, i) => `<span class="${i < Math.round(room.rating) ? 'star-rating' : 'empty-star'}">${ICONS.star}</span>`).join('')}<span class="text-xs ml-2 text-slate-500">(${room.rating})</span></div>
                <p class="text-sm text-slate-500 my-2">${room.amenities.join(', ')}</p>
                <p class="text-2xl font-bold text-primary-600">$${room.price}<span class="text-base font-normal text-slate-500"> / night</span></p>
                <button data-book-room="${room.id}" class="w-full mt-4 rounded-md font-semibold px-4 py-2 bg-primary-600 text-white hover:bg-primary-700" data-testid="book-room-${room.id}">Book Now</button>
            </div>
        `, 'flex flex-col sm:flex-row gap-0 p-0 overflow-hidden')).join('');

    const content = `
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div class="lg:col-span-1">
            ${Card(`
                ${SectionTitle('Search & Filter')}
                 <form id="hotel-search-form" data-testid="hotel-search-form" class="space-y-4">
                    <div><label class="block text-sm font-medium">Location</label><input data-testid="location-input" name="location" value="${s.search.location}" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md"></div>
                    <div><label class="block text-sm font-medium">Check-in</label><input data-testid="checkin-date" name="checkIn" type="date" value="${s.search.checkIn}" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md"></div>
                    <div><label class="block text-sm font-medium">Check-out</label><input data-testid="checkout-date" name="checkOut" type="date" value="${s.search.checkOut}" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md"></div>
                    <div><label class="block text-sm font-medium">Guests</label><input data-testid="guests-input" name="guests" type="number" min="1" value="${s.search.guests}" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md"></div>
                     <button type="submit" class="w-full rounded-md font-semibold px-4 py-2 bg-primary-600 text-white hover:bg-primary-700" ${s.isSearching ? 'disabled' : ''}>${s.isSearching ? 'Searching...' : 'Search'}</button>
                </form>
                <div class="mt-6">
                    <h4 class="font-semibold mb-2">Rating</h4>
                    <select id="hotel-rating-filter" class="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md">
                        <option value="0">All Ratings</option><option value="4">4 Stars & Up</option><option value="3">3 Stars & Up</option>
                    </select>
                </div>
                 <div class="mt-4">
                    <h4 class="font-semibold mb-2">Amenities</h4>
                    <div class="space-y-1">${amenitiesList.map(a => `<label class="flex items-center gap-2"><input type="checkbox" data-amenity="${a}" ${s.filters.amenities.includes(a) ? 'checked' : ''}>${a}</label>`).join('')}</div>
                </div>
            `)}
        </div>
        <div class="lg:col-span-3">
             <div data-testid="hotel-room-list" class="space-y-6">
                ${roomsHTML || `<p class="text-center py-10 text-slate-500">No rooms found. Try changing your search or filters.</p>`}
            </div>
        </div>
    </div>
    `;
    return PageWrapper('Hotel Booking', content, '/hotel');
}
function initHotelBookingPage() {
    const s = state.hotel;
    const reRender = () => router.route();
    
    document.getElementById('hotel-search-form').addEventListener('input', e => { s.search[e.target.name] = e.target.value; });
    document.getElementById('hotel-rating-filter').addEventListener('change', e => { s.filters.rating = e.target.value; reRender(); });
    document.querySelectorAll('[data-amenity]').forEach(cb => {
        cb.addEventListener('change', e => {
            const amenity = e.target.dataset.amenity;
            const set = new Set(s.filters.amenities);
            e.target.checked ? set.add(amenity) : set.delete(amenity);
            s.filters.amenities = Array.from(set);
            reRender();
        });
    });

    document.getElementById('hotel-search-form').addEventListener('submit', e => {
        e.preventDefault();
        s.isSearching = true; s.rooms = []; reRender();
        setTimeout(() => {
            s.isSearching = false; s.rooms = HOTEL_ROOMS;
            addToast(`Found ${HOTEL_ROOMS.length} hotels!`, 'success');
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


// --- Movie Booking Page ---
function renderMovieBookingPage() {
    const s = state.movies;
    let content = '';

    if (s.view === 'list') {
        const genres = ['All', ...new Set(MOVIES_DATA.map(m => m.genre))];
        const languages = ['All', ...new Set(MOVIES_DATA.map(m => m.language))];
        const filteredMovies = MOVIES_DATA
            .filter(m => s.filters.genre === 'All' || m.genre === s.filters.genre)
            .filter(m => s.filters.language === 'All' || m.language === s.filters.language);

        content = `
            <div class="flex flex-wrap gap-4 mb-6">
                <div>
                    <label class="font-semibold mr-2">Genre:</label>
                    ${genres.map(g => `<button data-filter-type="genre" data-value="${g}" class="filter-tag px-3 py-1 border rounded-full ${s.filters.genre === g ? 'active' : ''}">${g}</button>`).join(' ')}
                </div>
                 <div>
                    <label class="font-semibold mr-2">Language:</label>
                    ${languages.map(l => `<button data-filter-type="language" data-value="${l}" class="filter-tag px-3 py-1 border rounded-full ${s.filters.language === l ? 'active' : ''}">${l}</button>`).join(' ')}
                </div>
            </div>
            <div data-testid="movie-list" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                ${filteredMovies.map(movie => Card(`
                    <img src="${movie.poster}" alt="${movie.title}" class="rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform" data-select-movie="${movie.id}">
                    <h3 class="font-bold mt-2 truncate">${movie.title}</h3>
                    <p class="text-sm text-slate-500">${movie.genre}</p>
                `, 'text-center')).join('')}
            </div>
        `;
    } else if (s.view === 'details') {
        const movie = MOVIES_DATA.find(m => m.id === s.selectedMovieId);
        content = `
            <button id="back-to-list" class="mb-4 rounded-md font-semibold px-4 py-2 bg-slate-200 text-slate-800 hover:bg-slate-300">← Back to Movies</button>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="md:col-span-1"><img src="${movie.poster}" alt="${movie.title}" class="rounded-lg shadow-lg"></div>
                <div class="md:col-span-2">
                    <h2 class="text-4xl font-bold">${movie.title}</h2>
                    <p class="text-lg text-slate-500 my-2">${movie.genre} | ${movie.language} | ${movie.duration}</p>
                    <p class="my-4">${movie.description}</p>
                    ${SectionTitle('Select Showtime')}
                    <div class="flex flex-wrap gap-4">
                        <button data-select-showtime="today" class="px-4 py-2 border rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700">Today, 7:00 PM</button>
                        <button data-select-showtime="tomorrow" class="px-4 py-2 border rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700">Tomorrow, 8:30 PM</button>
                    </div>
                </div>
            </div>`;
    } else if (s.view === 'seats') {
        const movie = MOVIES_DATA.find(m => m.id === s.selectedMovieId);
        const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
        const seatsPerRow = 8;
        const basePrice = 12;
        const totalCost = s.selectedSeats.size * basePrice;
        const finalCost = s.discountApplied ? totalCost * 0.9 : totalCost;

        const seatsHTML = rows.map(row => `
            <div class="flex items-center gap-2 sm:gap-3">
                <div class="w-6 text-center text-slate-500">${row}</div>
                ${Array.from({length: seatsPerRow}, (_, i) => {
                    const seatId = `${row}${i + 1}`;
                    const isOccupied = s.occupiedSeats.has(seatId);
                    const isSelected = s.selectedSeats.has(seatId);
                    return `<div data-seat-id="${seatId}" data-testid="seat-${seatId}" class="seat w-8 h-8 sm:w-10 sm:h-10 rounded-md cursor-pointer transition-all flex items-center justify-center ${isOccupied ? 'occupied' : isSelected ? 'selected' : 'bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500'}"></div>`;
                }).join('')}
                 <div class="w-6 text-center text-slate-500">${row}</div>
            </div>`).join('');

        content = `
            <button id="back-to-details" class="mb-4 rounded-md font-semibold px-4 py-2 bg-slate-200 text-slate-800 hover:bg-slate-300">← Back to Details</button>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="lg:col-span-2">
                    ${Card(`
                        <h3 class="text-xl font-bold mb-2">${movie.title}</h3>
                        <p class="text-slate-500 mb-4">Showtime: ${s.selectedShowtime === 'today' ? 'Today, 7:00 PM' : 'Tomorrow, 8:30 PM'}</p>
                        <div class="p-4 bg-slate-100 dark:bg-slate-900/50 rounded-lg">
                            <div class="w-full h-12 bg-slate-300 dark:bg-slate-600 rounded-md flex items-center justify-center text-lg font-bold text-slate-700 dark:text-slate-300 mb-8">SCREEN</div>
                            <div data-testid="seat-map" class="flex flex-col items-center gap-3">${seatsHTML}</div>
                        </div>
                    `)}
                </div>
                <div>
                     ${Card(`
                        ${SectionTitle('Booking Summary')}
                        <div class="space-y-4">
                            <div><h4 class="font-semibold">Selected Seats:</h4><p data-testid="selected-seats" class="text-slate-600 dark:text-slate-400 min-h-[20px]">${Array.from(s.selectedSeats).sort().join(', ') || 'None'}</p></div>
                            <div>
                                <label for="discount-code" class="font-semibold">Discount Code:</label>
                                <div class="flex gap-2 mt-1">
                                    <input id="discount-code" type="text" placeholder="e.g., SAVE10" value="${s.discountCode}" class="w-full px-3 py-2 text-sm bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md">
                                    <button id="apply-discount" class="px-3 py-2 text-sm rounded-md font-semibold bg-slate-200 hover:bg-slate-300">Apply</button>
                                </div>
                                ${s.discountApplied ? `<p class="text-green-500 text-sm mt-1" data-testid="discount-applied-msg">10% discount applied!</p>`:''}
                            </div>
                            <div><h4 class="font-semibold">Total Cost:</h4><p data-testid="total-cost" class="text-2xl font-bold text-primary-600">$${finalCost.toFixed(2)}</p></div>
                            <button id="book-tickets-btn" class="w-full rounded-md font-semibold py-3 bg-primary-600 text-white" ${s.selectedSeats.size === 0 ? 'disabled' : ''}>Book Tickets</button>
                        </div>
                    `)}
                </div>
            </div>
            ${s.isBookingConfirmed ? `
                <div id="confirmation-modal-overlay" class="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 animate-fade-in">
                    <div data-testid="confirmation-modal" class="bg-white dark:bg-slate-800 rounded-lg shadow-xl text-center p-8 max-w-md w-full">
                        <div class="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">${ICONS.checkCircle}</div>
                        <h2 class="text-2xl font-bold mt-4">Booking Confirmed!</h2>
                        <p class="text-slate-500 mt-2">You're all set for <strong>${movie.title}</strong>.</p>
                        <ul class="text-left my-4 space-y-1">
                            <li><strong>Showtime:</strong> ${s.selectedShowtime === 'today' ? 'Today, 7:00 PM' : 'Tomorrow, 8:30 PM'}</li>
                            <li><strong>Seats:</strong> ${Array.from(s.selectedSeats).sort().join(', ')}</li>
                            <li><strong>Total Paid:</strong> $${finalCost.toFixed(2)}</li>
                        </ul>
                        <button id="close-confirmation" class="w-full rounded-md font-semibold py-2 bg-primary-600 text-white">Done</button>
                    </div>
                </div>
            ` : ''}
        `;
    }
    return PageWrapper('Movie Ticket Booking', content, '/movies');
}
function initMovieBookingPage() {
    const s = state.movies;
    const reRender = () => router.route();
    
    // View Handlers
    if (s.view === 'list') {
        document.querySelectorAll('[data-filter-type]').forEach(btn => {
            btn.addEventListener('click', e => {
                s.filters[e.target.dataset.filterType] = e.target.dataset.value;
                reRender();
            });
        });
        document.querySelectorAll('[data-select-movie]').forEach(card => {
            card.addEventListener('click', e => {
                s.selectedMovieId = parseInt(e.currentTarget.dataset.selectMovie, 10);
                s.view = 'details';
                reRender();
            });
        });
    } else if (s.view === 'details') {
        document.getElementById('back-to-list').addEventListener('click', () => { s.view = 'list'; s.selectedMovieId = null; reRender(); });
        document.querySelectorAll('[data-select-showtime]').forEach(btn => {
            btn.addEventListener('click', e => {
                s.selectedShowtime = e.currentTarget.dataset.selectShowtime;
                s.view = 'seats';
                reRender();
            });
        });
    } else if (s.view === 'seats') {
        document.getElementById('back-to-details').addEventListener('click', () => { s.view = 'details'; s.selectedShowtime = null; reRender(); });
        document.querySelectorAll('[data-seat-id]').forEach(seat => {
            seat.addEventListener('click', e => {
                const seatId = e.currentTarget.dataset.seatId;
                if (s.occupiedSeats.has(seatId)) return;
                s.selectedSeats.has(seatId) ? s.selectedSeats.delete(seatId) : s.selectedSeats.add(seatId);
                reRender();
            });
        });
        document.getElementById('discount-code').addEventListener('input', e => { s.discountCode = e.target.value; });
        document.getElementById('apply-discount').addEventListener('click', () => {
            if (s.discountCode.toUpperCase() === 'SAVE10') {
                s.discountApplied = true;
                addToast('Discount applied!', 'success');
            } else {
                s.discountApplied = false;
                addToast('Invalid discount code', 'error');
            }
            reRender();
        });
        document.getElementById('book-tickets-btn').addEventListener('click', () => { if (s.selectedSeats.size > 0) { s.isBookingConfirmed = true; reRender(); } });
        
        if (s.isBookingConfirmed) {
            document.getElementById('close-confirmation').addEventListener('click', () => { resetState('/movies'); reRender(); });
        }
    }
}

// --- Advanced Features Page ---
function renderAdvancedFeaturesPage() { return PageWrapper('Advanced Features', 'Coming Soon...', '/advanced'); }
function initAdvancedFeaturesPage() {}


// =================================================================================
// ROUTER
// =================================================================================
const routes = {
    '/': { render: renderHomePage, init: initHomePage, pageKey: '/' },
    '/elements': { render: renderUiElementsPage, init: initUiElementsPage, pageKey: '/elements' },
    '/forms': { render: renderFormsPage, init: initFormsPage, pageKey: '/forms' },
    '/ecommerce': { render: renderEcommercePage, init: initEcommercePage, pageKey: '/ecommerce' },
    '/hotel': { render: renderHotelBookingPage, init: initHotelBookingPage, pageKey: '/hotel' },
    '/movies': { render: renderMovieBookingPage, init: initMovieBookingPage, pageKey: '/movies' },
    '/advanced': { render: renderAdvancedFeaturesPage, init: initAdvancedFeaturesPage, pageKey: '/advanced' },
};

const router = {
    route: () => {
        clearAllTimers();
        let path = window.location.hash.slice(1) || '/';
        if (!routes[path]) path = '/'; // Fallback to home

        const route = routes[path];
        
        // Reset state for the page if it's the first visit in a session
        if (!state[route.pageKey]) {
            resetState(route.pageKey);
        }

        appContent.innerHTML = route.render();
        route.init();

        const resetButton = document.querySelector(`[data-reset-page="${route.pageKey}"]`);
        if (resetButton) {
            resetButton.addEventListener('click', () => {
                resetState(route.pageKey);
                addToast('Page state has been reset', 'success');
                router.route();
            });
        }
        
        updateActiveNav(path);
        window.scrollTo(0, 0);

        // Close mobile menu on navigation
        if (mobileMenuButton.getAttribute('aria-expanded') === 'true') {
            mobileMenuButton.click();
        }
    }
};

// =================================================================================
// INITIALIZATION
// =================================================================================
function init() {
    renderHeaderNav();
    initTheme();
    initMobileMenu();
    
    // Set initial page states
    Object.keys(routes).forEach(key => resetState(routes[key].pageKey));
    
    window.addEventListener('hashchange', router.route);
    
    // Initial route
    router.route();
}

init();

});
