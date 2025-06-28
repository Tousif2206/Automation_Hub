
import React, { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer } from 'recharts';
import { NAV_ITEMS, ECOMMERCE_PRODUCTS, HOTEL_ROOMS, AIRPORTS } from './constants';
import type { Product, CartItem, HotelRoom, FlightType } from './types';
import { Card, SectionTitle, Button, Input, Modal, Alert, Select, Tooltip, useToast, ThemeToggle } from './components';
import { Eye, EyeOff, Plus, Minus, Trash2, Upload, Search, Calendar, Users, X, ChevronDown, ChevronUp } from 'lucide-react';

// Page components defined in the same file to keep file count low

const PageWrapper: React.FC<{ title: string; children: React.ReactNode; onReset?: () => void; }> = ({ title, children, onReset }) => (
    <div className="p-4 sm:p-6 lg:p-8">
         <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{title}</h1>
            {onReset && <Button variant="secondary" onClick={onReset} data-testid="reset-page-button">Reset Page</Button>}
        </div>
        {children}
    </div>
);

const HomePage: React.FC = () => (
    <PageWrapper title="Welcome to the Automation Practice Hub">
        <Card>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                This website is a dedicated playground for automation engineers and developers. 
                It's designed to provide a rich set of UI elements, forms, and real-world application scenarios
                to practice and perfect your web automation skills.
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                Use the navigation on the left to explore different pages. Each page is designed to be a stable target for your tests, with predictable states and test-friendly attributes like `data-testid`. Happy testing!
            </p>
        </Card>
    </PageWrapper>
);

