import Link from 'next/link';

export default function CoursePage({ params }: { params: { id: string } }) {
  // Mock course data based on anatomy
  return (
    <div className="h-screen bg-surface flex flex-col font-body overflow-hidden">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-surface-container-highest h-16 px-6 flex items-center justify-between">
        <div className="flex items-center gap-8 text-sm">
          <Link href="/dashboard" className="font-headline font-black text-xl text-primary tracking-tighter">
            StudySphere
          </Link>
          <div className="hidden md:flex items-center gap-2 text-on-surface-variant">
            <Link href="/dashboard" className="hover:text-primary">Home</Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <Link href="#" className="hover:text-primary">University</Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-on-surface font-semibold capitalize">{params.id}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Link href="/libraries" className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-full text-sm font-bold shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">library_add</span>
            Create Library
          </Link>
          <Link href="/profile" className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary-container text-on-secondary-container border border-primary/20 hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[20px]">person</span>
          </Link>
        </div>
      </header>

      {/* 3-Column Layout */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Sidebar: Course Outline */}
        <aside className="w-72 bg-surface-container-low border-r border-surface-container-highest hidden md:flex flex-col">
          <div className="p-6">
            <div className="flex items-center gap-2 font-bold text-sm text-primary mb-6">
              <span className="material-symbols-outlined text-[18px]">menu_book</span>
              Course Outline
            </div>
            
            <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/20 mb-6">
              <div className="text-xs font-bold text-outline-variant uppercase tracking-widest mb-3">Quick Actions</div>
              <button className="text-sm font-semibold text-on-surface hover:text-primary transition-colors block mb-2 text-left w-full cursor-pointer">New Playlist</button>
              <button className="text-sm font-semibold text-on-surface hover:text-primary transition-colors block text-left w-full cursor-pointer">Export Notes</button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto relative pb-24">
            <div className="px-6 space-y-2">
              {/* Active Topic */}
              <div className="bg-secondary-container/20 text-on-surface rounded-xl overflow-hidden mb-2">
                <div className="p-3 flex items-center gap-3 font-semibold text-sm cursor-pointer border-l-4 border-primary bg-secondary-container/50 text-primary-dim">
                  <span className="material-symbols-outlined text-[18px]">adjust</span>
                  1. Cardiovascular System
                </div>
                <div className="pl-12 pr-4 py-3 border-l-2 border-primary ml-[22px] space-y-4">
                  <div className="text-sm font-bold text-primary relative">
                    <span className="absolute -left-[14px] top-1/2 -translate-y-1/2 w-0.5 h-6 bg-primary" />
                    Heart Structure
                  </div>
                  <div className="text-sm text-on-surface-variant hover:text-primary cursor-pointer transition-colors">Blood Vessels</div>
                  <div className="text-sm text-on-surface-variant hover:text-primary cursor-pointer transition-colors">Cardiac Cycle</div>
                </div>
              </div>
              
              {/* Inactive Topics */}
              <div className="p-3 flex items-center gap-3 font-semibold text-sm text-on-surface-variant hover:bg-surface-container-high rounded-xl cursor-pointer transition-colors">
                <span className="material-symbols-outlined text-[18px]">radio_button_unchecked</span>
                2. Respiratory Mechanics
              </div>
              <div className="p-3 flex items-center gap-3 font-semibold text-sm text-on-surface-variant hover:bg-surface-container-high rounded-xl cursor-pointer transition-colors">
                <span className="material-symbols-outlined text-[18px]">radio_button_unchecked</span>
                3. Neural Pathways
              </div>
              <div className="p-3 flex items-center gap-3 font-semibold text-sm text-outline-variant rounded-xl shadow-inner bg-surface-container-high/30 cursor-not-allowed">
                <span className="material-symbols-outlined text-[18px]">lock</span>
                4. Advanced Endocrine
              </div>
            </div>

            {/* Floating Error Badge */}
            <div className="fixed bottom-8 left-8 flex items-center gap-2 bg-[#d73a49] text-white rounded-full px-3 py-1.5 shadow-lg cursor-pointer hover:bg-red-700 transition-colors z-50">
               <div className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center text-[10px] font-bold">N</div>
               <span className="text-xs font-bold">1 Issue</span>
               <span className="material-symbols-outlined text-[14px]">close</span>
            </div>
          </div>
        </aside>

        {/* Center Panel: Content */}
        <main className="flex-1 overflow-y-auto bg-surface relative">
          <div className="max-w-3xl mx-auto px-8 py-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-tertiary-container text-on-tertiary-container text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Section 1.1</span>
              <span className="text-sm text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">schedule</span> 15 min read
              </span>
            </div>
            
            <h1 className="font-headline text-4xl md:text-5xl font-black text-on-background mb-8 leading-tight">
              Anatomical Structure of the Human Heart
            </h1>
            
            <div className="flex items-center gap-3 mb-12">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary text-xs font-bold">
                SS
              </div>
              <span className="text-sm font-medium text-on-surface-variant italic">Curated by StudySphere</span>
            </div>
            
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 italic">
              The heart is a complex muscular organ that serves as the engine of the circulatory system. Understanding its architecture is fundamental to mastering human physiology.
            </p>
            
            <div className="w-full aspect-video bg-surface-container-low rounded-3xl border border-surface-container-highest mb-12 flex items-center justify-center shadow-inner overflow-hidden relative">
               {/* Heart illustration placeholder */}
               <div className="w-64 h-64 relative bg-primary-container/20 rounded-full flex items-center justify-center blur-md"></div>
               <span className="material-symbols-outlined text-[100px] text-primary/40 absolute drop-shadow-lg z-10" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </div>
            
            <h2 className="text-2xl font-bold text-on-surface mb-6">The Chambers and Flow</h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              The human heart is divided into four distinct chambers: two superior atria and two inferior ventricles. The right side of the heart is responsible for pulmonary circulation—collecting deoxygenated blood and pumping it toward the lungs. Conversely, the left side facilitates systemic circulation, delivering oxygen-rich blood to the entire body.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                 <h3 className="flex items-center gap-2 font-bold text-primary mb-3 text-sm uppercase tracking-widest">
                   <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span> Right Atrium
                 </h3>
                 <p className="text-sm text-on-surface-variant">Receives deoxygenated blood from the superior and inferior vena cava.</p>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                 <h3 className="flex items-center gap-2 font-bold text-primary mb-3 text-sm uppercase tracking-widest">
                   <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span> Left Ventricle
                 </h3>
                 <p className="text-sm text-on-surface-variant">The thickest chamber, responsible for pumping blood into the aorta.</p>
              </div>
            </div>
            
            <p className="text-on-surface-variant leading-relaxed mb-10">
              The valves within the heart—the tricuspid, pulmonary, mitral, and aortic—ensure that blood flows in a unidirectional manner, preventing backflow and maintaining efficient pressure gradients.
            </p>
            
            <div className="bg-tertiary-container/10 border border-tertiary-container/30 rounded-2xl p-6 shadow-sm ai-node-glow mb-12">
               <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-tertiary mb-3">
                 <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                 Guide's Insight
               </div>
               <p className="text-on-surface font-semibold italic">
                 "Think of the heart not just as a pump, but as a dual-circuit relay system. The efficiency of the left ventricle's muscular wall is what allows blood to reach your furthest extremities."
               </p>
            </div>
            
            <div className="flex items-center justify-between border-t border-surface-container-highest pt-8">
              <button className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-[18px]">arrow_back</span> Previous Topic
              </button>
              <button className="flex items-center gap-2 bg-secondary-container text-on-secondary-container px-6 py-3 rounded-full text-sm font-bold hover:bg-secondary-dim hover:text-on-primary transition-colors shadow-sm cursor-pointer">
                Next: Blood Vessels <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
            
            <div className="h-32"></div> {/* Bottom padding */}
          </div>
        </main>

        {/* Right Sidebar: AI Assistant */}
        <aside className="w-80 bg-surface-container-lowest border-l border-surface-container-highest hidden lg:flex flex-col rounded-tl-3xl shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.05)] relative z-10 w-full lg:w-96 right-0">
          <div className="p-6 border-b border-surface-container-highest flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-md">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
              </div>
              <div>
                <div className="font-bold text-sm text-on-surface">StudySphere AI Guide</div>
                <div className="text-xs text-secondary font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-sm"></span> Your Learning Guide
                </div>
              </div>
            </div>
            <button className="text-outline hover:text-on-surface transition-colors cursor-pointer">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* AI Assistant Greeting */}
            <div className="bg-surface-container-low border border-surface-container-highest rounded-2xl p-4 text-sm text-on-surface-variant leading-relaxed rounded-tl-none shadow-sm shadow-surface-variant/10">
              <p>Hello! I'm your guide for today. I've been following your progress on <span className="font-semibold">Heart Structures</span>. Would you like a simplified breakdown of the <span className="font-semibold text-primary">Mitral Valve's</span> function?</p>
            </div>
            
            {/* User Message */}
            <div className="bg-primary text-on-primary rounded-2xl p-4 text-sm leading-relaxed rounded-tr-none shadow-md shadow-primary/20 ml-auto max-w-[85%] font-medium">
              Yes, please explain it like a simple mechanical door.
            </div>
            
            {/* AI Assistant Response */}
            <div className="bg-surface-container-low border border-surface-container-highest rounded-2xl p-4 text-sm text-on-surface-variant leading-relaxed rounded-tl-none shadow-sm shadow-surface-variant/10 relative mt-8">
              <div className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-surface-container-lowest border border-outline-variant/30 flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-primary text-[14px]">auto_awesome</span>
              </div>
              Think of the Mitral Valve as a one-way security gate between the left atrium and the left ventricle. It opens to let the 'passengers' (blood) in, but snaps shut the moment the ventricle squeezes, ensuring nobody goes back the way they came.
              
              <div className="mt-4 pt-4 border-t border-surface-container-highest flex flex-wrap gap-2">
                <button className="text-xs font-bold px-3 py-1.5 border border-primary/20 bg-primary-container/30 text-primary-dim rounded-full hover:bg-primary-container/50 transition-colors cursor-pointer shadow-sm">Compare to Aortic Valve</button>
                <button className="text-xs font-bold px-3 py-1.5 border border-primary/20 bg-primary-container/30 text-primary-dim rounded-full hover:bg-primary-container/50 transition-colors cursor-pointer shadow-sm">Show Diagram</button>
              </div>
            </div>
            
          </div>
          
          <div className="p-6 bg-surface-container-lowest border-t border-surface-container-highest pointer-events-auto">
            <div className="relative flex items-center group">
              <input 
                type="text" 
                placeholder="Ask your guide a follow-up..." 
                className="w-full bg-surface-container-high border-none rounded-2xl pl-5 pr-14 py-4 text-sm text-on-surface outline-none focus:ring-2 focus:ring-primary/40 transition-shadow shadow-inner group-hover:bg-surface-variant/50"
              />
              <button className="absolute right-2 w-10 h-10 flex items-center justify-center bg-primary text-on-primary rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer">
                <span className="material-symbols-outlined text-[18px] ml-1">send</span>
              </button>
            </div>
            <div className="text-center text-[10px] text-outline mt-3 font-bold tracking-widest uppercase">
              Guidance is tailored to your current study level.
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
