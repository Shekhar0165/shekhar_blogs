import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getAllPosts } from '@/lib/api';
import BlogCard from '@/components/BlogCard';
import NewsletterForm from '@/components/NewsletterForm';

export default async function HomePage() {
  const posts = await getAllPosts();
  const featured = posts.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
        {/* Tech Background */}
        <div className="absolute inset-0 bg-grid opacity-[0.1] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        <div className="absolute inset-0 bg-dot opacity-[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />

        <div className="absolute top-40 left-[10%] w-[300px] h-[300px] bg-[var(--indigo)]/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-40 right-[10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl transform transition-all duration-700 ease-out animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--indigo)]/10 text-[var(--indigo)] text-xs font-bold mb-6 border border-[var(--indigo)]/20 uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--indigo)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--indigo)]"></span>
              </span>
              System.Status: Online
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.95] mb-8">
              Engineering <br />
              <span className="text-muted-foreground/30">the</span>{' '}
              <span className="bg-gradient-to-r from-[var(--indigo)] via-[var(--indigo-light)] to-cyan-400 bg-clip-text text-transparent">
                Future.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg font-medium">
              Deep dives into <span className="text-foreground">Backend Architecture</span>, <span className="text-foreground">DevOps</span>, and scalable systems. Built for engineers who want to go deeper.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-[var(--indigo)] hover:bg-[var(--indigo)]/90 text-white shadow-xl shadow-[var(--indigo)]/20 px-8 h-14 text-base font-bold rounded-xl transition-all hover:scale-105 active:scale-95">
                <Link href="/blog">
                  Explore Articles
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="h-14 px-8 rounded-xl border-2 font-bold hover:bg-muted/50 transition-all">
                <Link href="/about">About Me</Link>
              </Button>
            </div>
          </div>

          {/* Hero Visual - Terminal/Tech Elements */}
          <div className="hidden lg:block relative">
            <div className="relative z-10 p-1 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-2xl backdrop-blur-sm overflow-hidden group">
              <div className="bg-[#0b0f1a] rounded-xl overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-3 bg-white/5 border-b border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                  <div className="ml-2 text-[10px] font-mono text-muted-foreground/50 uppercase tracking-widest">shekhar.terminal — 80×24</div>
                </div>
                <div className="p-6 font-mono text-sm sm:text-base leading-relaxed">
                  <div className="flex gap-3 mb-2">
                    <span className="text-emerald-400">➜</span>
                    <span className="text-cyan-400">~</span>
                    <span className="text-white">whoami</span>
                  </div>
                  <div className="text-muted-foreground mb-4">Shekhar Kashyap (Backend & DevOps)</div>

                  <div className="flex gap-3 mb-2">
                    <span className="text-emerald-400">➜</span>
                    <span className="text-cyan-400">~</span>
                    <span className="text-white">ls skills/</span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 mb-4 text-indigo-400">
                    <div>• AWS/Cloud</div>
                    <div>• Docker/K8s</div>
                    <div>• Node.js/Nest</div>
                    <div>• Architecture</div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <span className="text-emerald-400">➜</span>
                    <span className="text-cyan-400">~</span>
                    <span className="w-2 h-5 bg-[var(--indigo)] animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/40 transition-colors" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
            </div>

            {/* Decors */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-indigo-500/10 rounded-2xl -z-10 translate-x-4 translate-y-4" />
            <div className="absolute top-1/2 -right-12 -translate-y-1/2 flex flex-col gap-3 font-mono text-[10px] text-muted-foreground/20 leading-none select-none">
              <span>01001010</span>
              <span>11001101</span>
              <span>00110011</span>
              <span>10101010</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Latest Articles</h2>
            <p className="text-muted-foreground mt-1">Fresh content from the blog</p>
          </div>
          <Button variant="ghost" asChild className="text-[var(--indigo)] hover:text-[var(--indigo)] hover:bg-[var(--indigo)]/10">
            <Link href="/blog">
              View all <ArrowRight size={14} className="ml-1" />
            </Link>
          </Button>
        </div>

        {featured.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 rounded-2xl border border-dashed border-border bg-muted/50">
            <p className="text-lg mb-2 font-medium">No posts yet</p>
            <p className="text-sm text-muted-foreground">Create your first blog post from the admin panel!</p>
          </div>
        )}
      </section>

      {/* Newsletter */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl bg-gradient-to-br from-[var(--indigo)]/[0.08] via-muted/50 to-transparent border border-border p-8 md:p-14 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Stay Updated</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Get notified when I publish new articles about backend engineering and DevOps.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
