import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Privacy policy for ShekharKashyap.com — how we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
    return (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-sm text-[var(--muted-foreground)] mb-8">Last updated: February 2026</p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                    At ShekharKashyap.com (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), we are committed to protecting your
                    privacy. This Privacy Policy describes how we collect, use, and share information when you
                    visit our website.
                </p>

                <h2>Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul>
                    <li><strong>Personal Information:</strong> When you use our contact form, we collect your name, email address, and any message content you provide.</li>
                    <li><strong>Usage Data:</strong> We automatically collect information about your browser type, operating system, IP address, pages visited, and time spent on pages through analytics tools.</li>
                    <li><strong>Cookies:</strong> We use cookies and similar technologies to enhance your experience and gather analytics data.</li>
                </ul>

                <h2>How We Use Information</h2>
                <ul>
                    <li>To respond to your inquiries and messages</li>
                    <li>To improve our website content and user experience</li>
                    <li>To analyze website traffic and usage patterns</li>
                    <li>To serve relevant advertisements through Google AdSense</li>
                    <li>To send newsletters if you opt in</li>
                </ul>

                <h2>Cookies and Advertising</h2>
                <p>
                    This website uses Google AdSense, a service provided by Google LLC, to display advertisements.
                    Google AdSense uses cookies to serve ads based on your prior visits to this website and other
                    websites. Google&apos;s use of advertising cookies enables it and its partners to serve ads based on
                    your browsing history.
                </p>
                <p>
                    You may opt out of personalized advertising by visiting{' '}
                    <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
                        Google Ads Settings
                    </a>.
                </p>
                <p>
                    We also use Google Analytics to understand how visitors interact with our website. Google Analytics
                    uses cookies to collect anonymous statistical data.
                </p>

                <h2>Third-Party Links</h2>
                <p>
                    Our website may contain links to third-party websites. We are not responsible for the privacy
                    practices or content of these external sites. We encourage you to read the privacy policy of
                    every website you visit.
                </p>

                <h2>Data Retention</h2>
                <p>
                    We retain personal information collected via the contact form for as long as necessary to
                    respond to your inquiry. Usage data collected through analytics is retained according to the
                    default retention settings of the analytics provider.
                </p>

                <h2>Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                    <li>Request access to the personal data we hold about you</li>
                    <li>Request correction or deletion of your personal data</li>
                    <li>Opt out of cookies and personalized advertising</li>
                    <li>Withdraw consent for data processing at any time</li>
                </ul>

                <h2>Children&apos;s Privacy</h2>
                <p>
                    This website is not intended for children under the age of 13. We do not knowingly collect
                    personal information from children under 13.
                </p>

                <h2>Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by
                    posting the new Privacy Policy on this page with an updated date.
                </p>

                <h2>Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at{' '}
                    <a href="mailto:shekharkashyap913@gmail.com">shekharkashyap913@gmail.com</a>.
                </p>
            </div>
        </section>
    );
}
