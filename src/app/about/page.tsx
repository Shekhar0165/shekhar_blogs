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
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Profile */}
            <div className="flex flex-col sm:flex-row items-start gap-6 mb-14">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[var(--indigo)] to-[var(--indigo-light)] flex items-center justify-center text-white font-bold text-3xl flex-shrink-0 shadow-xl shadow-[var(--indigo)]/20">
                    SK
                </div>
                <div>
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-1">Shekhar Kashyap</h1>
                    <p className="text-[var(--indigo)] font-semibold mb-4">Backend &amp; DevOps Engineer</p>
                    <p className="text-muted-foreground leading-relaxed">
                        I&apos;m a backend engineer passionate about building scalable, reliable systems.
                        Currently working at Slay, where I design APIs and cloud infrastructure.
                        I write about Docker, AWS, Node.js, system design, and everything that makes
                        backend systems tick. When I&apos;m not coding, I&apos;m learning about distributed
                        systems and contributing to open source.
                    </p>
                </div>
            </div>

            {/* Skills */}
            <div className="mb-14">
                <h2 className="text-2xl font-bold mb-5">Skills &amp; Technologies</h2>
                <div className="flex flex-wrap gap-2">
                    {SKILLS.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-sm py-1.5 px-3 font-medium">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Timeline */}
            <div className="mb-14">
                <h2 className="text-2xl font-bold mb-6">Journey</h2>
                <div className="space-y-0">
                    {TIMELINE.map((item, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className="w-3 h-3 rounded-full bg-[var(--indigo)] flex-shrink-0 mt-1.5 ring-4 ring-[var(--indigo)]/10" />
                                {i < TIMELINE.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
                            </div>
                            <Card className="flex-1 mb-4 border-border">
                                <CardContent className="p-5">
                                    <p className="text-xs font-semibold text-[var(--indigo)] mb-1 tracking-wide">{item.year}</p>
                                    <h3 className="font-bold text-base">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2 mb-8">
                {[
                    { href: 'https://github.com/shekhar0165', icon: Github, label: 'GitHub' },
                    { href: 'https://linkedin.com/in/shekhar0165', icon: Linkedin, label: 'LinkedIn' },
                    { href: 'https://twitter.com/shekhar00165', icon: Twitter, label: 'Twitter' },
                    { href: 'mailto:shekharkashyap913@gmail.com', icon: Mail, label: 'Email' },
                ].map((s) => (
                    <Button key={s.label} variant="ghost" size="icon" asChild className="rounded-lg">
                        <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                            <s.icon size={20} />
                        </a>
                    </Button>
                ))}
            </div>

            <Button asChild size="lg" className="bg-[var(--indigo)] hover:bg-[var(--indigo)]/90 text-white shadow-md shadow-[var(--indigo)]/20 h-12 px-8">
                <Link href="/contact">
                    Get in Touch <ArrowRight size={16} className="ml-2" />
                </Link>
            </Button>
        </section>
    );
}