const UiElementsPage: React.FC = () => {
    const initialInputState = {
        text: '',
        number: '',
        email: '',
        password: '',
        date: '',
        autocomplete: ''
    };
    const [inputs, setInputs] = useState(initialInputState);
    const [showPassword, setShowPassword] = useState(false);
    const [radioValue, setRadioValue] = useState('option1');
    const [checkboxes, setCheckboxes] = useState({ cb1: false, cb2: true });
    const [dropdownValue, setDropdownValue] = useState('2');
    const [sliderValue, setSliderValue] = useState(50);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [alert, setAlert] = useState<{ type: 'success' | 'error' | 'warning' | 'info'; message: string } | null>(null);
    const [fileName, setFileName] = useState('');
    const [dynamicContent, setDynamicContent] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const { addToast } = useToast();

    const handleReset = () => {
        setInputs(initialInputState);
        setShowPassword(false);
        setRadioValue('option1');
        setCheckboxes({ cb1: false, cb2: true });
        setDropdownValue('2');
        setSliderValue(50);
        setIsModalOpen(false);
        setAlert(null);
        setFileName('');
        setDynamicContent([]);
        addToast('Page state has been reset', 'info');
    };
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({...inputs, [e.target.name]: e.target.value});
    };
    
    const loadDynamicContent = () => {
        setIsLoading(true);
        setTimeout(() => {
            const newItem = `Dynamic item #${dynamicContent.length + 1}`;
            setDynamicContent(prev => [...prev, newItem]);
            setIsLoading(false);
            addToast('Content loaded!', 'success');
        }, 1500);
    };

    return (
        <PageWrapper title="UI Elements" onReset={handleReset}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <SectionTitle>Buttons</SectionTitle>
                    <div className="flex flex-wrap gap-4">
                        <Button data-testid="enabled-button">Enabled</Button>
                        <Button data-testid="disabled-button" disabled>Disabled</Button>
                        <Button data-testid="secondary-button" variant="secondary">Secondary</Button>
                        <Button data-testid="danger-button" variant="danger">Danger</Button>
                    </div>
                </Card>
                <Card>
                    <SectionTitle>Input Fields</SectionTitle>
                    <div className="space-y-4">
                        <Input data-testid="text-input" label="Text Input" name="text" value={inputs.text} onChange={handleInputChange} />
                        <Input data-testid="num-input" label="Number Input" type="number" name="number" value={inputs.number} onChange={handleInputChange} />
                        <div className="relative">
                            <Input data-testid="password-input" label="Password Input" type={showPassword ? 'text' : 'password'} name="password" value={inputs.password} onChange={handleInputChange} />
                            <button data-testid="toggle-password-visibility" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-9 text-slate-500">
                                {showPassword ? <EyeOff /> : <Eye />}
                            </button>
                        </div>
                    </div>
                </Card>
                 <Card>
                    <SectionTitle>Radio Buttons & Checkboxes</SectionTitle>
                    <div className="flex flex-col sm:flex-row gap-8">
                        <div data-testid="radio-group">
                            <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Radio Group</h3>
                            <div className="flex items-center gap-4">
                                <label className="flex items-center gap-2"><input type="radio" name="radio-group" value="option1" checked={radioValue === 'option1'} onChange={e => setRadioValue(e.target.value)} /> Option 1</label>
                                <label className="flex items-center gap-2"><input type="radio" name="radio-group" value="option2" checked={radioValue === 'option2'} onChange={e => setRadioValue(e.target.value)} /> Option 2</label>
                            </div>
                            <p className="mt-2 text-sm text-slate-500">Selected: <span data-testid="radio-output">{radioValue}</span></p>
                        </div>
                         <div data-testid="checkbox-group">
                            <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Checkbox Group</h3>
                            <div className="flex items-center gap-4">
                                <label className="flex items-center gap-2"><input type="checkbox" data-testid="checkbox-1" checked={checkboxes.cb1} onChange={e => setCheckboxes({...checkboxes, cb1: e.target.checked})}/> Check 1</label>
                                <label className="flex items-center gap-2"><input type="checkbox" data-testid="checkbox-2" checked={checkboxes.cb2} onChange={e => setCheckboxes({...checkboxes, cb2: e.target.checked})}/> Check 2</label>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card>
                    <SectionTitle>Dropdowns & Sliders</SectionTitle>
                    <div className="space-y-4">
                       <Select label="Single Select Dropdown" data-testid="single-select" value={dropdownValue} onChange={e => setDropdownValue(e.target.value)}>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                       </Select>
                       <div>
                            <label htmlFor="slider" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Slider</label>
                            <input id="slider" type="range" min="0" max="100" value={sliderValue} onChange={e => setSliderValue(Number(e.target.value))} className="w-full" data-testid="slider"/>
                            <p className="text-center mt-1" data-testid="slider-value">{sliderValue}</p>
                       </div>
                    </div>
                </Card>
                <Card>
                    <SectionTitle>Alerts & Toasts</SectionTitle>
                    {alert && <div className="mb-4"><Alert type={alert.type} message={alert.message} onClose={() => setAlert(null)} /></div>}
                    <div className="flex flex-wrap gap-2">
                         <Button variant="secondary" onClick={() => setAlert({type: 'success', message: 'This is a success alert.'})}>Success Alert</Button>
                         <Button variant="secondary" onClick={() => setAlert({type: 'error', message: 'This is an error alert.'})}>Error Alert</Button>
                         <Button variant="secondary" onClick={() => addToast('Success toast notification!', 'success')}>Success Toast</Button>
                         <Button variant="secondary" onClick={() => addToast('Error toast notification!', 'error')}>Error Toast</Button>
                    </div>
                </Card>
                <Card>
                    <SectionTitle>Other Elements</SectionTitle>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Button onClick={() => setIsModalOpen(true)} data-testid="open-modal-button">Open Modal</Button>
                            <Tooltip content="This is a tooltip!">
                                <Button variant="secondary" data-testid="tooltip-trigger">Hover for Tooltip</Button>
                            </Tooltip>
                        </div>
                        <div>
                             <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">File Upload</label>
                             <div className="flex items-center gap-2">
                                <label className="cursor-pointer">
                                    <span className="px-4 py-2 rounded-md font-semibold bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 transition-colors inline-flex items-center gap-2">
                                        <Upload size={16}/> Choose File
                                    </span>
                                    <input type="file" className="hidden" data-testid="file-upload" onChange={e => setFileName(e.target.files?.[0]?.name || '')}/>
                                </label>
                                {fileName && <span data-testid="file-upload-name" className="text-sm text-slate-600 dark:text-slate-400">{fileName}</span>}
                             </div>
                        </div>
                        <Input label="Date Picker" type="date" data-testid="date-picker" value={inputs.date} onChange={handleInputChange} name="date" />
                    </div>
                </Card>
                 <Card className="md:col-span-2">
                    <SectionTitle>Dynamic Content</SectionTitle>
                    <div className="flex items-center gap-4">
                        <Button onClick={loadDynamicContent} disabled={isLoading} data-testid="load-content-button">
                            {isLoading ? 'Loading...' : 'Load Content'}
                        </Button>
                    </div>
                    <div data-testid="dynamic-content-area" className="mt-4 p-4 border border-dashed border-slate-300 dark:border-slate-600 rounded-md min-h-[100px]">
                        {dynamicContent.map((item, index) => <p key={index}>{item}</p>)}
                        {isLoading && <p className="text-slate-500">Loading new content...</p>}
                    </div>
                </Card>
            </div>
            <Modal title="Test Modal" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <p className="text-slate-600 dark:text-slate-300">This is a modal dialog. You can test interactions with it.</p>
                <div className="mt-4 flex justify-end gap-2">
                    <Button variant="secondary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                    <Button onClick={() => { addToast('Confirmed!', 'success'); setIsModalOpen(false); }}>Confirm</Button>
                </div>
            </Modal>
        </PageWrapper>
    );
};

