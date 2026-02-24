import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <section className="max-w-2xl mx-auto px-4 py-32 text-center">
            <div className="text-[10rem] leading-none font-extrabold bg-gradient-to-b from-[var(--indigo)]/20 to-transparent bg-clip-text text-transparent select-none">
                404
            </div>
            <h1 className="text-3xl font-bold mb-3 -mt-4">Page Not Found</h1>
            <p className="text-muted-foreground mb-8">
                Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Button asChild size="lg" className="bg-[var(--indigo)] hover:bg-[var(--indigo)]/90 text-white h-12 px-8">
                <Link href="/">Go Home</Link>
            </Button>
        </section>
    );
}
