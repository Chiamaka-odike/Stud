"use client";

import Link from 'next/link';
import { useState } from 'react';

const initialLibraries = [
  {
    id: "anatomy-fundamentals",
    name: "Anatomy Fundamentals",
    topicsCount: "24 Topics",
    icon: "science",
    updatedAt: "Updated 2 days ago",
    iconStyle: "bg-secondary-container text-on-secondary-container",
    hasAvatars: true,
    shapeStyle: "bg-secondary-container/30",
    isPaper: false
  },
  {
    id: "quantum-physics-prep",
    name: "Quantum Physics Prep",
    topicsCount: "12 Topics",
    icon: "biotech",
    updatedAt: "Updated 5 hours ago",
    iconStyle: "bg-secondary-container/50 text-on-secondary text-primary-dim",
    progress: 65,
    shapeStyle: "bg-primary-container/20",
    isPaper: false
  },
  {
    id: "ai-ethics-research",
    name: "Research Papers - AI Ethics",
    topicsCount: "42 Papers",
    icon: "psychology",
    updatedAt: "Updated Yesterday",
    iconStyle: "bg-tertiary-container text-on-tertiary-container",
    tags: ["AI Summary Active", "Shared"],
    shapeStyle: "bg-tertiary-container/30",
    isPaper: true
  },
  {
    id: "architectural-history",
    name: "Architectural History",
    topicsCount: "18 Topics",
    icon: "architecture",
    updatedAt: "Updated 1 week ago",
    iconStyle: "bg-primary-dim text-on-primary",
    quote: '"A deep dive into Gothic and..."',
    shapeStyle: "bg-surface-container-highest/30",
    isPaper: false
  }
];

