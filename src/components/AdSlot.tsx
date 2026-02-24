export default function AdSlot({ className = '' }: { className?: string }) {
    return (
        <div
            className={`border border-dashed border-[var(--border)] rounded-lg p-4 text-center text-xs text-[var(--muted-foreground)] bg-[var(--muted)]/50 ${className}`}
        >
            {/* Replace this div with your actual AdSense code */}
            <p>Ad Space</p>
            {/* 
            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                data-ad-slot="XXXXXXXXXX"
                data-ad-format="auto"
                data-full-width-responsive="true" />
            */}
        </div>
    );
}
