import { motion } from 'framer-motion';
import { Star, Clock, Globe, Shield, Play, Users, Calendar } from 'lucide-react';
import Accordion from '../components/Accordion';
import BlurryTextReveal from '../components/BlurryTextReveal';

const CourseDetail = () => {
  const curriculum = [
    { title: "Introduction to Neural Interfaces", items: ["System Architecture", "Sensory Data Mapping", "Core Handshake Protocols"] },
    { title: "Advanced LLM Integration", items: ["Vector Database Setup", "Prompt Injection Defense", "Function Calling Masterclass"] },
    { title: "The Future of Frontend", items: ["Reactive Neuro-Components", "Holographic Layouts", "Zero-Latency State Management"] },
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          {/* Hero Content */}
          <div className="mb-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 mb-6"
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">Web Development 2027</span>
            </motion.div>
            <BlurryTextReveal className="text-4xl md:text-6xl font-black mb-6 leading-tight">
               AI-Powered Web <br /> <span className="gradient-text">Development Masterclass</span>
            </BlurryTextReveal>
            
            <div className="flex flex-wrap gap-6 text-sm font-bold text-muted-foreground mb-8">
               <div className="flex items-center gap-2">
                  <Star size={16} fill="#eab308" className="text-yellow-500" />
                  <span className="text-foreground">4.9</span>
                  <span className="opacity-50">(1,240 Reviews)</span>
               </div>
               <div className="flex items-center gap-2">
                  <Users size={16} className="text-primary" />
                  <span className="text-foreground">15,400+</span>
                  <span className="opacity-50">Students</span>
               </div>
               <div className="flex items-center gap-2">
                  <Clock size={16} className="text-primary" />
                  <span className="text-foreground">24 Hours</span>
               </div>
            </div>
          </div>

          {/* Video Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="aspect-video glass rounded-[3rem] overflow-hidden mb-12 relative group shadow-2xl border border-white/5"
          >
             <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000" alt="Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <button className="w-24 h-24 bg-primary/90 text-white rounded-full flex items-center justify-center shadow-3xl shadow-primary/40 backdrop-blur-md hover:scale-110 active:scale-95 transition-all">
                   <Play size={28} fill="white" className="ml-2" />
                </button>
             </div>
          </motion.div>

          {/* Description */}
          <div className="mb-16">
            <h2 className="text-3xl font-black mb-6">About this <span className="gradient-text">Course</span></h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
               <p>Welcome to the ultimate frontier of web development. In this comprehensive masterclass, we dive deep into the technologies that will define the digital landscape of 2027.</p>
               <p>You won't just learn to code; you'll learn to architect intelligent systems that bridge the gap between human intent and machine execution. From LLM-integrated state management to reactive neuro-components, we leave no stone unturned.</p>
            </div>
          </div>

          {/* Curriculum */}
          <div className="mb-16">
            <h2 className="text-3xl font-black mb-8">Course <span className="gradient-text">Curriculum</span></h2>
            {curriculum.map((section, i) => (
              <Accordion key={i} title={section.title} items={section.items} defaultOpen={i === 0} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="sticky top-32 glass p-10 rounded-[3rem] border border-white/10 shadow-3xl overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 blur-[100px] rounded-full" />
            
            <div className="relative z-10">
               <div className="flex items-baseline gap-3 mb-8">
                  <span className="text-5xl font-black">$199</span>
                  <span className="text-xl text-muted-foreground line-through opacity-50 font-bold">$499</span>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-black rounded-lg">60% OFF</span>
               </div>
               
               <button className="w-full py-5 bg-primary text-white rounded-[2rem] font-black text-xl mb-8 shadow-3xl shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Enroll in Path
               </button>

               <div className="space-y-6">
                  <h4 className="text-sm font-black uppercase tracking-widest text-white/50 mb-4 px-2">Included in this tier:</h4>
                  {[
                    { icon: Globe, text: "Lifetime Global Access" },
                    { icon: Shield, text: "Verified Blockchain Certificate" },
                    { icon: Users, text: "Private Discord Community" },
                    { icon: Calendar, text: "Weekly Live Workshops" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                       <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <item.icon size={18} className="text-primary" />
                       </div>
                       <span className="font-bold text-sm">{item.text}</span>
                    </div>
                  ))}
               </div>
               
               <div className="mt-12 pt-10 border-t border-white/5">
                  <p className="text-center text-xs font-bold text-muted-foreground/50 uppercase tracking-widest">Secure Payment Gateway Enabled</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
