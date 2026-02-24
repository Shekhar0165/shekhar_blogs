import type { Metadata } from 'next';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
    title: 'About',
    description: 'Learn about Shekhar Kashyap — Backend & DevOps Engineer, blogger, and open source enthusiast.',
    openGraph: {
        title: 'About | ShekharKashyap.com',
        description: 'Learn about Shekhar Kashyap — Backend & DevOps Engineer.',
    },
};

const SKILLS = [
    'Node.js', 'NestJS', 'TypeScript', 'Python', 'Docker', 'Kubernetes',
    'AWS', 'PostgreSQL', 'MongoDB', 'Redis', 'CI/CD', 'Linux', 'Nginx',
    'System Design', 'GitHub Actions', 'REST APIs', 'GraphQL',
];

const TIMELINE = [
    {
        year: '2025 — Present',
        title: 'Backend Engineer @ Slay',
        desc: 'Building scalable REST APIs, video transcoding pipelines, and microservice architecture with NestJS and AWS.',
    },
    {
        year: '2023 — 2027',
        title: 'B.Tech Computer Science',
        desc: 'Studying Computer Science & Engineering with focus on systems programming and cloud infrastructure.',
    },
    {
        year: '2024',
        title: 'Open Source & Side Projects',
        desc: 'Built e-commerce scraper API, portfolio terminal, and contributed to open source projects.',
    },
];

export default function AboutPage() {
    return (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Tech Background Decor */}
            <div className="fixed inset-0 bg-dot opacity-[0.05] -z-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />

            {/* Profile */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-20 relative">
                <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-br from-[var(--indigo)] to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500" />
                    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br from-[var(--indigo)] to-[var(--indigo-light)] flex items-center justify-center text-white font-black text-6xl shadow-2xl overflow-hidden">
                        SK
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>

                <div className="text-center md:text-left pt-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--indigo)]/10 text-[var(--indigo)] text-[10px] font-bold uppercase tracking-widest mb-4 border border-[var(--indigo)]/20">
                        Available for collaborating
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-3 tracking-tighter">Shekhar Kashyap</h1>
                    <p className="text-xl font-bold text-muted-foreground/80 mb-6 uppercase tracking-[0.2em] text-[12px]">
                        Backend &amp; DevOps Engineer <span className="text-[var(--indigo)]">/</span> Slay
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl font-medium">
                        I specialize in building scalable, resilient backend architectures and automated DevOps pipelines.
                        My focus is on <span className="text-foreground border-b-2 border-[var(--indigo)]/30">System Design</span>,
                        cloud infrastructure, and high-performance APIs.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                <div className="lg:col-span-8">
                    {/* Journey */}
                    <div className="mb-20">
                        <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
                            <span className="w-8 h-1 bg-[var(--indigo)] rounded-full" />
                            My Journey
                        </h2>
                        <div className="space-y-4">
                            {TIMELINE.map((item, i) => (
                                <div key={i} className="group relative pl-8 border-l-2 border-border hover:border-[var(--indigo)] transition-colors py-2">
                                    <div className="absolute -left-[9px] top-4 w-4 h-4 rounded-full bg-white border-2 border-border group-hover:border-[var(--indigo)] group-hover:scale-125 transition-all duration-300" />
                                    <div className="p-1">
                                        <p className="text-[10px] font-black text-[var(--indigo)] uppercase tracking-widest mb-1">{item.year}</p>
                                        <h3 className="text-xl font-bold mb-2 group-hover:translate-x-1 transition-transform">{item.title}</h3>
                                        <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-wrap items-center gap-4">
                        {[
                            { href: 'https://github.com/shekhar0165', icon: Github, label: 'GitHub' },
                            { href: 'https://linkedin.com/in/shekhar0165', icon: Linkedin, label: 'LinkedIn' },
                            { href: 'https://twitter.com/shekhar00165', icon: Twitter, label: 'Twitter' },
                            { href: 'mailto:shekharkashyap913@gmail.com', icon: Mail, label: 'Email' },
                        ].map((s) => (
                            <Button key={s.label} variant="outline" size="lg" asChild className="rounded-xl border-2 hover:border-[var(--indigo)] hover:text-[var(--indigo)] transition-all font-bold group">
                                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex items-center gap-2">
                                    <s.icon size={18} className="group-hover:scale-110 transition-transform" />
                                    <span className="text-xs uppercase tracking-widest">{s.label}</span>
                                </a>
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-4">
                    {/* Skills */}
                    <div className="sticky top-32 p-8 rounded-3xl bg-muted/30 border border-border backdrop-blur-sm">
                        <h2 className="text-xl font-black mb-6 uppercase tracking-wider text-muted-foreground/50">Tech Stack</h2>
                        <div className="flex flex-wrap gap-2">
                            {SKILLS.map((skill) => (
                                <Badge key={skill} variant="secondary" className="bg-white border border-border/50 text-foreground font-bold text-[11px] px-3 py-1 hover:border-[var(--indigo)]/50 transition-colors uppercase tracking-tighter">
                                    {skill}
                                </Badge>
                            ))}
                        </div>

                        <div className="mt-10 pt-8 border-t border-border">
                            <Button asChild className="w-full bg-[var(--indigo)] hover:bg-[var(--indigo)]/90 text-white font-bold h-12 rounded-xl shadow-lg shadow-[var(--indigo)]/20">
                                <Link href="/contact">
                                    Work With Me <ArrowRight size={16} className="ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
