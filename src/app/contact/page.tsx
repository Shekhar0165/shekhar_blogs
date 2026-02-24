'use client';

import { useState, type FormEvent } from 'react';
import { Send, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch(`${API_URL}/messages`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus('success');
                setForm({ name: '', email: '', subject: '', message: '' });
            } else setStatus('error');
        } catch {
            setStatus('error');
        }
    };

    return (
        <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Contact</h1>
            <p className="text-muted-foreground mb-8">
                Have a question or want to work together? Send me a message!
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Mail size={16} className="text-[var(--indigo)]" />
                <a href="mailto:shekharkashyap913@gmail.com" className="hover:text-[var(--indigo)] transition-colors">shekharkashyap913@gmail.com</a>
            </div>
            <div className="flex gap-2 mb-10">
                {[
                    { href: 'https://github.com/shekhar0165', icon: Github, label: 'GitHub' },
                    { href: 'https://linkedin.com/in/shekhar0165', icon: Linkedin, label: 'LinkedIn' },
                    { href: 'https://twitter.com/shekhar00165', icon: Twitter, label: 'Twitter' },
                ].map((s) => (
                    <Button key={s.label} variant="ghost" size="icon" asChild className="rounded-lg">
                        <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                            <s.icon size={18} />
                        </a>
                    </Button>
                ))}
            </div>

            {status === 'success' ? (
                <Card className="border-green-500/30 bg-green-500/5">
                    <CardContent className="p-8 text-center">
                        <p className="text-green-600 dark:text-green-400 font-semibold text-lg mb-1">✅ Message sent!</p>
                        <p className="text-sm text-muted-foreground">I&apos;ll get back to you as soon as possible.</p>
                    </CardContent>
                </Card>
            ) : (
                <Card>
                    <CardContent className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Name *</label>
                                    <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" className="h-11" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">Email *</label>
                                    <Input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@example.com" className="h-11" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Subject *</label>
                                <Input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Let's work together" className="h-11" />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Message *</label>
                                <Textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Hey Shekhar..." className="min-h-[120px]" />
                            </div>
                            {status === 'error' && (
                                <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                            )}
                            <Button
                                type="submit"
                                disabled={status === 'sending'}
                                size="lg"
                                className="bg-[var(--indigo)] hover:bg-[var(--indigo)]/90 text-white shadow-md shadow-[var(--indigo)]/20 h-12 px-8"
                            >
                                <Send size={16} className="mr-2" />
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            )}
        </section>
    );
}
