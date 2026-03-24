import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-surface flex flex-col font-body">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-surface-container-highest">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="font-headline font-black text-2xl text-primary tracking-tighter">
              StudySphere
            </Link>
            <div className="hidden md:flex items-center gap-8 font-medium text-sm text-on-surface-variant">
              <Link href="#" className="hover:text-primary transition-colors">Home</Link>
              <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
              <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-semibold text-primary hover:underline">
              Login
            </Link>
            <Link href="/login" className="bg-primary text-on-primary text-sm font-semibold px-6 py-2.5 rounded-full shadow-md shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 flex flex-col w-full">
        {/* Hero Section */}
        <section className="relative px-6 py-24 md:py-32 flex flex-col items-center text-center overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary-container/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container/50 border border-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Redefining Education
            </div>
            
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-on-background tracking-tight leading-tight mb-8">
              Your AI-Powered <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim italic pr-2">Journey to Mastery.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
              Personalized learning for students and researchers. Study smarter, not harder with tools designed for deep focus and academic excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link href="/login" className="w-full sm:w-auto bg-primary text-on-primary text-base font-bold px-8 py-4 rounded-full shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-transform flex justify-center items-center gap-2">
                Get Started
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Link>
              <Link href="/login" className="w-full sm:w-auto bg-surface-container-high text-on-surface-variant hover:text-on-background text-base font-bold px-8 py-4 rounded-full transition-colors flex justify-center items-center">
                Login
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="px-6 py-24 bg-surface border-t border-surface-container-highest relative overflow-hidden">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center relative z-10">
            <h2 className="font-headline text-4xl font-extrabold text-on-background mb-6">Master Any Subject with Ease</h2>
            <p className="text-lg text-on-surface-variant mb-12 leading-relaxed max-w-2xl">
              StudySphere provides all the tools you need to accelerate your learning and retain knowledge longer.
            </p>
            
            <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-10 shadow-sm w-full text-left">
              <ul className="space-y-6 text-on-surface font-medium text-lg list-disc list-inside marker:text-primary pl-4">
                <li>Get instant explanations</li>
                <li>Organise your library</li>
                <li>Follow structured content</li>
                <li>Track your progress</li>
                <li>Learn interactively in one place</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="px-6 py-24 bg-surface-container-low border-t border-surface-container-highest">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <h2 className="font-headline text-4xl font-extrabold text-on-background mb-4 text-center">Invest in Your Intelligence</h2>
            <p className="text-on-surface-variant mb-16 text-center max-w-xl">Flexible tiers tailored for every stage of your academic journey.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
              
              {/* Free Plan */}
              <div className="flex flex-col p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 relative mt-8">
                <h3 className="text-xl font-bold text-on-surface mb-2">Free Plan</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-on-background">₦0</span>
                  <span className="text-on-surface-variant text-sm">/month</span>
                </div>
                <p className="text-sm text-on-surface-variant mb-8 line-clamp-2 min-h-[40px]">
                  Perfect for getting started
                </p>
                
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                    <span>Access to basic course content (SS1–SS3 + limited university topics)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                    <span>AI explanations (with daily usage limits)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                    <span>Ability to view full course outlines</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                    <span>Create up to 2 study libraries per course</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                    <span>Basic progress tracking</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                    <span>Access on one device</span>
                  </li>
                </ul>
                
                <Link href="/login" className="w-full py-3.5 border border-primary text-primary font-bold rounded-full text-center hover:bg-primary/5 transition-colors mt-auto">
                  Choose Plan
                </Link>
              </div>

              {/* Premium Plan (Recommended) */}
              <div className="flex flex-col p-8 rounded-3xl bg-surface-container-lowest border-2 border-primary shadow-xl shadow-primary/10 relative transform md:-translate-y-4 z-10">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Recommended
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-2">Premium Plan</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-primary">₦2,500</span>
                  <span className="text-on-surface-variant text-sm">/month</span>
                </div>
                <p className="text-sm text-on-surface-variant mb-8 line-clamp-2 min-h-[40px]">
                  For serious students who want more control and depth
                </p>
                
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3 text-sm text-on-surface font-medium">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                    <span>Full access to all courses (Secondary + University)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface font-medium">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                    <span>Increased AI usage (longer explanations + more questions per day)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface font-medium">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                    <span>Create up to 10 study libraries per course</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface font-medium">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                    <span>Save and organize topics freely</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface font-medium">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                    <span>Advanced progress tracking (completion stats, learning streaks)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface font-medium">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                    <span>Faster response time from AI assistant</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface font-medium">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                    <span>Access across multiple devices</span>
                  </li>
                </ul>
                
                <Link href="/login" className="w-full py-3.5 bg-primary text-on-primary font-bold rounded-full text-center hover:scale-[1.02] transition-transform shadow-md shadow-primary/20 mt-auto">
                  Choose Plan
                </Link>
              </div>

              {/* Pro Plan */}
              <div className="flex flex-col p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/30 relative mt-8">
                <h3 className="text-xl font-bold text-on-surface mb-2">Pro Plan</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-on-background">₦5,000</span>
                  <span className="text-on-surface-variant text-sm">/month</span>
                </div>
                <p className="text-sm text-on-surface-variant mb-8 line-clamp-2 min-h-[40px]">
                  For power users, researchers, and advanced learners
                </p>
                
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                    <span>Everything in Premium</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                    <span>Unlimited AI assistance (no daily limits)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                    <span>Custom course generation</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                    <span>Unlimited study libraries</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                    <span>Deep-dive explanations</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                    <span>Priority AI responses</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                    <span>Personalized learning recommendations</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                    <span>Full analytics dashboard</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-on-surface">
                    <span className="material-symbols-outlined text-[18px] text-primary shrink-0">check_circle</span>
                    <span>Early access to new features</span>
                  </li>
                </ul>
                
                <Link href="/login" className="w-full py-3.5 border border-primary text-primary font-bold rounded-full text-center hover:bg-primary/5 transition-colors mt-auto">
                  Choose Plan
                </Link>
              </div>

            </div>
          </div>
        </section>

      </main>

      <footer className="bg-surface-container-highest w-full mt-auto">
        <div className="px-6 py-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold text-primary mb-2">StudySphere</div>
            <p className="text-on-surface-variant text-sm">
              © 2024 StudySphere. Curated for deep work.
            </p>
          </div>
          <div className="flex gap-6 text-sm font-medium text-on-surface-variant">
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="#" className="hover:text-primary transition-colors">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
