
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-light-card dark:bg-dark-card border-t border-light-border dark:border-dark-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Kushal Halge. All Rights Reserved.</p>
                    <p className="mt-1">Built with React, TypeScript, and Tailwind CSS.</p>
                </div>
            </div>
        </footer>
    );
};
