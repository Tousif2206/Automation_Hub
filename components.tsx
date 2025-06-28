import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import type { ToastMessage, ToastType } from './types';
import { X, CheckCircle, AlertTriangle, XCircle, Info, Sun, Moon } from 'lucide-react';

// Theme Context
type Theme = 'light' | 'dark';
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = storedTheme || preferredTheme;
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Toast Context
type ToastContextType = {
  addToast: (message: string, type: ToastType) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = useCallback((message: string, type: ToastType) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, 5000);
  }, []);

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed top-5 right-5 z-50 space-y-2">
        {toasts.map((toast) => (
          <Toast key={toast.id} {...toast} onDismiss={() => removeToast(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

// UI Components

export const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            aria-label="Toggle theme"
            data-testid="theme-toggle"
        >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
};

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
};

export const SectionTitle: React.FC<{ children: React.ReactNode; }> = ({ children }) => {
    return <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 border-b border-slate-300 dark:border-slate-700 pb-2">{children}</h2>
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'primary', size = 'md', ...props }) => {
    const baseClasses = 'rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed';
    
    const sizeClasses = {
        sm: 'p-2 text-sm',
        md: 'px-4 py-2',
        lg: 'px-6 py-3 text-lg'
    };

    const variantClasses = {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
        secondary: 'bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 focus:ring-slate-500',
        danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    };

    return <button className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`} {...props}>{children}</button>
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ label, id, className = '', ...props }, ref) => {
    const baseClasses = 'w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500';
    return (
        <div className="w-full">
            {label && <label htmlFor={id} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{label}</label>}
            <input id={id} ref={ref} className={`${baseClasses} ${className}`} {...props} />
        </div>
    );
});


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}
export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
        <div data-testid="modal-overlay" className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center" onClick={onClose}>
            <div data-testid="modal-content" className="relative bg-white dark:bg-slate-800 rounded-lg shadow-xl w-full max-w-lg m-4" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
                    <button onClick={onClose} data-testid="modal-close-button" className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                        <X size={24} />
                    </button>
                </div>
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    )
}

interface ToastProps extends ToastMessage {
    onDismiss: () => void;
}
export const Toast: React.FC<ToastProps> = ({ message, type, onDismiss }) => {
    const icons = {
        success: <CheckCircle className="text-green-500" />,
        error: <XCircle className="text-red-500" />,
        warning: <AlertTriangle className="text-yellow-500" />,
        info: <Info className="text-blue-500" />,
    };

    const baseClasses = 'flex items-center w-full max-w-xs p-4 text-slate-500 bg-white rounded-lg shadow-lg dark:text-slate-400 dark:bg-slate-800 transform transition-all duration-300';
    return (
        <div data-testid={`toast-${type}`} className={`${baseClasses} animate-fade-in-right`}>
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg">
                {icons[type]}
            </div>
            <div className="ml-3 text-sm font-normal">{message}</div>
            <button onClick={onDismiss} className="ml-auto -mx-1.5 -my-1.5 bg-white text-slate-400 hover:text-slate-900 rounded-lg focus:ring-2 focus:ring-slate-300 p-1.5 hover:bg-slate-100 inline-flex h-8 w-8 dark:text-slate-500 dark:hover:text-white dark:bg-slate-800 dark:hover:bg-slate-700">
                <span className="sr-only">Close</span>
                <X size={20} />
            </button>
        </div>
    )
}

interface AlertProps {
    type: 'success' | 'error' | 'warning' | 'info';
    message: string;
    onClose?: () => void;
}
export const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
    const colors = {
        success: 'bg-green-100 border-green-400 text-green-700 dark:bg-green-900/30 dark:border-green-600/50 dark:text-green-300',
        error: 'bg-red-100 border-red-400 text-red-700 dark:bg-red-900/30 dark:border-red-600/50 dark:text-red-300',
        warning: 'bg-yellow-100 border-yellow-400 text-yellow-700 dark:bg-yellow-900/30 dark:border-yellow-600/50 dark:text-yellow-300',
        info: 'bg-blue-100 border-blue-400 text-blue-700 dark:bg-blue-900/30 dark:border-blue-600/50 dark:text-blue-300',
    };
    const icons = {
        success: <CheckCircle />,
        error: <XCircle />,
        warning: <AlertTriangle />,
        info: <Info />,
    };

    return (
        <div data-testid={`alert-${type}`} className={`border-l-4 p-4 flex items-center ${colors[type]}`} role="alert">
            <div className="mr-3">{icons[type]}</div>
            <p className="flex-grow">{message}</p>
            {onClose && (
                 <button onClick={onClose} className="ml-4 -mr-2 -my-2 p-2 rounded-md hover:bg-black/10">
                    <X size={20} />
                </button>
            )}
        </div>
    );
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
}
export const Select: React.FC<SelectProps> = ({ label, id, children, className, ...props }) => {
    return (
        <div>
            {label && <label htmlFor={id} className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{label}</label>}
            <select id={id} {...props} className={`w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${className}`}>
                {children}
            </select>
        </div>
    )
}

interface TooltipProps {
    content: string;
    children: React.ReactNode;
}
export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
    return (
        <div className="relative group flex items-center">
            {children}
            <div data-testid="tooltip" className="absolute bottom-full mb-2 w-max px-2 py-1 bg-slate-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {content}
            </div>
        </div>
    );
};
