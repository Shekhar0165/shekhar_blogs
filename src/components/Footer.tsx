import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
    return (
        <footer className="border-t border-border bg-card mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="font-extrabold text-xl tracking-tight">
                                shekhar<span className="text-[var(--indigo)]">kashyap</span>
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Backend &amp; DevOps insights, tutorials, and guides for developers who build things that scale.
                        </p>
                    </div>

                    {/* Pages */}
                    <div>
                        <h4 className="font-semibold text-sm mb-4 tracking-wide uppercase text-muted-foreground">Pages</h4>
                        <div className="flex flex-col gap-2.5">
                            {[
                                { href: '/', label: 'Home' },
                                { href: '/blog', label: 'Blog' },
                                { href: '/about', label: 'About' },
                                { href: '/contact', label: 'Contact' },
                            ].map((l) => (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    className="text-sm text-muted-foreground hover:text-[var(--indigo)] transition-colors"
                                >
                                    {l.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Legal + Social */}
                    <div>
                        <h4 className="font-semibold text-sm mb-4 tracking-wide uppercase text-muted-foreground">Legal</h4>
                        <div className="flex flex-col gap-2.5 mb-6">
                            {[
                                { href: '/privacy-policy', label: 'Privacy Policy' },
                                { href: '/terms', label: 'Terms of Service' },
                                { href: '/disclaimer', label: 'Disclaimer' },
                            ].map((l) => (
                                <Link
                                    key={l.href}
                                    href={l.href}
                                    className="text-sm text-muted-foreground hover:text-[var(--indigo)] transition-colors"
                                >
                                    {l.label}
                                </Link>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            {[
                                { href: 'https://github.com/shekhar0165', icon: Github, label: 'GitHub' },
                                { href: 'https://linkedin.com/in/shekhar0165', icon: Linkedin, label: 'LinkedIn' },
                                { href: 'https://twitter.com/shekhar00165', icon: Twitter, label: 'Twitter' },
                            ].map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
                                    aria-label={s.label}
                                >
                                    <s.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <Separator className="my-8" />

                <p className="text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Shekhar Kashyap. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
