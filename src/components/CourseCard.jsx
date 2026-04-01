import { motion } from 'framer-motion';
import { Clock, Star, Play, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ y: -10 }}
      className="glass rounded-[2rem] overflow-hidden group border border-white/5 shadow-2xl relative h-full flex flex-col"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
           <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 backdrop-blur-md">
              <Play className="text-white fill-white ml-1" />
           </div>
        </div>
      </div>
      
      <div className="p-8 flex-grow flex flex-col">
        <div className="flex justify-between items-center mb-4">
           <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">
              {course.category}
           </span>
           <div className="flex items-center gap-1 text-xs font-bold text-yellow-400">
              <Star size={14} fill="currentColor" />
              <span>{course.rating}</span>
           </div>
        </div>
        
        <h3 className="text-xl font-bold mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors flex-grow">
          {course.title}
        </h3>
        
        <div className="flex items-center gap-4 text-muted-foreground text-xs font-medium mb-6">
           <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>{course.duration}</span>
           </div>
           <div className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
           <span>{course.level}</span>
        </div>
        
        <Link 
          to={`/course/${course.id}`}
          className="w-full flex items-center justify-center gap-2 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-sm hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group/btn"
        >
           View Details
           <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default CourseCard;
