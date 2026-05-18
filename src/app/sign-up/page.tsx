"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-5 bg-[var(--bg)]">
            <div className="w-full max-w-[400px]">
                {/* Header */}
                <div className="mb-8 text-center">
                    <Link href="/" className="inline-block mb-6 font-['Aldrich',sans-serif] text-[18px] tracking-wide text-[var(--text)] hover:text-[var(--brand)] transition-colors">
                        Fluyte
                    </Link>
                    <h1 className="text-[32px] font-bold text-[var(--text)] mb-2">Sign Up</h1>
                    <p className="text-[14px] text-[var(--text-muted)]">
                        Start managing your inventory today
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-4">
                    <div>
                        <label className="block text-[13px] font-medium text-[var(--text)] mb-2">Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Doe"
                            className="w-full px-4 py-2.5 rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--brand)]"
                        />
                    </div>

                    <div>
                        <label className="block text-[13px] font-medium text-[var(--text)] mb-2">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full px-4 py-2.5 rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--brand)]"
                        />
                    </div>

                    <div>
                        <label className="block text-[13px] font-medium text-[var(--text)] mb-2">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full px-4 py-2.5 rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--brand)]"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2.5 rounded-lg bg-[var(--brand)] text-white font-medium text-[13px] hover:bg-[var(--brand-dark)] transition-colors"
                    >
                        Create Account
                    </button>
                </form>

                {/* Footer */}
                <div className="mt-6 text-center text-[13px] text-[var(--text-muted)]">
                    Already have an account?{" "}
                    <Link href="/sign-in" className="text-[var(--brand)] hover:underline font-medium">
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}
