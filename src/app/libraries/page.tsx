import Link from 'next/link';

export default function LibrariesPage() {
  return (
    <div className="min-h-screen bg-surface-container-lowest font-body flex">
      
      {/* Left Sidebar Layout */}
      <aside className="w-72 bg-surface-container-lowest border-r border-surface-container-highest hidden md:flex flex-col flex-shrink-0">
         <div className="p-8">
            <Link href="/" className="flex items-start gap-3">
               <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-sm">
                 <span className="material-symbols-outlined">menu_book</span>
               </div>
               <div>
                 <div className="font-headline font-bold text-on-background leading-tight">The Academic<br/>Platform</div>
                 <div className="text-[9px] font-bold text-outline-variant uppercase tracking-widest mt-1">AI-Powered Research</div>
               </div>
            </Link>
         </div>

         <nav className="flex-1 px-4 space-y-2 mt-4">
            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-on-surface-variant hover:bg-surface-container-lowest hover:text-on-surface transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">dashboard</span>
              Dashboard
            </Link>
            <Link href="/libraries" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-primary bg-primary/5 shadow-sm border border-primary/10">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_library</span>
              My Library
            </Link>
            <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-on-surface-variant hover:bg-surface-container-lowest hover:text-on-surface transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-[20px]">style</span>
              Flashcards
            </Link>
         </nav>
         
         <div className="p-6 border-t border-surface-container-highest">
            <button className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary text-sm font-bold px-6 py-4 rounded-full shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
              <span className="material-symbols-outlined text-[18px]">add</span>
              Create New Library
            </button>
         </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-surface relative flex flex-col">
        <div className="max-w-6xl mx-auto w-full px-8 py-12 flex-1">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Collections</div>
              <h1 className="font-headline text-4xl md:text-5xl font-black text-on-background mb-4">My Study Libraries</h1>
              <p className="text-on-surface-variant max-w-xl leading-relaxed">
                Manage your curated research modules and AI-generated study paths. Each library acts as a container for your deep-work sessions.
              </p>
            </div>
            
            <div className="flex items-center gap-3 self-start lg:self-auto w-full lg:w-auto">
              <div className="relative flex-1 lg:w-72">
                 <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
                 <input 
                   type="text" 
                   placeholder="Search libraries..." 
                   className="w-full pl-12 pr-4 py-3 bg-surface-container-high border-none rounded-full text-sm text-on-surface focus:ring-2 focus:ring-primary/20 outline-none transition-shadow" 
                 />
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-secondary-container/50 text-on-secondary-container hover:bg-secondary-container transition-colors rounded-full text-sm font-bold shrink-0 cursor-pointer">
                 <span className="material-symbols-outlined text-[18px]">filter_list</span>
                 Filter
              </button>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-32">
             
             {/* Card 1 */}
             <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-6 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
                {/* Abstract shape */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/30 rounded-bl-full pointer-events-none" />
                
                <div className="flex items-start justify-between mb-6 relative z-10">
                   <div className="w-12 h-12 rounded-2xl bg-secondary-container text-on-secondary-container flex items-center justify-center">
                     <span className="material-symbols-outlined">science</span>
                   </div>
                   <div className="flex items-center gap-1 text-outline hover:text-on-surface transition-colors cursor-pointer">
                     <span className="material-symbols-outlined text-[18px] p-1 rounded-full hover:bg-surface-container-high">edit</span>
                     <span className="material-symbols-outlined text-[18px] p-1 rounded-full hover:bg-surface-container-high">share</span>
                     <span className="material-symbols-outlined text-[18px] p-1 rounded-full hover:bg-surface-container-high">delete</span>
                   </div>
                </div>
                
                <h3 className="font-headline text-xl font-bold text-on-surface mb-6 relative z-10">Anatomy Fundamentals</h3>
                
                <div className="flex items-center gap-3 mt-auto relative z-10">
                   <div className="bg-surface-container-high text-on-surface text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                     <span className="material-symbols-outlined text-[14px]">layers</span> 24 Topics
                   </div>
                   <div className="text-xs text-on-surface-variant font-medium">Updated 2 days ago</div>
                </div>
                
                {/* User avatars mock */}
                <div className="flex -space-x-2 mt-6 relative z-10">
                   <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-surface-container-lowest"></div>
                   <div className="w-8 h-8 rounded-full bg-tertiary-container border-2 border-surface-container-lowest"></div>
                   <div className="w-8 h-8 rounded-full bg-surface-container-high text-xs flex items-center justify-center font-bold text-on-surface border-2 border-surface-container-lowest">+2</div>
                </div>
             </div>

             {/* Card 2 */}
             <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-6 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/20 rounded-bl-full pointer-events-none" />
                
                <div className="flex items-start justify-between mb-6 relative z-10">
                   <div className="w-12 h-12 rounded-2xl bg-secondary-container/50 text-on-secondary flex items-center justify-center text-primary-dim">
                     <span className="material-symbols-outlined">biotech</span>
                   </div>
                   <div className="flex items-center gap-1 text-outline hover:text-on-surface transition-colors cursor-pointer">
                     <span className="material-symbols-outlined text-[18px] p-1 rounded-full hover:bg-surface-container-high">edit</span>
                     <span className="material-symbols-outlined text-[18px] p-1 rounded-full hover:bg-surface-container-high">share</span>
                     <span className="material-symbols-outlined text-[18px] p-1 rounded-full hover:bg-surface-container-high">delete</span>
                   </div>
                </div>
                
                <h3 className="font-headline text-xl font-bold text-on-surface mb-6 relative z-10">Quantum Physics Prep</h3>
                
                <div className="flex items-center gap-3 mt-auto relative z-10">
                   <div className="bg-surface-container-high text-on-surface text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                     <span className="material-symbols-outlined text-[14px]">layers</span> 12 Topics
                   </div>
                   <div className="text-xs text-on-surface-variant font-medium">Updated 5 hours ago</div>
                </div>
                
                {/* Progress bar mock */}
                <div className="w-full bg-surface-container-high h-1.5 rounded-full mt-6 overflow-hidden relative z-10">
                  <div className="bg-primary h-full rounded-full" style={{ width: '65%' }}></div>
                </div>
             </div>

             {/* Card 3 */}
             <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-6 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-container/30 rounded-bl-full pointer-events-none" />
                
                <div className="flex items-start justify-between mb-6 relative z-10">
                   <div className="w-12 h-12 rounded-2xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center">
                     <span className="material-symbols-outlined">psychology</span>
                   </div>
                   <div className="flex items-center gap-1 text-outline hover:text-on-surface transition-colors cursor-pointer">
                     <span className="material-symbols-outlined text-[18px] p-1 rounded-full hover:bg-surface-container-high">edit</span>
                     <span className="material-symbols-outlined text-[18px] p-1 rounded-full hover:bg-surface-container-high">share</span>
                     <span className="material-symbols-outlined text-[18px] p-1 rounded-full hover:bg-surface-container-high">delete</span>
                   </div>
                </div>
                
                <h3 className="font-headline text-xl font-bold text-on-surface mb-6 relative z-10 line-clamp-2">Research Papers - AI Ethics</h3>
                
                <div className="flex items-center gap-3 mt-auto relative z-10 mb-4">
                   <div className="bg-surface-container-high text-on-surface text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                     <span className="material-symbols-outlined text-[14px]">article</span> 42 Papers
                   </div>
                   <div className="text-xs text-on-surface-variant font-medium">Updated Yesterday</div>
                </div>
                
                <div className="flex gap-2 relative z-10 mt-auto">
                   <span className="text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary px-2 py-1 rounded-md">AI Summary Active</span>
                   <span className="text-[10px] font-bold uppercase tracking-widest bg-secondary-container text-on-secondary-container px-2 py-1 rounded-md">Shared</span>
                </div>
             </div>

             {/* Create New Card */}
             <button className="bg-surface border-2 border-dashed border-outline-variant/50 rounded-3xl p-6 flex flex-col items-center justify-center min-h-[250px] group hover:border-primary/50 hover:bg-surface-container-lowest transition-all cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-on-primary transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">add</span>
                </div>
                <h3 className="font-headline text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">Create New Library</h3>
                <p className="text-sm text-on-surface-variant text-center max-w-xs">Start a new research project or study module.</p>
             </button>

             {/* Card 4 */}
             <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-6 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-surface-container-highest/30 rounded-bl-full pointer-events-none" />
                
                <div className="flex items-start justify-between mb-6 relative z-10">
                   <div className="w-12 h-12 rounded-2xl bg-primary-dim text-on-primary flex items-center justify-center">
                     <span className="material-symbols-outlined">architecture</span>
                   </div>
                   <div className="flex items-center gap-1 text-outline hover:text-on-surface transition-colors cursor-pointer">
                     <span className="material-symbols-outlined text-[18px] p-1 rounded-full hover:bg-surface-container-high">edit</span>
                     <span className="material-symbols-outlined text-[18px] p-1 rounded-full hover:bg-surface-container-high">share</span>
                     <span className="material-symbols-outlined text-[18px] p-1 rounded-full hover:bg-surface-container-high">delete</span>
                   </div>
                </div>
                
                <h3 className="font-headline text-xl font-bold text-on-surface mb-6 relative z-10">Architectural History</h3>
                
                <div className="flex items-center gap-3 mt-auto relative z-10 mb-4">
                   <div className="bg-surface-container-high text-on-surface text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                     <span className="material-symbols-outlined text-[14px]">layers</span> 18 Topics
                   </div>
                   <div className="text-xs text-on-surface-variant font-medium">Updated 1 week ago</div>
                </div>
                
                <p className="text-xs text-on-surface-variant italic relative z-10 mt-auto line-clamp-1">"A deep dive into Gothic and..."</p>
             </div>

          </div>

        </div>

        {/* Floating Architect CTA Banner */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[calc(100%-4rem)] max-w-4xl z-30">
           <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-3xl p-6 px-8 shadow-2xl flex items-center justify-between gap-6 ai-node-glow">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-1">Try AI Collection Architect</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed max-w-lg">
                    Upload a syllabus or a list of topics, and StudySphere will automatically structure a new library with suggested resources and flashcards.
                  </p>
                </div>
              </div>
              
              <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold shadow-md hover:scale-105 active:scale-95 transition-all whitespace-nowrap shrink-0 cursor-pointer">
                Launch Architect
              </button>
           </div>
        </div>

      </main>

    </div>
  );
}
