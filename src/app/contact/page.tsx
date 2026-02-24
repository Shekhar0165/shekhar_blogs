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
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            {/* Tech Background Decor */}
            <div className="fixed inset-0 bg-grid opacity-[0.03] -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)]" />

            <div className="max-w-2xl mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--indigo)]/10 text-[var(--indigo)] text-[10px] font-bold uppercase tracking-widest mb-6 border border-[var(--indigo)]/20">
                    Get in touch
                </div>
                <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Let&apos;s Build Something <span className="bg-gradient-to-r from-[var(--indigo)] to-cyan-500 bg-clip-text text-transparent">Great.</span></h1>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                    Have a project in mind or just want to say hi? I&apos;m always open to discussing new opportunities,
                    backend architectures, or DevOps workflows.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Contact Form */}
                <div className="lg:col-span-7">
                    <div className="p-8 rounded-3xl bg-secondary/30 border border-border/50 shadow-2xl shadow-indigo-500/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--indigo)]/5 rounded-full blur-3xl -mr-16 -mt-16" />

                        <form onSubmit={handleSubmit} className="space-y-6 relative">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Your Name</label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        required
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className="h-12 rounded-xl bg-white border-muted focus-visible:ring-[var(--indigo)]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        required
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="h-12 rounded-xl bg-white border-muted focus-visible:ring-[var(--indigo)]"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    placeholder="Project Inquiry"
                                    required
                                    value={form.subject}
                                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                    className="h-12 rounded-xl bg-white border-muted focus-visible:ring-[var(--indigo)]"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className="rounded-xl bg-white border-muted focus-visible:ring-[var(--indigo)] resize-none min-h-[150px]"
                                />
                            </div>
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full bg-[var(--indigo)] hover:bg-[var(--indigo)]/90 text-white font-black h-14 rounded-xl shadow-xl shadow-[var(--indigo)]/20 transition-all active:scale-[0.98]"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? (
                                    <>
                                        <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                                        Transmitting...
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={18} className="ml-2" />
                                    </>
                                )}
                            </Button>

                            {status === 'success' && (
                                <div className="p-4 rounded-xl bg-emerald-50 text-emerald-700 text-sm font-bold flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    Message transmitted successfully!
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="p-4 rounded-xl bg-red-50 text-red-700 text-sm font-bold animate-in fade-in slide-in-from-bottom-2">
                                    Transmission failed. Please try again.
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                {/* Info */}
                <div className="lg:col-span-5 space-y-8">
                    <div className="p-8 rounded-3xl bg-[var(--indigo)] text-white shadow-2xl shadow-indigo-500/20 relative overflow-hidden group">
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mb-24 -mr-24" />
                        <h2 className="text-xl font-black mb-6 uppercase tracking-widest opacity-80">Direct Line</h2>
                        <div className="space-y-6 relative">
                            <a href="mailto:shekharkashyap913@gmail.com" className="flex items-center gap-4 group/item">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover/item:bg-white/20 transition-colors">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Email</p>
                                    <p className="font-bold text-lg">shekharkashyap913@gmail.com</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl bg-muted/30 border border-border backdrop-blur-sm">
                        <h2 className="text-xl font-black mb-6 uppercase tracking-widest text-muted-foreground/50">Follow Transmission</h2>
                        <div className="grid grid-cols-2 gap-4">
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
                                    className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-border/50 hover:border-[var(--indigo)] hover:shadow-lg transition-all group"
                                >
                                    <s.icon size={18} className="text-muted-foreground group-hover:text-[var(--indigo)] transition-colors" />
                                    <span className="text-xs font-bold uppercase tracking-widest">{s.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
