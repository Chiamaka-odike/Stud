import Link from 'next/link';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-surface-container-lowest font-body flex flex-col">
      {/* Top Navbar Header */}
      <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-surface-container-highest px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/dashboard" className="font-headline font-black text-2xl text-primary tracking-tighter">
            StudySphere
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-semibold text-on-surface-variant">
            <Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
            <Link href="/libraries" className="hover:text-primary transition-colors">Libraries</Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="relative hidden md:block">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
            <input type="text" placeholder="Search resources..." className="pl-12 pr-4 py-2.5 bg-surface-container-high border-none rounded-full text-sm text-on-surface focus:ring-2 focus:ring-primary/30 outline-none w-64" />
          </div>
          <Link href="/profile" className="w-10 h-10 rounded-full border-2 border-primary text-primary overflow-hidden flex items-center justify-center bg-secondary-container hover:scale-105 transition-transform">
            <span className="material-symbols-outlined">person</span>
          </Link>
        </div>
      </header>

      <div className="bg-surface-container-low border-b border-surface-container-highest py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-primary font-bold">
           <span className="material-symbols-outlined text-[18px]">arrow_back</span>
           <Link href="/dashboard" className="hover:underline">Back to Dashboard</Link>
        </div>
      </div>

      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-12 flex flex-col lg:flex-row gap-10">
        
        {/* Left Sidebar Profile */}
        <div className="w-full lg:w-80 space-y-8 flex-shrink-0">
          
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-6 shadow-sm relative text-center">
            <button className="absolute top-4 right-4 flex items-center gap-1 text-xs font-bold text-outline-variant hover:text-on-surface transition-colors uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">logout</span> Sign Out
            </button>

            <div className="relative inline-block mt-6 mb-4">
               <div className="w-28 h-28 rounded-full border border-surface-container-highest bg-[#f2cca7]/40 flex items-center justify-center text-on-surface overflow-hidden shadow-inner mx-auto">
                 {/* Placeholder for avatar silhouette */}
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-[#e0a87f] translate-y-2">
                   <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                 </svg>
               </div>
               <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md hover:scale-105 transition-transform border-2 border-surface-container-lowest">
                 <span className="material-symbols-outlined text-[16px]">edit</span>
               </button>
            </div>

            <h2 className="font-headline text-2xl font-black text-on-background mb-1">Elena Rodriguez</h2>
            <p className="text-sm text-on-surface-variant font-medium mb-6">elena.rod@academicsphere.edu</p>

            <div className="bg-surface-container-high rounded-xl p-4">
              <div className="text-xs font-bold uppercase tracking-widest text-outline-variant mb-1">User Category</div>
              <div className="text-primary font-bold">Senior Research</div>
            </div>
          </div>

          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-6 shadow-sm">
            <h3 className="flex items-center gap-2 font-bold text-on-surface mb-6">
              <span className="material-symbols-outlined text-primary text-[20px]">psychology</span>
              Learning Preferences
            </h3>

            <div className="mb-6">
               <div className="flex items-center justify-between mb-2">
                 <div className="font-bold text-sm text-on-surface">AI Explanation Depth</div>
                 <div className="bg-secondary-container text-on-secondary-container text-xs font-bold px-3 py-1 rounded-full">Advanced</div>
               </div>
               <p className="text-xs text-on-surface-variant">Tailor AI response complexity</p>
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 rounded-xl bg-surface-container border border-outline-variant/20 cursor-pointer">
                 <input type="radio" name="depth" defaultChecked className="w-4 h-4 text-primary bg-surface-container border-outline-variant focus:ring-primary" />
                 <span className="text-sm font-semibold text-on-surface">Research Professional</span>
              </label>
              <label className="flex items-center gap-3 p-3 rounded-xl border border-transparent hover:bg-surface-container-lowest cursor-pointer transition-colors">
                 <input type="radio" name="depth" className="w-4 h-4 text-primary bg-surface-container border-outline-variant focus:ring-primary" />
                 <span className="text-sm font-semibold text-on-surface-variant">Standard Academic</span>
              </label>
              <label className="flex items-center gap-3 p-3 rounded-xl border border-transparent hover:bg-surface-container-lowest cursor-pointer transition-colors">
                 <input type="radio" name="depth" className="w-4 h-4 text-primary bg-surface-container border-outline-variant focus:ring-primary" />
                 <span className="text-sm font-semibold text-on-surface-variant">Simplified Concepts</span>
              </label>
            </div>
          </div>

        </div>

        {/* Right Content Area */}
        <div className="flex-1 space-y-8">
           
           <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-2">
              <div>
                <h1 className="font-headline text-4xl font-extrabold text-on-background mb-2">Intellectual Growth</h1>
                <p className="text-on-surface-variant text-lg">Your academic trajectory for the past 30 days.</p>
              </div>
               <div className="flex self-start sm:self-auto min-h-[40px]">
                 {/* Monthly/Weekly toggle removed */}
               </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Bar Chart Block */}
              <div className="md:col-span-2 bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-8 shadow-sm flex flex-col relative h-[300px]">
                 <div className="flex justify-between items-start mb-8">
                   <div>
                     <div className="text-xs font-bold uppercase tracking-widest text-outline-variant mb-1">Weekly Learning Progress</div>
                     <div className="flex items-baseline gap-2">
                       <span className="font-headline text-5xl font-black text-on-background">24.5</span>
                       <span className="text-on-surface-variant font-medium">Hours</span>
                     </div>
                   </div>
                   <div className="bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                     <span className="material-symbols-outlined text-[14px]">trending_up</span> 12%
                   </div>
                 </div>

                 <div className="flex-1 flex items-end justify-between gap-2 md:gap-4 mt-auto">
                    {[
                      { day: 'MON', height: '30%', active: false },
                      { day: 'TUE', height: '50%', active: false },
                      { day: 'WED', height: '40%', active: false },
                      { day: 'THU', height: '80%', active: true },
                      { day: 'FRI', height: '35%', active: false },
                      { day: 'SAT', height: '60%', active: false },
                      { day: 'SUN', height: '45%', active: false },
                    ].map((item) => (
                      <div key={item.day} className="flex flex-col items-center flex-1 gap-3">
                         <div className={`w-full rounded-t-lg transition-all ${item.active ? 'bg-primary shadow-sm' : 'bg-surface-container-high hover:bg-surface-container-highest cursor-pointer'}`} style={{ height: item.height }}></div>
                         <span className="text-[10px] font-bold text-outline-variant">{item.day}</span>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Stat Block */}
              <div className="md:col-span-1 bg-primary text-on-primary rounded-3xl p-8 shadow-sm flex flex-col justify-between h-[300px]">
                 <div className="w-12 h-12 rounded-full bg-on-primary/20 flex items-center justify-center backdrop-blur-sm">
                   <span className="material-symbols-outlined">verified</span>
                 </div>
                 <div>
                   <div className="font-headline text-7xl font-black mb-2 tracking-tighter">42</div>
                   <p className="text-sm font-medium opacity-90 leading-relaxed">Topics Mastered this semester</p>
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Current Courses */}
              <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-8 shadow-sm">
                 <div className="text-xs font-bold uppercase tracking-widest text-outline-variant mb-6">Current Courses</div>
                 <ul className="space-y-5">
                   {['Quantum Mechanics', 'Neurobiology II', 'Advanced Ethics'].map((course) => (
                     <li key={course} className="flex items-center gap-4 text-sm font-bold text-on-surface">
                       <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                       {course}
                     </li>
                   ))}
                 </ul>
              </div>

              {/* Deep Work Consistency */}
              <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-8 shadow-sm flex items-center gap-8">
                 <div className="relative shrink-0 w-28 h-28 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" className="text-surface-container-highest" />
                      <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" className="text-primary" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - 0.75)} strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-black text-on-surface leading-none">75%</span>
                      <span className="text-[10px] font-bold text-outline-variant uppercase">Focus</span>
                    </div>
                 </div>
                 <div>
                   <h3 className="font-bold text-on-surface text-lg mb-2">Deep Work Consistency</h3>
                   <p className="text-xs text-on-surface-variant leading-relaxed mb-4">Your focus sessions are 15% more consistent than last week. Morning study blocks yield the highest retention rates for your profile.</p>
                   <Link href="#" className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
                     View detailed analysis <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                   </Link>
                 </div>
              </div>

           </div>

           {/* Account Configuration */}
           <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-8 shadow-sm">
              <h3 className="font-headline text-xl font-bold text-on-surface mb-6">Account Configuration</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                 <div>
                   <label className="text-xs font-bold uppercase tracking-widest text-outline-variant block mb-2 ml-1">Display Name</label>
                   <input type="text" defaultValue="Elena Rodriguez" className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 text-sm font-medium text-on-surface outline-none" />
                 </div>
                 <div>
                   <label className="text-xs font-bold uppercase tracking-widest text-outline-variant block mb-2 ml-1">Email Address</label>
                   <input type="email" defaultValue="elena.rod@academicsphere.edu" className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-primary/20 text-sm font-medium text-on-surface outline-none" />
                 </div>
              </div>
              
              <div className="border-t border-surface-container-highest pt-8 flex items-center justify-between">
                 <div>
                   <div className="font-bold text-on-surface mb-1">Data Synchronization</div>
                   <div className="text-sm text-on-surface-variant">Sync your learning data across all research devices.</div>
                 </div>
                 {/* Toggle Switch */}
                 <div className="w-12 h-6 rounded-full bg-primary flex items-center p-1 cursor-pointer justify-end shadow-inner">
                   <div className="w-5 h-5 rounded-full bg-surface-container-lowest shadow-sm"></div>
                 </div>
              </div>
           </div>

        </div>

      </main>

      <footer className="bg-surface-container-highest/50 py-12 mt-auto border-t border-surface-container-highest">
         <div className="max-w-7xl mx-auto px-6 text-center text-sm font-medium text-on-surface-variant flex justify-center items-center">
           <span>© 2026 StudySphere.</span>
         </div>
      </footer>
    </div>
  );
}
