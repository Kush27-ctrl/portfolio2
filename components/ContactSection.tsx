
import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('Please fill out all fields.');
            return;
        }
        setStatus('Sending...');
        // Simulate API call
        setTimeout(() => {
            setStatus('Thank you for your message! I will get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
        }, 1500);
    };

    return (
        <section id="contact" className="py-16 sm:py-24">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Let's Connect</h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    Have a project in mind or just want to say hello? I'd love to hear from you.
                </p>
            </div>
            <form onSubmit={handleSubmit} className="mt-12 max-w-xl mx-auto space-y-6">
                <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border focus:ring-2 focus:ring-primary focus:border-primary transition"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border focus:ring-2 focus:ring-primary focus:border-primary transition"
                        placeholder="Your Email"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border focus:ring-2 focus:ring-primary focus:border-primary transition"
                        placeholder="Your Message"
                    ></textarea>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-dark-bg transition-all duration-300 w-full sm:w-auto"
                    >
                        Send Message
                    </button>
                </div>
                {status && <p className="text-center mt-4 text-gray-600 dark:text-gray-300">{status}</p>}
            </form>
        </section>
    );
};
