import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-surface-container-lowest font-body flex flex-col">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-surface-container-highest h-20 px-8 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/dashboard" className="font-headline font-black text-2xl text-primary tracking-tighter">
            StudySphere
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-semibold text-on-surface-variant">
            <Link href="/dashboard" className="text-primary border-b-2 border-primary pb-1">Dashboard</Link>
            <Link href="/libraries" className="hover:text-primary transition-colors">Libraries</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="relative hidden md:block">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
            <input type="text" placeholder="Search resources..." className="pl-12 pr-4 py-2.5 bg-surface-container-high border-none rounded-full text-sm text-on-surface focus:ring-2 focus:ring-primary/30 outline-none w-64" />
          </div>
          <Link href="/profile" className="w-10 h-10 rounded-full border-2 border-primary/20 overflow-hidden flex items-center justify-center bg-secondary-container text-on-secondary-container hover:scale-105 transition-transform">
            <span className="material-symbols-outlined">person</span>
          </Link>
        </div>
      </header>
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12">
        <div className="mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-black text-primary tracking-tight mb-4">Welcome back, Scholar.</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl">
            Your personalized academic environment is ready. Choose a path below to continue your journey through curated research and interactive learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* 1. Secondary School */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-8 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-4">
              <span className="material-symbols-outlined text-[18px]">school</span>
              K-12 Foundation
            </div>
            <h2 className="font-headline text-3xl font-extrabold text-on-background mb-4">Secondary School (SS1–SS3)</h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              Master the core disciplines with deep-dive modules and exam preparation tools.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-auto">
              {['Physics', 'Chemistry', 'Biology', 'Mathematics'].map((subject) => (
                <Link key={subject} href={`/course/${subject.toLowerCase()}`} className="bg-surface-container-low hover:bg-surface-container-high transition-colors text-sm font-bold text-on-surface p-4 rounded-2xl flex items-center gap-3">
                  <div className="p-2 bg-surface text-primary rounded-xl shrink-0 shadow-sm border border-outline-variant/10">
                    <span className="material-symbols-outlined text-[18px]">menu_book</span>
                  </div>
                  {subject}
                </Link>
              ))}
            </div>
          </div>
          
          {/* 2. University */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-8 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
            {/* Background design element */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary-container/20 to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-tertiary mb-4">
                <span className="material-symbols-outlined text-[18px]">account_balance</span>
                Higher Education
              </div>
              <h2 className="font-headline text-3xl font-extrabold text-on-background mb-4">University Courses</h2>
              <p className="text-on-surface-variant mb-8 leading-relaxed max-w-sm">
                Specialized professional paths curated by industry-leading researchers and professors.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-auto">
                {['Anatomy', 'Engineering', 'Microbiology', 'Biochemistry', 'Architecture'].map((course) => (
                  <Link key={course} href={`/course/${course.toLowerCase()}`} className="px-5 py-2.5 bg-secondary-container/50 hover:bg-secondary-container transition-colors text-on-secondary-container text-sm font-bold rounded-full shadow-sm">
                    {course}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Researchers */}
        <div className="bg-gradient-to-br from-surface-container-low to-surface-container-highest rounded-3xl p-8 md:p-12 shadow-inner flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden border border-outline-variant/20 hover:shadow-md transition-shadow mt-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/30 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="flex-1 relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-on-primary shadow-md shadow-primary/20 mb-6">
              <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              <span className="text-xs font-bold uppercase tracking-widest">Researchers AI Platform</span>
            </div>
            
            <p className="text-xl text-on-surface-variant mb-8 leading-relaxed">
              Our AI engine synthesizes curriculum from global research papers, specialized journals, and expert datasets instantly.
            </p>
            
            <div className="bg-surface-container-lowest p-2 rounded-full flex items-center shadow-lg shadow-surface-variant/50 border border-outline-variant/20 focus-within:ring-2 focus-within:ring-primary/30 transition-shadow">
              <input 
                type="text" 
                placeholder="What do you want to learn?" 
                className="flex-1 bg-transparent border-none px-6 py-3 text-on-surface outline-none placeholder:text-outline h-full"
              />
              <Link href="/course/custom" className="bg-primary hover:bg-primary-dim transition-colors text-on-primary text-sm font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-sm shrink-0">
                Generate Course
                <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
              </Link>
            </div>
            
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-bold text-outline-variant uppercase tracking-widest">
              <span>Recent:</span>
              <Link href="#" className="hover:text-primary transition-colors">Quantum Computing</Link>
              <span>•</span>
              <Link href="#" className="hover:text-primary transition-colors">Sustainable Urbanism</Link>
              <span>•</span>
              <Link href="#" className="hover:text-primary transition-colors">Ethical AI</Link>
            </div>
          </div>
          
          {/* Abstract Researcher Graphic */}
          <div className="hidden md:flex w-72 h-72 bg-surface-container-high rounded-3xl border border-surface-container-highest shadow-2xl rotate-3 relative p-4 shrink-0 overflow-hidden">
             <div className="w-full h-full bg-gradient-to-tr from-primary-container to-secondary-container rounded-2xl opacity-50 absolute top-0 left-0" />
             <div className="relative z-10 w-full h-full border border-white/20 rounded-2xl flex items-center justify-center p-6 text-center text-on-surface-variant backdrop-blur-sm">
               <span className="material-symbols-outlined text-6xl opacity-30">biotech</span>
             </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-surface-container-highest/50 py-12 mt-auto border-t border-surface-container-highest">
         <div className="max-w-7xl mx-auto px-6 text-center text-sm font-medium text-on-surface-variant flex justify-center items-center">
           <span>© 2026 StudySphere.</span>
         </div>
      </footer>
    </div>
  );
}
