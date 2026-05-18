"use client";

import Link from "next/link";

export default function Privacy() {
    return (
        <div className="min-h-screen bg-[var(--bg)]">
            <div className="max-w-[800px] mx-auto px-5 py-16">
                <Link href="/" className="inline-block mb-8 font-['Aldrich',sans-serif] text-[16px] tracking-wide text-[var(--text)] hover:text-[var(--brand)] transition-colors">
                    ← Back to Home
                </Link>

                <h1 className="text-[40px] font-bold text-[var(--text)] mb-8">Privacy Policy</h1>

                <div className="prose prose-invert max-w-none">
                    <div className="space-y-6 text-[var(--text-muted)]">
                        <section>
                            <h2 className="text-[24px] font-semibold text-[var(--text)] mb-3">1. Information We Collect</h2>
                            <p className="leading-relaxed">
                                We collect information you provide directly to us, such as your name, email address, and inventory data. We also automatically collect certain technical information when you use Fluyte.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[24px] font-semibold text-[var(--text)] mb-3">2. How We Use Your Information</h2>
                            <p className="leading-relaxed">
                                We use the information we collect to provide, maintain, and improve Fluyte, process transactions, and communicate with you about your account and our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[24px] font-semibold text-[var(--text)] mb-3">3. Data Security</h2>
                            <p className="leading-relaxed">
                                We implement reasonable security measures to protect your personal information. However, as a personal project, we cannot guarantee absolute security. Please use caution when sharing sensitive information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[24px] font-semibold text-[var(--text)] mb-3">4. Third-Party Sharing</h2>
                            <p className="leading-relaxed">
                                We do not share your personal information with third parties for marketing purposes. We may share information when required by law or to protect our rights.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[24px] font-semibold text-[var(--text)] mb-3">5. Your Rights</h2>
                            <p className="leading-relaxed">
                                You may request to access, correct, or delete your personal information at any time by contacting us through your account settings or by email.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[24px] font-semibold text-[var(--text)] mb-3">6. Changes to This Policy</h2>
                            <p className="leading-relaxed">
                                We may update this Privacy Policy periodically. We will notify you of any material changes by posting the new policy on this page.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
