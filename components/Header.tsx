
import React from 'react';
import { SunIcon, MoonIcon } from './Icons';

interface HeaderProps {
    theme: string;
    toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: 'Projects', href: 'projects' },
        { name: 'About', href: 'about' },
        { name: 'Contact', href: 'contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-lg border-b border-light-border dark:border-dark-border transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-bold text-primary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            KH
                        </a>
                    </div>
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
                            >
                                {link.name}
                            </button>
                        ))}
                    </nav>
                    <div className="flex items-center">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
