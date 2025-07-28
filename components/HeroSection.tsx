
import React from 'react';

export const HeroSection: React.FC = () => {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="py-24 sm:py-32 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                    <span className="block">Digital Marketing Strategist</span>
                    <span className="block text-primary">Driving Growth & Engagement</span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300">
                    Hi, I'm Kushal Halge. I specialize in creating data-driven marketing campaigns that deliver measurable results. Explore my work to see how I can help your business thrive.
                </p>
                <div className="mt-8 flex justify-center gap-x-4">
                    <button
                        onClick={scrollToProjects}
                        className="px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-dark-bg transition-all duration-300 transform hover:scale-105"
                    >
                        View My Work
                    </button>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3 bg-gray-200 dark:bg-dark-card text-gray-800 dark:text-gray-200 font-semibold rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-dark-bg transition-all duration-300"
                    >
                        Get in Touch
                    </button>
                </div>
            </div>
        </section>
    );
};
