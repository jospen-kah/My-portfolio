"use client";

import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/skills', label: 'Skills' },
        { href: '/contact', label: 'Contact' },
    ]
    return (
        <div className='relative'>
            <div className='bg-transparent flex justify-between items-center lg:px-20 md:px-10 px-5 py-5'>
                <div>
                    <Link href='/' className='text-2xl font-bold border-none'>
                        &lt;/Jospen&gt;
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden md:flex space-x-4 gap-4'>
                    {navLinks.map((link) => (
                        <Link
                            className='text-[#053D57] border-transparent hover:border-b-2 font-semibold text-lg'
                            key={link.href}
                            href={link.href}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className='md:hidden'>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='focus:outline-none'>
                        {isOpen ?
                            (
                                <XIcon size={24} />
                            ) : (
                                <MenuIcon size={24} />
                            )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className='md:hidden absolute w-full bg-white shadow-lg z-10'>
                    <div className='flex flex-col items-center py-4'>
                        {navLinks.map((link) => (
                            <Link
                                className='text-[#053D57] py-3 w-full text-center font-semibold text-lg hover:bg-gray-100'
                                key={`mobile-${link.href}`}
                                href={link.href}
                                onClick={() => setIsOpen(false)}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar