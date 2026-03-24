import Link from 'next/link';

// Mock libraries data matching the requested structure
const libraries = [
  {
    id: 'anatomy-fundamentals',
    name: 'Anatomy Fundamentals',
    topics: [
      { id: 't1', title: 'Fundamental Principles', isLocked: false },
      { id: 't2', title: 'Core Mechanisms', isLocked: false },
      { id: 't3', title: 'Advanced Applications', isLocked: false },
      { id: 't4', title: 'Self-Assessment Quiz', isLocked: true },
    ]
  },
  {
    id: 'quantum-physics-prep',
    name: 'Quantum Physics Prep',
    topics: [
      { id: 't1', title: 'Wave-Particle Duality', isLocked: false },
      { id: 't2', title: 'Schrödinger Equation', isLocked: false },
      { id: 't3', title: 'Quantum Entanglement', isLocked: false },
    ]
  },
  {
    id: 'ai-ethics-research',
    name: 'Research Papers - AI Ethics',
    topics: [
      { id: 't1', title: 'Bias in Machine Learning', isLocked: false },
      { id: 't2', title: 'Data Privacy Regulations', isLocked: false },
      { id: 't3', title: 'Autonomous Weapons', isLocked: false },
    ]
  },
  {
    id: 'architectural-history',
    name: 'Architectural History',
    topics: [
      { id: 't1', title: 'Gothic Architecture', isLocked: false },
      { id: 't2', title: 'Renaissance Proportions', isLocked: false },
      { id: 't3', title: 'Modern Brutalism', isLocked: false },
    ]
  }
];

