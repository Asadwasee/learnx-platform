import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, BookOpen, Award, Settings, Search, Rocket, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import PoppingElement from '../components/PoppingElement';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  
  const stats = [
    { label: 'Completed', value: '12', icon: CheckCircle2, color: 'text-green-400' },
    { label: 'In Progress', value: '4', icon: Rocket, color: 'text-primary' },
    { label: 'Hours Studied', value: '148', icon: Clock, color: 'text-purple-400' },
    { label: 'Certificates', value: '8', icon: Award, color: 'text-yellow-400' },
  ];

  const menuItems = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'My Courses', icon: BookOpen },
    { name: 'Certificates', icon: Award },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <div className="pt-24 flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/5 glass p-8 hidden lg:flex flex-col gap-10">
        <div className="flex flex-col gap-6">
           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 px-4">Menu</span>
           <nav className="space-y-2">
              {menuItems.map((item) => (
                <button 
                  key={item.name} 
                  onClick={() => setActiveTab(item.name)}
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all group ${activeTab === item.name ? 'bg-primary text-white shadow-xl shadow-primary/20' : 'hover:bg-white/5 text-muted-foreground hover:text-foreground'}`}
                >
                   <item.icon size={20} className={activeTab === item.name ? 'text-white' : 'group-hover:text-primary'} />
                   <span className="font-black text-sm uppercase tracking-widest">{item.name}</span>
                </button>
              ))}
           </nav>
        </div>
        
        <div className="mt-auto glass p-6 rounded-3xl border border-white/5 relative overflow-hidden">
           <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/20 blur-3xl rounded-full" />
           <p className="text-xs font-bold text-muted-foreground mb-4 relative z-10">Upgrade to Pro for AI Tutoring</p>
           <button className="w-full py-3 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-black uppercase tracking-widest transition-all relative z-10 border border-white/10">
              Upgrade Now
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 md:p-12 h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar">
        <AnimatePresence mode="wait">
          {activeTab === 'Overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8 mb-16">
                 <div>
                    <h1 className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">Welcome back, <span className="gradient-text">Ahmad</span></h1>
                    <p className="text-muted-foreground font-bold">You're in the top 2% of learners this week. Keep it up!</p>
                 </div>
                 
                 <div className="relative w-full xl:w-96">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <input type="text" placeholder="Search your vault..." className="glass pl-16 pr-6 py-4 rounded-[2rem] w-full focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all border border-white/5" />
                 </div>
              </header>

              {/* Stats Grid */}
              <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                 {stats.map((stat, i) => (
                    <div key={i} className="glass p-8 rounded-[2.5rem] border border-white/5 hover:bg-white/10 transition-all group">
                       <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 ${stat.color}`}>
                          <stat.icon size={24} />
                       </div>
                       <div className="text-3xl font-black mb-1">{stat.value}</div>
                       <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                    </div>
                 ))}
              </section>

              {/* Course Progress */}
              <section>
                 <div className="flex justify-between items-end mb-8 px-2">
                    <h2 className="text-2xl font-black">Continue <span className="gradient-text">Learning</span></h2>
                    <button className="text-sm font-bold text-primary hover:underline">View All</button>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      { title: 'Neural UI Component Design', progress: 75, category: 'Design', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800' },
                      { title: 'Advanced Agentic Workflows', progress: 42, category: 'Tech', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800' },
                    ].map((course, i) => (
                       <div key={i} className="glass p-6 rounded-[3rem] border border-white/5 flex gap-6 items-center group relative overflow-hidden">
                          <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden shrink-0">
                             <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          </div>
                          <div className="flex-grow pr-4">
                             <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-2 block">{course.category}</span>
                             <h3 className="text-xl font-bold mb-4 line-clamp-1">{course.title}</h3>
                             <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-2">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${course.progress}%` }}
                                  transition={{ duration: 1.5, ease: "easeOut" }}
                                  className="h-full bg-gradient-to-r from-primary to-purple-500" 
                                />
                             </div>
                             <div className="flex justify-between text-xs font-bold text-muted-foreground italic">
                                <span>{course.progress}% Complete</span>
                                <span className="text-primary group-hover:translate-x-1 transition-transform cursor-pointer flex items-center gap-1">Resume <ChevronRight size={14} /></span>
                             </div>
                          </div>
                       </div>
                    ))}
                 </div>
              </section>
            </motion.div>
          )}

          {activeTab !== 'Overview' && (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center justify-center h-full text-center"
            >
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Rocket className="text-primary w-10 h-10 animate-bounce" />
              </div>
              <h2 className="text-3xl font-black mb-4">Module <span className="gradient-text">Incoming</span></h2>
              <p className="text-muted-foreground font-bold max-w-md">The {activeTab} section is scheduled for the Gen-AI update in June 2027. Stay tuned, Ahmad!</p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Dashboard;
