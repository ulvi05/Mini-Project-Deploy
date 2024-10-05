import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-white text-black py-10 border-t border-gray-300">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-6 md:mb-0">
                        <h4 className="text-2xl font-bold">Sail Haven</h4>
                        <p className="mt-2">Your gateway to unforgettable yacht experiences.</p>
                    </div>
                    <div className="flex items-center md:ml-8">
                        <ul className="flex space-x-4">
                            <li><Link href="/about" className="text-black hover:text-gray-400">About Us</Link></li>
                            <li><Link href="/services" className="text-black hover:text-gray-400">Services</Link></li>
                            <li><Link href="/contact" className="text-black hover:text-gray-400">Contact Us</Link></li>
                            <li><Link href="/yachts" className="text-black hover:text-gray-400">Yachts</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-black text-sm">© 2024 Sail Haven. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