export default async function LibraryContentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const library = libraries.find(lib => lib.id === id);

  if (!library) {
    return (
      <div className="h-screen bg-surface flex flex-col items-center justify-center font-body gap-4">
        <span className="material-symbols-outlined text-[64px] text-outline">error</span>
        <h1 className="font-headline font-bold text-3xl text-on-surface">Library Not Found</h1>
        <p className="text-on-surface-variant max-w-sm text-center">The library you're looking for doesn't exist or has been removed.</p>
        <Link href="/libraries" className="mt-6 px-8 py-3 bg-primary text-on-primary font-bold rounded-full shadow-md hover:scale-105 transition-all">
          Back to Libraries
        </Link>
      </div>
    );
  }

  const activeTopic = library.topics[0] || { title: 'Topic Overview' };

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
            <Link href="/libraries" className="hover:text-primary">Libraries</Link>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-on-surface font-semibold capitalize">{library.name}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-full text-sm font-bold shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer">
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            Add Topic
          </button>
          <Link href="/profile" className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary-container text-on-secondary-container border border-primary/20 hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[20px]">person</span>
          </Link>
        </div>
      </header>

      {/* 3-Column Layout */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Sidebar: Library Content Outline */}
        <aside className="w-72 bg-surface-container-low border-r border-surface-container-highest hidden md:flex flex-col">
          <div className="p-6">
            <div className="flex items-center gap-2 font-bold text-sm text-primary mb-6">
              <span className="material-symbols-outlined text-[18px]">folder_special</span>
              Library Topics
            </div>
            
            <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/20 mb-6">
              <div className="text-xs font-bold text-outline-variant uppercase tracking-widest mb-3">Library Tools</div>
              <button className="text-sm font-semibold text-on-surface hover:text-primary transition-colors block mb-2 text-left w-full cursor-pointer">Reorder Topics</button>
              <button className="text-sm font-semibold text-on-surface hover:text-primary transition-colors block text-left w-full cursor-pointer">Export Library</button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto relative pb-24">
            <div className="px-6 space-y-2">
              {library.topics.map((topic, index) => {
                 const isActive = index === 0;
                 if (isActive) {
                   return (
                     <div key={topic.id} className="bg-secondary-container/20 text-on-surface rounded-xl overflow-hidden mb-2">
                       <div className="p-3 flex items-center gap-3 font-semibold text-sm cursor-pointer border-l-4 border-primary bg-secondary-container/50 text-primary-dim">
                         <span className="material-symbols-outlined text-[18px]">bookmark</span>
                         {index + 1}. {topic.title}
                       </div>
                     </div>
                   );
                 }
                 if (topic.isLocked) {
                   return (
                     <div key={topic.id} className="p-3 flex items-center gap-3 font-semibold text-sm text-outline-variant rounded-xl shadow-inner bg-surface-container-high/30 cursor-not-allowed">
                       <span className="material-symbols-outlined text-[18px]">lock</span>
                       {index + 1}. {topic.title}
                     </div>
                   );
                 }
                 return (
                     <div key={topic.id} className="p-3 flex items-center gap-3 font-semibold text-sm text-on-surface-variant hover:bg-surface-container-high rounded-xl cursor-pointer transition-colors">
                       <span className="material-symbols-outlined text-[18px]">bookmark_border</span>
                       {index + 1}. {topic.title}
                     </div>
                 );
              })}
            </div>
          </div>
        </aside>

        {/* Center Panel: Content */}
        <main className="flex-1 overflow-y-auto bg-surface relative">
          <div className="max-w-3xl mx-auto px-8 py-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-tertiary-container text-on-tertiary-container text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Library Element</span>
              <span className="text-sm text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">schedule</span> 10 min read
              </span>
            </div>
            
            <h1 className="font-headline text-4xl md:text-5xl font-black text-on-background mb-8 leading-tight">
              {activeTopic.title}
            </h1>
            
            <div className="flex items-center gap-3 mb-12">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary text-xs font-bold">
                Me
              </div>
              <span className="text-sm font-medium text-on-surface-variant italic">Saved to your personal collection in {library.name}</span>
            </div>
            
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 italic">
              These are your curated insights and saved materials. Use this space to review the foundational concepts before moving to more advanced topics within {library.name}.
            </p>
            
            <div className="w-full aspect-video bg-surface-container-low rounded-3xl border border-surface-container-highest mb-12 flex items-center justify-center shadow-inner overflow-hidden relative">
               <div className="w-64 h-64 relative bg-primary-container/20 rounded-full flex items-center justify-center blur-md"></div>
               <span className="material-symbols-outlined text-[100px] text-primary/40 absolute drop-shadow-lg z-10" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
            </div>
            
            <h2 className="text-2xl font-bold text-on-surface mb-6">Key Concepts</h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Based on the materials compiled from your research, understanding the basic interactions and laws within this domain is crucial for mastery. 
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                 <h3 className="flex items-center gap-2 font-bold text-primary mb-3 text-sm uppercase tracking-widest">
                   <span className="material-symbols-outlined text-[18px]">lightbulb</span> Concept Alpha
                 </h3>
                 <p className="text-sm text-on-surface-variant">The primary mechanism through which energy and information transfer occurs.</p>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                 <h3 className="flex items-center gap-2 font-bold text-primary mb-3 text-sm uppercase tracking-widest">
                   <span className="material-symbols-outlined text-[18px]">lightbulb</span> Concept Beta
                 </h3>
                 <p className="text-sm text-on-surface-variant">The secondary foundational rule setting limits on the system.</p>
              </div>
            </div>
            
            <div className="bg-tertiary-container/10 border border-tertiary-container/30 rounded-2xl p-6 shadow-sm ai-node-glow mb-12">
               <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-tertiary mb-3">
                 <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                 StudySphere AI Summary
               </div>
               <p className="text-on-surface font-semibold italic">
                 "I've synthesized these notes from your saved documents. Focus on how Concept Alpha interacts with Beta in practical scenarios."
               </p>
            </div>
            
            <div className="flex items-center justify-between border-t border-surface-container-highest pt-8">
              <button className="flex items-center gap-2 text-sm font-semibold text-outline-variant hover:text-primary transition-colors cursor-not-allowed">
                <span className="material-symbols-outlined text-[18px]">arrow_back</span> Previous Topic
              </button>
              <button className="flex items-center gap-2 bg-secondary-container text-on-secondary-container px-6 py-3 rounded-full text-sm font-bold hover:bg-secondary-dim hover:text-on-primary transition-colors shadow-sm cursor-pointer">
                Next Topic <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
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
                <div className="font-bold text-sm text-on-surface">Library Architect AI</div>
                <div className="text-xs text-secondary font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-sm"></span> Your Study Partner
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
              <p>Welcome to your <span className="font-semibold text-primary">{library.name}</span> library! I'm ready to help you analyze these topics in <span className="font-semibold text-primary">{activeTopic.title}</span>. Should we start by exploring the connections between the key concepts you just saved?</p>
            </div>
            
            {/* User Message */}
            <div className="bg-primary text-on-primary rounded-2xl p-4 text-sm leading-relaxed rounded-tr-none shadow-md shadow-primary/20 ml-auto max-w-[85%] font-medium">
              Yes, how does Concept Alpha apply to real-world scenarios?
            </div>
            
            {/* AI Assistant Response */}
            <div className="bg-surface-container-low border border-surface-container-highest rounded-2xl p-4 text-sm text-on-surface-variant leading-relaxed rounded-tl-none shadow-sm shadow-surface-variant/10 relative mt-8">
              <div className="absolute -left-3 -top-3 w-6 h-6 rounded-full bg-surface-container-lowest border border-outline-variant/30 flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-primary text-[14px]">auto_awesome</span>
              </div>
              Concept Alpha is frequently seen in communication networks. For instance, when data packets are routed efficiently through servers, they rely on this same underlying mechanism to minimize resistance and loss.
              
              <div className="mt-4 pt-4 border-t border-surface-container-highest flex flex-wrap gap-2">
                <button className="text-xs font-bold px-3 py-1.5 border border-primary/20 bg-primary-container/30 text-primary-dim rounded-full hover:bg-primary-container/50 transition-colors cursor-pointer shadow-sm">Explain using an analogy</button>
                <button className="text-xs font-bold px-3 py-1.5 border border-primary/20 bg-primary-container/30 text-primary-dim rounded-full hover:bg-primary-container/50 transition-colors cursor-pointer shadow-sm">Test me on this</button>
              </div>
            </div>
            
          </div>
          
          <div className="p-6 bg-surface-container-lowest border-t border-surface-container-highest pointer-events-auto">
            <div className="relative flex items-center group">
              <input 
                type="text" 
                placeholder="Ask Architect AI a question..." 
                className="w-full bg-surface-container-high border-none rounded-2xl pl-5 pr-14 py-4 text-sm text-on-surface outline-none focus:ring-2 focus:ring-primary/40 transition-shadow shadow-inner group-hover:bg-surface-variant/50"
              />
              <button className="absolute right-2 w-10 h-10 flex items-center justify-center bg-primary text-on-primary rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer">
                <span className="material-symbols-outlined text-[18px] ml-1">send</span>
              </button>
            </div>
            <div className="text-center text-[10px] text-outline mt-3 font-bold tracking-widest uppercase">
              AI analyzes your custom library content automatically.
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
