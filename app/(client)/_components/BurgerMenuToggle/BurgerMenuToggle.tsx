"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const BurgerMenuToggle = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative md:hidden">
            <button onClick={toggleMenu} className="p-2 text-black bg-gray-200 rounded-md hover:bg-gray-300">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {isOpen && (
                <div className="absolute right-0 top-full bg-white text-black rounded-lg shadow-lg w-[200px] z-50">
                    <ul className="flex flex-col p-4 space-y-2">
                        <li>
                            <Link href="/" className="hover:text-blue-600">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/yatchs" className="hover:text-blue-600">
                                Explore
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-blue-600">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-blue-600">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default BurgerMenuToggle;
