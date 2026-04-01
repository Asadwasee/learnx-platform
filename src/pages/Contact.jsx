import { Send, MapPin, Mail, Phone, MessageSquare, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import PoppingElement from '../components/PoppingElement';
import BlurryTextReveal from '../components/BlurryTextReveal';

const FrequentlyAsked = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="glass rounded-[1.5rem] border border-white/5 overflow-hidden shadow-xl mb-4 group transition-all hover:bg-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-bold text-lg group-hover:text-primary transition-colors">{question}</span>
        <div className={`w-8 h-8 rounded-full glass flex items-center justify-center transition-transform duration-500 ${isOpen ? 'rotate-180 bg-primary/20 text-primary' : ''}`}>
           <ChevronDown size={18} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-6"
          >
            <p className="text-muted-foreground font-medium leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="pt-32 pb-40 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col items-center text-center mb-24">
        <PoppingElement>
           <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-4 block">Get Support</span>
           <BlurryTextReveal className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
             WE ARE HERE <br /> <span className="gradient-text">TO HELP.</span>
           </BlurryTextReveal>
           <p className="text-xl text-muted-foreground max-w-2xl font-medium">Join the thousands of engineers shaping tomorrow. Our team is ready to accelerate your journey.</p>
        </PoppingElement>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left: Contact Info */}
        <div className="lg:col-span-4 space-y-8">
           {[
             { label: 'Neural Location', value: 'Silicon Valley, Earth 2027', icon: MapPin },
             { label: 'Voice Link', value: '+1 (555) 2027-CORE', icon: Phone },
             { label: 'Quantum Mail', value: 'support@learnx.futur', icon: Mail },
             { label: 'Direct Sync', value: 'Live Mentorship 24/7', icon: MessageSquare },
           ].map((item, i) => (
             <PoppingElement key={i} delay={i * 0.1}>
                <div className="glass p-8 rounded-[2.5rem] border border-white/5 flex gap-6 items-center group transition-all hover:bg-white/10">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <item.icon size={28} />
                   </div>
                   <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50 block mb-1">{item.label}</span>
                      <p className="font-bold text-lg">{item.value}</p>
                   </div>
                </div>
             </PoppingElement>
           ))}
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-8">
           <PoppingElement delay={0.3}>
              <div className="glass p-10 md:p-16 rounded-[4rem] border border-white/10 shadow-3xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[120px] rounded-full" />
                 
                 <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 px-4">Subject Interface</label>
                       <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/5 rounded-3xl px-8 py-5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-bold" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 px-4">Neural Address</label>
                       <input type="email" placeholder="Email@Network.io" className="w-full bg-white/5 border border-white/5 rounded-3xl px-8 py-5 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-bold" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 px-4">Transmitted Intent</label>
                       <textarea rows="5" placeholder="Sync your thoughts..." className="w-full bg-white/5 border border-white/5 rounded-[2.5rem] px-8 py-6 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-bold" />
                    </div>
                    <div className="md:col-span-2 pt-4">
                       <button className="w-full py-6 bg-primary text-white rounded-[2.5rem] font-black text-2xl shadow-3xl shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 group">
                          INITIATE SYNC <Send className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                       </button>
                    </div>
                 </form>
              </div>
           </PoppingElement>

           <div className="mt-20">
              <h3 className="text-3xl font-black mb-10 px-4">Knowledge <span className="gradient-text">Base</span></h3>
              <div className="space-y-4">
                 {[
                   { q: "How do I start my first course?", a: "Once you create your neural profile, simply browse the courses and click 'Enroll'. The system will automatically sync the core modules to your dashboard." },
                   { q: "Do you offer student discounts?", a: "We believe education is a right. Qualified students in early-stage learning tiers get up to 80% off on all pro masterclasses." },
                   { q: "Are certificates industry recognized?", a: "All LearnX certificates are anchored on the blockchain and verified by top tech partners including Google, Neuralink, and OpenAI." },
                 ].map((faq, i) => (
                   <FrequentlyAsked key={i} question={faq.q} answer={faq.a} />
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
