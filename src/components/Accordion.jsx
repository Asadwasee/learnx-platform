import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, PlayCircle, Lock } from 'lucide-react';

const Accordion = ({ title, items, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="glass rounded-[1.5rem] border border-white/5 overflow-hidden mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-all text-left group"
      >
        <span className="text-lg font-bold group-hover:text-primary transition-colors">{title}</span>
        <ChevronDown size={20} className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-primary' : 'text-muted-foreground'}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 space-y-3">
              {items.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 group-item cursor-pointer transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-item-hover:bg-primary/20">
                       {i === 0 ? <PlayCircle size={16} className="text-primary" /> : <Lock size={16} className="text-muted-foreground/50" />}
                    </div>
                    <span className={`text-sm font-medium ${i === 0 ? 'text-foreground' : 'text-muted-foreground'}`}>{item}</span>
                  </div>
                  <span className="text-xs font-bold text-muted-foreground/30">12:45</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
