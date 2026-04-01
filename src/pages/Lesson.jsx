import { ChevronLeft, ChevronRight, MessageSquare, Info, Play, Download, Settings, Share2, CornerDownRight } from 'lucide-react';
import { motion } from 'framer-motion';
import PoppingElement from '../components/PoppingElement';

const Lesson = () => {
  const lessons = [
    { id: 1, title: "Neural Logic Foundations", duration: "12:45", active: true },
    { id: 2, title: "Reactive State Management", duration: "18:20" },
    { id: 3, title: "Holographic Components", duration: "14:10" },
    { id: 4, title: "Zero-Latency Protocols", duration: "09:55" },
    { id: 5, title: "Agentic Design Patterns", duration: "22:30" },
  ];

  return (
    <div className="pt-24 pb-10 px-6 max-w-[1600px] mx-auto h-screen flex flex-col gap-6">
      <div className="flex-grow grid grid-cols-1 xl:grid-cols-4 gap-8 overflow-hidden">
        
        {/* Main Player Area */}
        <div className="xl:col-span-3 flex flex-col h-full overflow-y-auto pr-2 custom-scrollbar">
           <PoppingElement className="flex-grow">
              <div className="aspect-video glass rounded-[3rem] overflow-hidden relative mb-8 shadow-3xl border border-white/5 group">
                 <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000" alt="Video" className="w-full h-full object-cover opacity-60" />
                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all">
                    <button className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center shadow-3xl shadow-primary/40 backdrop-blur-md hover:scale-110 transition-all">
                       <Play fill="white" size={32} className="ml-2" />
                    </button>
                    <p className="mt-6 font-black uppercase tracking-[0.4em] text-white/50 text-sm">Initializing Stream...</p>
                 </div>
                 
                 {/* Player Controls Placeholder */}
                 <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-center bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex gap-6 items-center">
                       <button className="text-white hover:text-primary transition-colors"><Settings size={20} /></button>
                       <div className="w-40 md:w-96 h-1.5 bg-white/20 rounded-full overflow-hidden">
                          <div className="w-1/3 h-full bg-primary" />
                       </div>
                       <span className="text-xs font-black text-white/80">04:20 / 12:45</span>
                    </div>
                    <div className="flex gap-4">
                       <button className="text-white hover:text-primary transition-colors"><Download size={20} /></button>
                       <button className="text-white hover:text-primary transition-colors"><Share2 size={20} /></button>
                    </div>
                 </div>
              </div>
           </PoppingElement>

           <div className="mb-12">
              <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                 <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary px-1 mb-2 block">Module 01 • Lesson 04</span>
                    <h1 className="text-3xl md:text-5xl font-black tracking-tighter">Neural Logic Foundations</h1>
                 </div>
                 <div className="flex gap-4">
                    <button className="px-6 py-3 glass rounded-2xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all border border-white/5">
                       <ChevronLeft size={20} /> Prev
                    </button>
                    <button className="px-6 py-3 bg-primary text-white rounded-2xl font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20">
                       Next <ChevronRight size={20} />
                    </button>
                 </div>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="glass p-8 rounded-[2.5rem] border border-white/5">
                    <div className="flex items-center gap-3 mb-6">
                       <Info className="text-primary" />
                       <h3 className="font-black uppercase tracking-widest text-sm">Lesson Notes</h3>
                    </div>
                    <ul className="space-y-4 text-muted-foreground font-medium text-sm">
                       <li className="flex gap-3"><CornerDownRight size={16} className="shrink-0 text-primary" /> Understand the core synapse handshake protocols between agents.</li>
                       <li className="flex gap-3"><CornerDownRight size={16} className="shrink-0 text-primary" /> Optimizing vector space for low-latency retrieval.</li>
                       <li className="flex gap-3"><CornerDownRight size={16} className="shrink-0 text-primary" /> Multi-modal input handling in 2027 design systems.</li>
                    </ul>
                 </div>
                 <div className="glass p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
                    <div className="flex items-center gap-3 mb-6">
                       <MessageSquare className="text-primary" />
                       <h3 className="font-black uppercase tracking-widest text-sm">Discussion</h3>
                    </div>
                    <div className="flex gap-4 items-center">
                       <div className="w-10 h-10 rounded-full bg-white/10 shrink-0" />
                       <div className="flex-grow glass p-3 rounded-xl text-xs text-muted-foreground border border-white/5 italic">
                          Type your question for the AI mentor...
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Course Navigation Panel */}
        <div className="xl:col-span-1 h-full flex flex-col gap-6 overflow-hidden pb-10">
           <PoppingElement className="flex flex-col h-full glass rounded-[3rem] border border-white/5 overflow-hidden shadow-3xl">
              <div className="p-8 border-b border-white/5">
                 <h3 className="text-xl font-black mb-2">Curriculum</h3>
                 <div className="flex justify-between items-center text-xs font-bold text-muted-foreground opacity-50 uppercase tracking-widest">
                    <span>12 Lessons</span>
                    <span>75% Done</span>
                 </div>
              </div>
              <div className="flex-grow overflow-y-auto p-4 space-y-2 custom-scrollbar">
                 {lessons.map((lesson, i) => (
                    <button 
                      key={lesson.id} 
                      className={`w-full flex items-center gap-4 p-5 rounded-[2rem] transition-all group ${lesson.active ? 'bg-primary/10 border border-primary/20 shadow-lg' : 'hover:bg-white/5 border border-transparent'}`}
                    >
                       <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${lesson.active ? 'bg-primary text-white' : 'bg-white/5 text-muted-foreground/30'}`}>
                          {lesson.active ? <Play size={16} fill="white" /> : <span className="font-black">{lesson.id}</span>}
                       </div>
                       <div className="flex-grow text-left">
                          <h4 className={`text-sm font-bold block ${lesson.active ? 'text-primary' : 'text-foreground'}`}>{lesson.title}</h4>
                          <span className="text-[10px] font-black uppercase tracking-widest opacity-40">{lesson.duration}</span>
                       </div>
                    </button>
                 ))}
              </div>
           </PoppingElement>
        </div>

      </div>
    </div>
  );
};

export default Lesson;