const FormsPage: React.FC = () => {
    // Contact Form State
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const [contactStatus, setContactStatus] = useState('');
    // Login Form State
    const [loginForm, setLoginForm] = useState({ username: '', password: '' });
    const [loginStatus, setLoginStatus] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    // Multi-step Form State
    const [step, setStep] = useState(1);
    const [multiStepForm, setMultiStepForm] = useState({ personal: {firstName: '', lastName: ''}, account: {email: '', password: ''}});
    const [multiStepStatus, setMultiStepStatus] = useState('');

    const { addToast } = useToast();

    const handleReset = () => {
        setContactForm({ name: '', email: '', message: '' });
        setContactStatus('');
        setLoginForm({ username: '', password: '' });
        setLoginStatus('');
        setShowPassword(false);
        setStep(1);
        setMultiStepForm({ personal: {firstName: '', lastName: ''}, account: {email: '', password: ''}});
        setMultiStepStatus('');
        addToast('Forms have been reset', 'info');
    }

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (contactForm.name && contactForm.email.includes('@') && contactForm.message) {
            setContactStatus(`Thank you, ${contactForm.name}! Your message has been received.`);
        } else {
            setContactStatus('Please fill out all fields correctly.');
        }
    };
    
    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (loginForm.username === 'testuser' && loginForm.password === 'password123') {
            setLoginStatus(`Welcome, ${loginForm.username}!`);
        } else {
            setLoginStatus('Invalid username or password.');
        }
    };
    
    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);
    const handleMultiStepSubmit = () => {
        setMultiStepStatus(`Registration complete for ${multiStepForm.account.email}!`);
        setStep(4);
    }
    
    return (
        <PageWrapper title="Forms" onReset={handleReset}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                    <SectionTitle>Contact Us Form</SectionTitle>
                    <form data-testid="contact-form" onSubmit={handleContactSubmit} className="space-y-4">
                        <Input label="Name" id="contact-name" name="name" value={contactForm.name} onChange={e => setContactForm({...contactForm, name: e.target.value})} required/>
                        <Input label="Email" id="contact-email" name="email" type="email" value={contactForm.email} onChange={e => setContactForm({...contactForm, email: e.target.value})} required/>
                        <div>
                            <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                            <textarea id="contact-message" name="message" rows={4} value={contactForm.message} onChange={e => setContactForm({...contactForm, message: e.target.value})} required className="w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500"></textarea>
                        </div>
                        <Button type="submit">Submit</Button>
                        {contactStatus && <p data-testid="contact-form-status" className="mt-4 text-sm">{contactStatus}</p>}
                    </form>
                </Card>
                <Card>
                    <SectionTitle>Login Form</SectionTitle>
                    <p className="text-sm text-slate-500 mb-4">Try with user: `testuser`, pass: `password123`</p>
                    <form data-testid="login-form" onSubmit={handleLoginSubmit} className="space-y-4">
                        <Input label="Username" id="login-username" name="username" value={loginForm.username} onChange={e => setLoginForm({...loginForm, username: e.target.value})} />
                         <div className="relative">
                            <Input label="Password" id="login-password" type={showPassword ? 'text' : 'password'} name="password" value={loginForm.password} onChange={e => setLoginForm({...loginForm, password: e.target.value})} />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-9 text-slate-500">
                                {showPassword ? <EyeOff /> : <Eye />}
                            </button>
                        </div>
                        <Button type="submit">Login</Button>
                        {loginStatus && <p data-testid="login-form-status" className="mt-4 text-sm">{loginStatus}</p>}
                    </form>
                </Card>
                <Card className="lg:col-span-2">
                    <SectionTitle>Multi-step Form</SectionTitle>
                    <div className="relative p-8 border border-slate-200 dark:border-slate-700 rounded-lg">
                        <div className="flex justify-between mb-8">
                            <div className="flex-1 text-center">
                                <div className={`mx-auto w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary-600 text-white' : 'bg-slate-200 dark:bg-slate-700'}`}>1</div>
                                <p className="text-sm mt-1">Personal Info</p>
                            </div>
                             <div className="flex-1 text-center">
                                <div className={`mx-auto w-10 h-10 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary-600 text-white' : 'bg-slate-200 dark:bg-slate-700'}`}>2</div>
                                <p className="text-sm mt-1">Account</p>
                            </div>
                             <div className="flex-1 text-center">
                                <div className={`mx-auto w-10 h-10 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-primary-600 text-white' : 'bg-slate-200 dark:bg-slate-700'}`}>3</div>
                                <p className="text-sm mt-1">Confirm</p>
                            </div>
                        </div>

                        <div data-testid="multi-step-form">
                            {step === 1 && (
                                <div data-testid="step-1" className="space-y-4 animate-fade-in">
                                    <h3 className="font-bold text-lg">Step 1: Personal Information</h3>
                                    <Input label="First Name" id="ms-firstname" value={multiStepForm.personal.firstName} onChange={e => setMultiStepForm({...multiStepForm, personal: {...multiStepForm.personal, firstName: e.target.value}})} />
                                    <Input label="Last Name" id="ms-lastname" value={multiStepForm.personal.lastName} onChange={e => setMultiStepForm({...multiStepForm, personal: {...multiStepForm.personal, lastName: e.target.value}})} />
                                    <Button onClick={nextStep}>Next</Button>
                                </div>
                            )}
                             {step === 2 && (
                                <div data-testid="step-2" className="space-y-4 animate-fade-in">
                                    <h3 className="font-bold text-lg">Step 2: Account Details</h3>
                                    <Input label="Email" id="ms-email" type="email" value={multiStepForm.account.email} onChange={e => setMultiStepForm({...multiStepForm, account: {...multiStepForm.account, email: e.target.value}})}/>
                                    <Input label="Password" id="ms-password" type="password" value={multiStepForm.account.password} onChange={e => setMultiStepForm({...multiStepForm, account: {...multiStepForm.account, password: e.target.value}})}/>
                                    <div className="flex gap-2">
                                        <Button variant="secondary" onClick={prevStep}>Back</Button>
                                        <Button onClick={nextStep}>Next</Button>
                                    </div>
                                </div>
                            )}
                             {step === 3 && (
                                <div data-testid="step-3" className="space-y-4 animate-fade-in">
                                    <h3 className="font-bold text-lg">Step 3: Confirmation</h3>
                                    <p>First Name: {multiStepForm.personal.firstName}</p>
                                    <p>Last Name: {multiStepForm.personal.lastName}</p>
                                    <p>Email: {multiStepForm.account.email}</p>
                                    <div className="flex gap-2">
                                        <Button variant="secondary" onClick={prevStep}>Back</Button>
                                        <Button onClick={handleMultiStepSubmit}>Submit</Button>
                                    </div>
                                </div>
                            )}
                            {step === 4 && (
                                <div data-testid="step-4" className="text-center animate-fade-in">
                                    <h3 className="font-bold text-lg text-green-600">Success!</h3>
                                    <p data-testid="multi-step-form-status">{multiStepStatus}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </Card>
            </div>
        </PageWrapper>
    );
};

const EcommercePage: React.FC = () => {
    const categories = ['All', ...Array.from(new Set(ECOMMERCE_PRODUCTS.map(p => p.category)))];
    const [filterCategory, setFilterCategory] = useState('All');
    const [priceRange, setPriceRange] = useState(300);
    const [cart, setCart] = useState<CartItem[]>([]);
    const { addToast } = useToast();

    const handleReset = () => {
        setFilterCategory('All');
        setPriceRange(300);
        setCart([]);
        addToast('E-Commerce page reset', 'info');
    }

    const filteredProducts = useMemo(() => {
        return ECOMMERCE_PRODUCTS.filter(p => {
            const categoryMatch = filterCategory === 'All' || p.category === filterCategory;
            const priceMatch = p.price <= priceRange;
            return categoryMatch && priceMatch;
        });
    }, [filterCategory, priceRange]);

    const addToCart = (product: Product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
        addToast(`${product.name} added to cart`, 'success');
    };
    
    const updateQuantity = (productId: number, newQuantity: number) => {
        if(newQuantity <= 0) {
            setCart(cart.filter(item => item.id !== productId));
        } else {
            setCart(cart.map(item => item.id === productId ? {...item, quantity: newQuantity} : item));
        }
    }
    
    const cartTotal = useMemo(() => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    }, [cart]);

    return (
        <PageWrapper title="E-Commerce Store" onReset={handleReset}>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                    <Card>
                        <SectionTitle>Filters</SectionTitle>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold mb-2">Category</h4>
                                <Select data-testid="category-filter" value={filterCategory} onChange={e => setFilterCategory(e.target.value)}>
                                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                                </Select>
                            </div>
                            <div>
                                <label htmlFor="price-range" className="font-semibold mb-2 block">Max Price: <span data-testid="price-filter-value">${priceRange}</span></label>
                                <input id="price-range" data-testid="price-filter" type="range" min="0" max="300" value={priceRange} onChange={e => setPriceRange(Number(e.target.value))} className="w-full" />
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="lg:col-span-3">
                    <SectionTitle>Products</SectionTitle>
                    <div data-testid="product-list" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredProducts.map(product => (
                            <Card key={product.id} className="flex flex-col">
                                <img src={product.image} alt={product.name} className="rounded-md h-48 w-full object-cover" />
                                <h3 className="text-lg font-bold mt-4">{product.name}</h3>
                                <p className="text-sm text-slate-500">{product.category}</p>
                                <p className="text-xl font-semibold text-primary-600 mt-2 flex-grow">${product.price}</p>
                                <Button onClick={() => addToCart(product)} data-testid={`add-to-cart-${product.id}`} className="w-full mt-4">Add to Cart</Button>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-4">
                    <Card>
                        <SectionTitle>Shopping Cart</SectionTitle>
                        <div data-testid="shopping-cart" className="space-y-4">
                            {cart.length === 0 ? (
                                <p data-testid="empty-cart-message">Your cart is empty.</p>
                            ) : (
                                <>
                                    {cart.map(item => (
                                        <div key={item.id} data-testid={`cart-item-${item.id}`} className="flex items-center justify-between border-b pb-2 dark:border-slate-700">
                                            <div>
                                                <p className="font-semibold">{item.name}</p>
                                                <p className="text-sm text-slate-500">${item.price.toFixed(2)}</p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Button size="sm" variant="secondary" onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={16}/></Button>
                                                <span data-testid={`cart-item-quantity-${item.id}`}>{item.quantity}</span>
                                                <Button size="sm" variant="secondary" onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={16}/></Button>
                                                <Button size="sm" variant="danger" onClick={() => updateQuantity(item.id, 0)}><Trash2 size={16}/></Button>
                                            </div>
                                        </div>
                                    ))}
                                     <div className="text-right font-bold text-xl mt-4">
                                        Total: <span data-testid="cart-total">${cartTotal}</span>
                                     </div>
                                </>
                            )}
                        </div>
                    </Card>
                </div>
            </div>
        </PageWrapper>
    );
};

const HotelBookingPage: React.FC = () => {
    const today = new Date().toISOString().split('T')[0];
    const [search, setSearch] = useState({ location: 'New York', checkIn: today, checkOut: '', guests: 2 });
    const [rooms, setRooms] = useState<HotelRoom[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const { addToast } = useToast();
    
    const handleReset = () => {
        setSearch({ location: 'New York', checkIn: today, checkOut: '', guests: 2 });
        setRooms([]);
        setIsSearching(false);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSearching(true);
        setRooms([]);
        setTimeout(() => {
            setRooms(HOTEL_ROOMS);
            setIsSearching(false);
            addToast(`Found ${HOTEL_ROOMS.length} rooms!`, 'success');
        }, 1500);
    };

    return (
        <PageWrapper title="Hotel Booking" onReset={handleReset}>
            <Card>
                <form data-testid="hotel-search-form" onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                    <Input label="Location" data-testid="location-input" value={search.location} onChange={e => setSearch({...search, location: e.target.value})} />
                    <Input label="Check-in" data-testid="checkin-date" type="date" value={search.checkIn} onChange={e => setSearch({...search, checkIn: e.target.value})} />
                    <Input label="Check-out" data-testid="checkout-date" type="date" value={search.checkOut} onChange={e => setSearch({...search, checkOut: e.target.value})} />
                    <div className="flex flex-col md:flex-row gap-4 items-end">
                        <Input label="Guests" data-testid="guests-input" type="number" min="1" value={search.guests} onChange={e => setSearch({...search, guests: Number(e.target.value)})} />
                        <Button type="submit" className="w-full" disabled={isSearching}>{isSearching ? 'Searching...' : 'Search'}</Button>
                    </div>
                </form>
            </Card>
            <div data-testid="hotel-room-list" className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                 {isSearching && <p className="md:col-span-2 text-center">Searching for rooms...</p>}
                 {rooms.map(room => (
                    <Card key={room.id} className="flex flex-col sm:flex-row gap-4">
                        <img src={room.image} alt={room.name} className="w-full sm:w-1/3 h-48 sm:h-auto object-cover rounded-md"/>
                        <div className="flex-grow">
                            <h3 className="text-xl font-bold">{room.name}</h3>
                            <p className="text-sm text-slate-500 my-2">{room.amenities.join(', ')}</p>
                            <p className="text-2xl font-bold text-primary-600">${room.price}<span className="text-base font-normal text-slate-500"> / night</span></p>
                            <Button className="w-full mt-4" data-testid={`book-room-${room.id}`} onClick={() => addToast(`You booked ${room.name}!`, 'success')}>Book Now</Button>
                        </div>
                    </Card>
                 ))}
            </div>
        </PageWrapper>
    );
};

const FlightSearchPage: React.FC = () => {
    const today = new Date().toISOString().split('T')[0];
    const [flightType, setFlightType] = useState<FlightType>('round-trip' as FlightType);
    const [searchParams, setSearchParams] = useState({ from: 'JFK', to: 'LAX', depart: today, return: '', passengers: 1 });
    const { addToast } = useToast();

    const handleReset = () => {
        setFlightType('round-trip' as FlightType);
        setSearchParams({ from: 'JFK', to: 'LAX', depart: today, return: '', passengers: 1 });
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        addToast('Searching for flights...', 'info');
    };
    
    return (
         <PageWrapper title="Flight Search" onReset={handleReset}>
            <Card>
                <form data-testid="flight-search-form" onSubmit={handleSearch}>
                    <div className="flex gap-4 mb-4" data-testid="flight-type-toggle">
                        <label className="flex items-center gap-2">
                            <input type="radio" name="flightType" value="round-trip" checked={flightType === 'round-trip'} onChange={() => setFlightType('round-trip' as FlightType)} /> Round Trip
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" name="flightType" value="one-way" checked={flightType === 'one-way'} onChange={() => setFlightType('one-way' as FlightType)} /> One Way
                        </label>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
                         <Select label="From" data-testid="flight-from" value={searchParams.from} onChange={e => setSearchParams({...searchParams, from: e.target.value})}>
                            {AIRPORTS.map(a => <option key={a.code} value={a.code}>{a.name}</option>)}
                        </Select>
                        <Select label="To" data-testid="flight-to" value={searchParams.to} onChange={e => setSearchParams({...searchParams, to: e.target.value})}>
                            {AIRPORTS.map(a => <option key={a.code} value={a.code}>{a.name}</option>)}
                        </Select>
                        <Input label="Depart" data-testid="flight-depart-date" type="date" value={searchParams.depart} onChange={e => setSearchParams({...searchParams, depart: e.target.value})} />
                        <Input label="Return" data-testid="flight-return-date" type="date" value={searchParams.return} onChange={e => setSearchParams({...searchParams, return: e.target.value})} disabled={flightType === 'one-way'} />
                        <Input label="Passengers" data-testid="flight-passengers" type="number" min="1" value={searchParams.passengers} onChange={e => setSearchParams({...searchParams, passengers: Number(e.target.value)})} />
                    </div>
                    <div className="mt-6 flex justify-center">
                        <Button type="submit" className="w-full md:w-auto" data-testid="flight-search-button">
                            <div className="flex items-center justify-center gap-2">
                                <Search size={20}/> Search Flights
                            </div>
                        </Button>
                    </div>
                </form>
            </Card>
        </PageWrapper>
    );
};

const MovieBookingPage: React.FC = () => {
    const { addToast } = useToast();
    const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
    const seatsPerRow = 8;
    const occupiedSeats = useMemo(() => new Set(['A3', 'B5', 'B6', 'D1', 'E7', 'F4']), []);
    const [selectedSeats, setSelectedSeats] = useState<Set<string>>(new Set());
    
    const handleReset = () => {
        setSelectedSeats(new Set());
    };

    const handleSeatClick = (seatId: string) => {
        if (occupiedSeats.has(seatId)) return;
        
        const newSelectedSeats = new Set(selectedSeats);
        if (newSelectedSeats.has(seatId)) {
            newSelectedSeats.delete(seatId);
        } else {
            newSelectedSeats.add(seatId);
        }
        setSelectedSeats(newSelectedSeats);
    };

    const seatPrice = 12;
    const totalCost = selectedSeats.size * seatPrice;

    return (
        <PageWrapper title="Movie Ticket Booking" onReset={handleReset}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <Card>
                        <SectionTitle>Select Your Seats</SectionTitle>
                        <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-lg">
                            <div className="w-full h-12 bg-slate-300 dark:bg-slate-600 rounded-md flex items-center justify-center text-lg font-bold text-slate-700 dark:text-slate-300 mb-8">SCREEN</div>
                            <div data-testid="seat-map" className="flex flex-col items-center gap-3">
                                {rows.map(row => (
                                    <div key={row} className="flex gap-2 sm:gap-3">
                                        {Array.from({length: seatsPerRow}, (_, i) => {
                                            const seatId = `${row}${i + 1}`;
                                            const isOccupied = occupiedSeats.has(seatId);
                                            const isSelected = selectedSeats.has(seatId);
                                            
                                            let seatClass = 'w-8 h-8 sm:w-10 sm:h-10 rounded-md cursor-pointer transition-colors ';
                                            if(isOccupied) {
                                                seatClass += 'bg-slate-400 dark:bg-slate-600 cursor-not-allowed';
                                            } else if (isSelected) {
                                                seatClass += 'bg-primary-500 hover:bg-primary-600';
                                            } else {
                                                seatClass += 'bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-500';
                                            }

                                            return <div key={seatId} data-testid={`seat-${seatId}`} className={seatClass} onClick={() => handleSeatClick(seatId)}></div>
                                        })}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>
                <div>
                     <Card>
                        <SectionTitle>Booking Summary</SectionTitle>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold">Selected Seats:</h4>
                                <p data-testid="selected-seats" className="text-slate-600 dark:text-slate-400 min-h-[20px]">{Array.from(selectedSeats).sort().join(', ') || 'None'}</p>
                            </div>
                             <div>
                                <h4 className="font-semibold">Total Cost:</h4>
                                <p data-testid="total-cost" className="text-2xl font-bold text-primary-600">${totalCost.toFixed(2)}</p>
                            </div>
                            <Button className="w-full" disabled={selectedSeats.size === 0} onClick={() => addToast('Booking Confirmed!', 'success')}>
                                Book Tickets
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </PageWrapper>
    );
};

// --- Helper component for Advanced Page's sortable table ---
const SortableTableHeader: React.FC<{
    children: React.ReactNode;
    columnKey: string;
    sortConfig: { key: string; direction: 'asc' | 'desc' } | null;
    requestSort: (key: string) => void;
}> = ({ children, columnKey, sortConfig, requestSort }) => {
    const isSorted = sortConfig?.key === columnKey;
    return (
        <th className="p-3 text-left cursor-pointer" onClick={() => requestSort(columnKey)}>
            <div className="flex items-center gap-1">
                {children}
                {isSorted && (sortConfig.direction === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />)}
            </div>
        </th>
    );
};

const AdvancedFeaturesPage: React.FC = () => {
    // Chart data
    const chartData = [
        { name: 'Jan', uv: 4000, pv: 2400 }, { name: 'Feb', uv: 3000, pv: 1398 },
        { name: 'Mar', uv: 2000, pv: 9800 }, { name: 'Apr', uv: 2780, pv: 3908 },
        { name: 'May', uv: 1890, pv: 4800 }, { name: 'Jun', uv: 2390, pv: 3800 },
    ];

    // Drag and drop state
    const initialDndItems = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];
    const [dndItems, setDndItems] = useState(initialDndItems);
    const dragItem = useRef<number | null>(null);
    const dragOverItem = useRef<number | null>(null);

    const handleDragSort = () => {
        if (dragItem.current === null || dragOverItem.current === null) return;
        const itemsCopy = [...dndItems];
        const draggedItemContent = itemsCopy.splice(dragItem.current, 1)[0];
        itemsCopy.splice(dragOverItem.current, 0, draggedItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setDndItems(itemsCopy);
    };

    // Table state
    const tableData = useMemo(() => [
        { id: 1, name: 'John Doe', age: 32, city: 'New York' },
        { id: 2, name: 'Jane Smith', age: 28, city: 'London' },
        { id: 3, name: 'Sam Green', age: 45, city: 'Sydney' },
        { id: 4, name: 'Alice Brown', age: 23, city: 'Paris' },
        { id: 5, name: 'Bob White', age: 51, city: 'Tokyo' },
    ], []);

    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>({ key: 'name', direction: 'asc'});
    
    const sortedTableData = useMemo(() => {
        let sortableItems = [...tableData];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                const aValue = a[sortConfig.key as keyof typeof a];
                const bValue = b[sortConfig.key as keyof typeof b];
                if (aValue < bValue) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (aValue > bValue) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [tableData, sortConfig]);
    
    const requestSort = (key: string) => {
        let direction: 'asc' | 'desc' = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const handleReset = () => {
        setDndItems(initialDndItems);
        setSortConfig({ key: 'name', direction: 'asc' });
    }

    return (
        <PageWrapper title="Advanced Features" onReset={handleReset}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 <Card>
                    <SectionTitle>Dashboard Charts</SectionTitle>
                    <div data-testid="charts-container" className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <RechartsTooltip contentStyle={{backgroundColor: 'black'}} />
                                <Legend />
                                <Bar dataKey="pv" fill="#8884d8" />
                                <Bar dataKey="uv" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Card>
                <Card>
                    <SectionTitle>Drag and Drop List</SectionTitle>
                    <div data-testid="dnd-list" className="space-y-2">
                        {dndItems.map((item, index) => (
                             <div 
                                key={index} 
                                data-testid={`dnd-item-${index}`}
                                className="p-3 bg-slate-100 dark:bg-slate-700 rounded-md cursor-grab active:cursor-grabbing"
                                draggable
                                onDragStart={() => dragItem.current = index}
                                onDragEnter={() => dragOverItem.current = index}
                                onDragEnd={handleDragSort}
                                onDragOver={(e) => e.preventDefault()}
                             >
                                {item}
                            </div>
                        ))}
                    </div>
                </Card>
                <Card className="lg:col-span-2">
                    <SectionTitle>Sortable Table</SectionTitle>
                    <div className="overflow-x-auto">
                        <table data-testid="sortable-table" className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                           <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
                                <tr>
                                    <SortableTableHeader columnKey="id" sortConfig={sortConfig} requestSort={requestSort}>ID</SortableTableHeader>
                                    <SortableTableHeader columnKey="name" sortConfig={sortConfig} requestSort={requestSort}>Name</SortableTableHeader>
                                    <SortableTableHeader columnKey="age" sortConfig={sortConfig} requestSort={requestSort}>Age</SortableTableHeader>
                                    <SortableTableHeader columnKey="city" sortConfig={sortConfig} requestSort={requestSort}>City</SortableTableHeader>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedTableData.map(row => (
                                    <tr key={row.id} className="bg-white border-b dark:bg-slate-800 dark:border-slate-700">
                                        <td className="p-3">{row.id}</td>
                                        <td className="p-3 font-medium text-slate-900 dark:text-white">{row.name}</td>
                                        <td className="p-3">{row.age}</td>
                                        <td className="p-3">{row.city}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
                <Card className="lg:col-span-2">
                    <SectionTitle>IFrame Example</SectionTitle>
                    <iframe 
                        data-testid="sample-iframe"
                        className="w-full h-96 border border-slate-300 dark:border-slate-700 rounded-md"
                        srcDoc="<html><head><style>body{font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0;} h1{color: #3b82f6;}</style></head><body><h1>Hello from within the iframe!</h1></body></html>"
                        title="Sample IFrame">
                    </iframe>
                </Card>
            </div>
        </PageWrapper>
    );
};


const Sidebar: React.FC<{ isOpen: boolean; }> = ({ isOpen }) => (
    <aside className={`fixed top-0 left-0 z-30 w-64 h-full bg-white dark:bg-slate-800 shadow-xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative`}>
        <div className="p-4 border-b border-slate-200 dark:border-slate-700">
            <h1 className="text-xl font-bold text-primary-600 dark:text-primary-400">Automation Hub</h1>
        </div>
        <nav className="p-4 space-y-2">
            {NAV_ITEMS.map(item => (
                <NavLink 
                    key={item.path}
                    to={item.path}
                    className={({isActive}) => `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300' : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
                >
                    {item.icon}
                    <span>{item.label}</span>
                </NavLink>
            ))}
        </nav>
    </aside>
);

const App: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setSidebarOpen(false); // Close sidebar on route change on mobile
    }, [location]);

    return (
        <div className="flex h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
            <Sidebar isOpen={isSidebarOpen} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="flex justify-between items-center p-4 bg-white dark:bg-slate-800 shadow-md md:hidden">
                    <h1 className="text-xl font-bold text-primary-600 dark:text-primary-400">Automation Hub</h1>
                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                        <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-slate-500 dark:text-slate-400">
                            {isSidebarOpen ? <X size={24} /> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>}
                        </button>
                    </div>
                </header>
                 <header className="hidden md:flex justify-end items-center p-4 border-b border-slate-200 dark:border-slate-700">
                    <ThemeToggle />
                </header>
                <main className="flex-1 overflow-x-hidden overflow-y-auto">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/elements" element={<UiElementsPage />} />
                        <Route path="/forms" element={<FormsPage />} />
                        <Route path="/ecommerce" element={<EcommercePage />} />
                        <Route path="/hotel" element={<HotelBookingPage />} />
                        <Route path="/flights" element={<FlightSearchPage />} />
                        <Route path="/movies" element={<MovieBookingPage />} />
                        <Route path="/advanced" element={<AdvancedFeaturesPage />} />
                    </Routes>
                </main>
            </div>
             {isSidebarOpen && <div className="fixed inset-0 bg-black/30 z-20 md:hidden" onClick={() => setSidebarOpen(false)}></div>}
        </div>
    );
};

export default App;
