'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
                ? 'glass shadow-lg shadow-indigo-500/5'
                : 'bg-transparent border-b border-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20 transition-all duration-500">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        {/* <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--indigo)] to-[var(--indigo-light)] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[var(--indigo)]/20 group-hover:scale-110 transition-transform duration-300">
                            S
                        </div> */}
                        <span className="font-extrabold text-xl tracking-tight group-hover:text-[var(--indigo)] transition-colors">
                            shekhar<span className="text-[var(--indigo)]">kashyap</span>
                        </span>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 group/link"
                            >
                                {link.label}
                                <span className="absolute bottom-1.5 left-4 right-4 h-0.5 bg-[var(--indigo)] scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-center" />
                            </Link>
                        ))}
                    </div>

                    {/* Mobile */}
                    <div className="flex md:hidden items-center gap-1">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setOpen(!open)}
                            aria-label="Toggle menu"
                        >
                            {open ? <X size={20} /> : <Menu size={20} />}
                        </Button>
                    </div>
                </div>

                {/* Mobile menu */}
                {open && (
                    <div className="md:hidden pb-4 border-t border-border mt-2 pt-3 space-y-1">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