export default function LibrariesPage() {
  const [libraries, setLibraries] = useState(initialLibraries);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newLibraryName, setNewLibraryName] = useState("");
  const [error, setError] = useState("");

  const handleCreateLibrary = () => {
    if (!newLibraryName.trim()) {
      setError("Library name cannot be empty");
      return;
    }
    if (libraries.some(lib => lib.name.toLowerCase() === newLibraryName.trim().toLowerCase())) {
      setError("A library with this name already exists");
      return;
    }

    const newLibrary = {
      id: newLibraryName.trim().toLowerCase().replace(/\s+/g, '-'),
      name: newLibraryName.trim(),
      topicsCount: "0 Topics",
      updatedAt: "Updated Just now",
      icon: "menu_book",
      iconStyle: "bg-primary text-on-primary",
      shapeStyle: "bg-primary/5",
      isPaper: false
    };

    setLibraries([newLibrary, ...libraries]);
    setIsModalOpen(false);
    setNewLibraryName("");
    setError("");
  };

  const cancelCreate = () => {
    setIsModalOpen(false);
    setNewLibraryName("");
    setError("");
  };

  return (
    <div className="min-h-screen bg-surface-container-lowest font-body flex relative">
      
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
            <button onClick={() => setIsModalOpen(true)} className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary text-sm font-bold px-6 py-4 rounded-full shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer">
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
             
             {libraries.map((lib, i) => (
               <Link key={lib.id + i} href={`/library/${lib.id}`} className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-6 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow block cursor-pointer">
                  {/* Abstract shape */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${lib.shapeStyle} rounded-bl-full pointer-events-none`} />
                  
                  <div className="flex items-start justify-between mb-6 relative z-10">
                     <div className={`w-12 h-12 rounded-2xl ${lib.iconStyle} flex items-center justify-center`}>
                       <span className="material-symbols-outlined">{lib.icon}</span>
                     </div>
                     <div className="flex items-center gap-1 text-outline hover:text-on-surface transition-colors cursor-pointer" onClick={(e) => e.preventDefault()}>
                       <span className="material-symbols-outlined text-[18px] p-1 rounded-full hover:bg-surface-container-high">edit</span>
                       <span className="material-symbols-outlined text-[18px] p-1 rounded-full hover:bg-surface-container-high">share</span>
                       <span className="material-symbols-outlined text-[18px] p-1 rounded-full hover:bg-surface-container-high">delete</span>
                     </div>
                  </div>
                  
                  <h3 className={`font-headline text-xl font-bold text-on-surface mb-6 relative z-10 ${lib.isPaper ? 'line-clamp-2' : ''}`}>{lib.name}</h3>
                  
                  <div className={`flex items-center gap-3 mt-auto relative z-10 ${lib.tags || lib.quote || lib.progress || lib.hasAvatars ? 'mb-4' : ''}`}>
                     <div className="bg-surface-container-high text-on-surface text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                       <span className="material-symbols-outlined text-[14px]">
                         {lib.isPaper ? 'article' : 'layers'}
                       </span> {lib.topicsCount}
                     </div>
                     <div className="text-xs text-on-surface-variant font-medium">{lib.updatedAt}</div>
                  </div>
                  
                  {lib.hasAvatars && (
                    <div className="flex -space-x-2 mt-auto relative z-10">
                       <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-surface-container-lowest"></div>
                       <div className="w-8 h-8 rounded-full bg-tertiary-container border-2 border-surface-container-lowest"></div>
                       <div className="w-8 h-8 rounded-full bg-surface-container-high text-xs flex items-center justify-center font-bold text-on-surface border-2 border-surface-container-lowest">+2</div>
                    </div>
                  )}

                  {lib.progress && (
                    <div className="w-full bg-surface-container-high h-1.5 rounded-full mt-auto overflow-hidden relative z-10">
                      <div className="bg-primary h-full rounded-full" style={{ width: `${lib.progress}%` }}></div>
                    </div>
                  )}

                  {lib.tags && (
                    <div className="flex gap-2 relative z-10 mt-auto">
                      {lib.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md ${tagIndex === 0 ? 'bg-primary/10 text-primary' : 'bg-secondary-container text-on-secondary-container'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {lib.quote && (
                    <p className="text-xs text-on-surface-variant italic relative z-10 mt-auto line-clamp-1">{lib.quote}</p>
                  )}
               </Link>
             ))}

             {/* Create New Card */}
             <button onClick={() => setIsModalOpen(true)} className="bg-surface border-2 border-dashed border-outline-variant/50 rounded-3xl p-6 flex flex-col items-center justify-center min-h-[250px] group hover:border-primary/50 hover:bg-surface-container-lowest transition-all cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-on-primary transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">add</span>
                </div>
                <h3 className="font-headline text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">Create New Library</h3>
                <p className="text-sm text-on-surface-variant text-center max-w-xs">Start a new research project or study module.</p>
             </button>

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

      {/* Create Library Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={cancelCreate}></div>
          <div className="relative bg-surface rounded-3xl p-8 max-w-md w-full shadow-2xl border border-outline-variant/20 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-headline font-bold text-2xl text-on-surface">Create New Library</h2>
              <button onClick={cancelCreate} className="text-outline-variant hover:text-on-surface transition-colors cursor-pointer">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-semibold text-on-surface-variant mb-2">Library Name</label>
              <input 
                type="text" 
                value={newLibraryName}
                onChange={(e) => {
                  setNewLibraryName(e.target.value);
                  setError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleCreateLibrary();
                  if (e.key === 'Escape') cancelCreate();
                }}
                placeholder="e.g. Advanced Microbiology" 
                autoFocus
                className={`w-full bg-surface-container-low border ${error ? 'border-error' : 'border-outline-variant/30'} focus:border-primary rounded-xl px-4 py-3 text-on-surface outline-none transition-colors shadow-inner`}
              />
              {error && <p className="text-error text-xs font-semibold mt-2 flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">error</span>{error}</p>}
            </div>
            
            <div className="flex items-center justify-end gap-3 mt-8">
              <button onClick={cancelCreate} className="px-6 py-2.5 rounded-full text-sm font-bold text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer">
                Cancel
              </button>
              <button onClick={handleCreateLibrary} className="px-6 py-2.5 bg-primary text-on-primary rounded-full text-sm font-bold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer">
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
