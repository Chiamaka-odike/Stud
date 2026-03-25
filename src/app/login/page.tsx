"use client";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <main className="min-h-screen flex flex-col md:flex-row">
        {/* Brand/Illustration Section */}
        <section className="hidden md:flex w-1/2 bg-surface-container-low relative flex-col justify-between p-16 overflow-hidden">
          <div className="z-10">
            <h1 className="font-headline text-3xl font-black text-primary tracking-tighter">
              StudySphere
            </h1>
            <div className="mt-24 max-w-md">
              <h2 className="font-headline text-5xl font-extrabold text-on-background leading-tight tracking-tight">
                Your Academic <span className="text-primary">Environment.</span>
              </h2>
              <p className="mt-6 text-on-surface-variant text-lg leading-relaxed">
                Step into a curated digital workspace designed for deep focus
                and AI-enhanced research.
              </p>
            </div>
          </div>
          {/* Asymmetric Illustration Element */}
          <div className="absolute bottom-0 right-0 w-full h-2/3 pointer-events-none translate-x-12 translate-y-12">
            <div className="relative w-full h-full">
              {/* Geometric AI Representation */}
              <div className="absolute bottom-20 right-20 w-80 h-96 bg-surface-container-lowest rounded-xl ai-node-glow rotate-3 border-outline-variant/15 border flex items-center justify-center p-8">
               {/* Using remote image from their HTML */}
                <img
                  alt="AI data visualization abstraction"
                  className="w-full h-full object-cover rounded-lg opacity-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpVu4rwfKiodC8JK95y3F7s6WJQAg0GifD_33iAMOFsKIUj8xk7Xe1qXYNVQ9Wy-5FSkIz-9V2kqzfTmPH5nhHRxHSZPTIlgw8h9MqE63UfoxXVPM_vjZ6q7TmMsofBnLdr1lB_grZV--b5_Z3-_I8gUqRYUqMXEX5879Row5FryyqRK6cmQdAFEgX1iQlCisQBbN_ApHoPYv6BszRpTXvHLalmpkU6rht9fhiax6qgW0l-HX_HMQcwe5M6JjJ9DWQG9OsOg0R1qJJ"
                />
              </div>
              <div className="absolute bottom-40 right-48 w-64 h-80 bg-primary-container/30 rounded-xl backdrop-blur-sm -rotate-6 border border-white/40"></div>
            </div>
          </div>
          <footer className="z-10">
            <p className="text-sm text-on-surface-variant/70 italic">
              Curated for the next generation of scholars.
            </p>
          </footer>
        </section>
        {/* Authentication Canvas */}
        <section className="flex-1 flex flex-col justify-center items-center p-6 md:p-12 lg:p-24 bg-surface-container-lowest">
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-2">
              <h3 className="font-headline text-3xl font-bold tracking-tight text-on-background">
                Welcome Back
              </h3>
              <p className="text-on-surface-variant text-sm">
                Please enter your details to access your workspace.
              </p>
            </div>
            {/* Form Section */}
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1.5">
                <label
                  className="text-xs font-bold text-on-surface-variant uppercase tracking-wider ml-1"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/30 focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline outline-none"
                  id="email"
                  placeholder="scholar@university.edu"
                  type="email"
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center ml-1">
                  <label
                    className="text-xs font-bold text-on-surface-variant uppercase tracking-wider"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Link
                    href="#"
                    className="text-xs font-semibold text-primary hover:underline"
                  >
                    Forgot?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/30 focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline outline-none"
                    id="password"
                    placeholder="••••••••"
                    type="password"
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline cursor-pointer select-none">
                    visibility
                  </span>
                </div>
              </div>
              <Link href="/dashboard" passHref legacyBehavior>
                <button type="submit" className="block text-center w-full bg-gradient-to-r from-primary to-primary-dim text-on-primary font-bold py-4 rounded-full shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all mt-2 cursor-pointer">
                  Enter StudySphere
                </button>
              </Link>
            </form>
            {/* Divider */}
            <div className="relative py-4 flex items-center">
              <div className="flex-grow border-t border-surface-container-highest"></div>
              <span className="flex-shrink mx-4 text-xs font-bold text-outline-variant uppercase tracking-widest">
                Or Continue With
              </span>
              <div className="flex-grow border-t border-surface-container-highest"></div>
            </div>
            {/* Social Auth Cluster */}
            <div className="w-full">
              <button className="w-full flex items-center justify-center gap-3 bg-surface-container-low hover:bg-surface-container-high transition-colors text-on-secondary-container font-semibold py-3.5 rounded-full border border-outline-variant/10 cursor-pointer">
                <span className="material-symbols-outlined text-[20px]">
                  account_balance_wallet
                </span>
                <span className="text-sm">Connect Wallet</span>
              </button>
            </div>
            {/* AI Suggestion Bubble */}
            <div className="mt-12 p-5 bg-tertiary-container/10 border border-tertiary-container/30 rounded-xl ai-node-glow flex gap-4 items-start">
              <div className="bg-tertiary-container p-2 rounded-lg">
                <span
                  className="material-symbols-outlined text-on-tertiary-container text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  auto_awesome
                </span>
              </div>
              <div>
                <p className="text-xs font-semibold text-on-tertiary-container uppercase tracking-widest mb-1">
                  Scholar Tip
                </p>
                <p className="text-sm text-on-tertiary-fixed-variant leading-relaxed">
                  Connect your institution email to automatically sync your
                  research credits and library access.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer from HTML */}
      <footer className="bg-[#f1f4f5] dark:bg-slate-950 w-full rounded-none mt-auto py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="text-xl font-bold text-[#1a677d] dark:text-cyan-500 mb-2">
              StudySphere
            </div>
            <p className="text-slate-500 dark:text-slate-500 font-['Inter'] text-sm">
              © 2026 StudySphere.
            </p>
        </div>
      </footer>
    </>
  );
}
