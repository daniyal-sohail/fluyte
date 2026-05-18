"use client";

import Link from "next/link";

export default function Terms() {
    return (
        <div className="min-h-screen bg-[var(--bg)]">
            <div className="max-w-[800px] mx-auto px-5 py-16">
                <Link href="/" className="inline-block mb-8 font-['Aldrich',sans-serif] text-[16px] tracking-wide text-[var(--text)] hover:text-[var(--brand)] transition-colors">
                    ← Back to Home
                </Link>

                <h1 className="text-[40px] font-bold text-[var(--text)] mb-8">Terms of Use</h1>

                <div className="prose prose-invert max-w-none">
                    <div className="space-y-6 text-[var(--text-muted)]">
                        <section>
                            <h2 className="text-[24px] font-semibold text-[var(--text)] mb-3">1. Disclaimer</h2>
                            <p className="leading-relaxed">
                                Fluyte is an independent personal project, not a registered company. This service is offered in good faith with no service guarantees, SLAs, or formal support contracts.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[24px] font-semibold text-[var(--text)] mb-3">2. User Responsibilities</h2>
                            <p className="leading-relaxed">
                                Users are responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their account. You agree to notify us immediately of any unauthorized access to your account.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[24px] font-semibold text-[var(--text)] mb-3">3. Limitation of Liability</h2>
                            <p className="leading-relaxed">
                                Fluyte is provided "as-is" without any warranties. In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[24px] font-semibold text-[var(--text)] mb-3">4. Data Protection</h2>
                            <p className="leading-relaxed">
                                We implement reasonable security measures to protect your data. However, as a personal project with no formal infrastructure, we cannot guarantee absolute security. Use at your own risk.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-[24px] font-semibold text-[var(--text)] mb-3">5. Changes to Terms</h2>
                            <p className="leading-relaxed">
                                We reserve the right to modify these terms at any time. Continued use of Fluyte after changes constitute acceptance of the new terms.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
