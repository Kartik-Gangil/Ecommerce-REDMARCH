import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Youtube, Github, Twitter, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

/**
 * Drop this component anywhere in your React app.
 * TailwindCSS required. (Works great in CRA, Vite, or Next.js.)
 *
 * Usage:
 *   <ComingSoon launchDate="2025-12-31T12:00:00" brand="Creovate" />
 */
export default function ComingSoon({
    launchDate = "2025-12-31T12:00:00",
    brand = "RedMarch",
    // onNotify,
}: {
    launchDate?: string;
    brand?: string;
    onNotify?: (email: string) => void;
    }) {
    const Navigate = useNavigate();
    const target = useMemo(() => new Date(launchDate).getTime(), [launchDate]);
    const [now, setNow] = useState(Date.now());
    // const [email, setEmail] = useState("");
    // const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    // const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const t = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(t);
    }, []);

    const diff = Math.max(0, target - now);
    const secs = Math.floor(diff / 1000);
    const days = Math.floor(secs / (3600 * 24));
    const hours = Math.floor((secs % (3600 * 24)) / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const seconds = secs % 60;
    const launched = diff <= 0;

    // function isValidEmail(v: string) {
    //     return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(v);
    // }

    // async function handleSubmit(e: React.FormEvent) {
    //     e.preventDefault();
    //     setError(null);
    //     if (!isValidEmail(email)) {
    //         setError("Please enter a valid email.");
    //         return;
    //     }
    //     try {
    //         setStatus("loading");
    //         // Hook this up to your backend/API (Mailchimp, Resend, Firebase, etc.)
    //         // For now we simulate success + optionally call a passed handler.
    //         await new Promise((r) => setTimeout(r, 900));
    //         onNotify?.(email);
    //         setStatus("success");
    //         setEmail("");
    //     } catch (err) {
    //         setStatus("error");
    //         setError("Something went wrong. Try again.");
    //     }
    // }

    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-red-950 via-red-900 to-black text-zinc-100 flex items-center justify-center p-4">
            {/* Background orbs */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.35, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl bg-fuchsia-600/30"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.35, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.1 }}
                    className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full blur-3xl bg-blue-600/30"
                />
            </div>

            <motion.main
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-3xl"
            >
                {/* Card */}
                <div className="backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/5 border border-white/10 rounded-2xl shadow-2xl">
                    <div className="p-6 sm:p-10">
                        {/* Logo / Brand */}
                        <div className="flex items-center gap-3">
                            <ArrowLeft onClick={()=>Navigate('/')} className="cursor-pointer"/>
                            <div className="size-10 rounded-xl bg-white/10 grid place-items-center ">
                               <img src="/logo.png" alt="logo" />
                            </div>
                            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">{brand}</h1>
                        </div>

                        {/* Headline */}
                        <h2 className="mt-6 text-3xl sm:text-5xl font-extrabold leading-tight">
                            {launched ? "We are live!" : "Something awesome is coming soon"}
                        </h2>
                        <p className="mt-3 text-zinc-300/90 max-w-prose">
                            {launched
                                ? "Thanks for your patience — explore our new experience."
                                : "We’re polishing the final bits. Join the list and be first to know when we launch."}
                        </p>

                        {/* Countdown */}
                        {!launched && (
                            <div className="mt-8 grid grid-cols-4 gap-2 sm:gap-4">
                                {[{ label: "Days", value: days }, { label: "Hours", value: hours }, { label: "Minutes", value: minutes }, { label: "Seconds", value: seconds }].map(
                                    (item) => (
                                        <div
                                            key={item.label}
                                            className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 text-center"
                                        >
                                            <div className="text-2xl sm:text-4xl font-bold tabular-nums">
                                                {String(item.value).padStart(2, "0")}
                                            </div>
                                            <div className="mt-1 text-xs sm:text-sm uppercase tracking-wider text-zinc-300/80">
                                                {item.label}
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        )}

                        {/* Notify form */}
                        {/* <form onSubmit={handleSubmit} className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3">
                            <div className="relative flex-1">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-zinc-400" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email to get notified"
                                    className="w-full rounded-2xl bg-zinc-950/60 border border-white/10 pl-11 pr-4 py-3 outline-none focus:ring-4 focus:ring-fuchsia-500/20 focus:border-fuchsia-500/40"
                                />
                                {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
                            </div>
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="rounded-2xl px-6 py-3 font-semibold shadow-lg border border-fuchsia-500/20 bg-fuchsia-600/90 hover:bg-fuchsia-600 active:scale-[.99] transition disabled:opacity-60"
                            >
                                {status === "loading" ? "Joining…" : status === "success" ? "Joined!" : "Notify Me"}
                            </button>
                        </form> */}

                        {/* Social row */}
                        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 text-zinc-300/90">
                            <span className="text-sm">Follow us:</span>
                            <SocialLink href="#" label="Instagram">
                                <Instagram className="size-5" />
                            </SocialLink>
                            <SocialLink href="#" label="YouTube">
                                <Youtube className="size-5" />
                            </SocialLink>
                            <SocialLink href="#" label="Twitter">
                                <Twitter className="size-5" />
                            </SocialLink>
                            <SocialLink href="#" label="GitHub">
                                <Github className="size-5" />
                            </SocialLink>
                        </div>
                    </div>

                    {/* Footer strip */}
                    <div className="px-6 sm:px-10 py-4 border-t border-white/10 text-sm text-zinc-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                        <div>© {new Date().getFullYear()} {brand}. All rights reserved.</div>
                        <div className="flex items-center gap-2">
                            <span className="inline-flex h-2 w-2 rounded-full bg-red-400 animate-pulse" />
                            
                        </div>
                    </div>
                </div>
            </motion.main>
        </div>
    );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            aria-label={label}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 hover:bg-white/10 transition"
        >
            {children}
            <span className="text-sm">{label}</span>
        </a>
    );
}
