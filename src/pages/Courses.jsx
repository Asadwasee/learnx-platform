import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import CourseCard from '../components/CourseCard';

const coursesData = [
  { id: 1, title: "Generative AI for Designers 2027", category: "AI", level: "Intermediate", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800", duration: "12 Hours", rating: 4.9 },
  { id: 2, title: "Next.js 16: The Future of Web", category: "Web Dev", level: "Advanced", image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800", duration: "15 Hours", rating: 4.8 },
  { id: 3, title: "Neural UI: Brain-Computer Interfaces", category: "Design", level: "Advanced", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", duration: "20 Hours", rating: 5.0 },
  { id: 4, title: "Quantum Computing Basics", category: "AI", level: "Beginner", image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800", duration: "10 Hours", rating: 4.7 },
  { id: 5, title: "FullStack Agentic Workflows", category: "Web Dev", level: "Intermediate", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800", duration: "18 Hours", rating: 4.9 },
  { id: 6, title: "Spatial Computing & AR", category: "Design", level: "Beginner", image: "https://images.unsplash.com/photo-1626379953822-baec19c3bbcd?auto=format&fit=crop&q=80&w=800", duration: "8 Hours", rating: 4.6 },
];

const categories = ["All", "AI", "Web Dev", "Design"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

const Courses = () => {
  const [filter, setFilter] = useState({ category: "All", level: "All", search: "" });

  const filteredCourses = coursesData.filter(course => {
    return (filter.category === "All" || course.category === filter.category) &&
           (filter.level === "All" || course.level === filter.level) &&
           (course.title.toLowerCase().includes(filter.search.toLowerCase()));
  });

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <header className="mb-16">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-5xl md:text-7xl font-black mb-8"
        >
          Explore <span className="gradient-text">Courses</span>
        </motion.h1>
        
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between glass p-6 rounded-[2.5rem] border border-white/10 shadow-2xl">
           <div className="relative w-full lg:w-1/3">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input 
                type="text" 
                placeholder="Search for skills..." 
                className="w-full bg-white/5 border border-white/5 rounded-2xl pl-16 pr-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium"
                onChange={(e) => setFilter({...filter, search: e.target.value})}
              />
           </div>
           
           <div className="flex flex-wrap gap-4 items-center justify-center">
              <div className="flex items-center gap-4 border-r border-white/10 pr-6 mr-2 hidden md:flex">
                 <SlidersHorizontal size={18} className="text-primary" />
                 <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Filters</span>
              </div>
              
              <div className="flex gap-2">
                 {categories.map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setFilter({...filter, category: cat})}
                      className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${filter.category === cat ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'glass hover:bg-white/10'}`}
                    >
                       {cat}
                    </button>
                 ))}
              </div>

              <select 
                className="glass px-6 py-3 rounded-xl text-sm font-bold focus:outline-none border border-white/5 cursor-pointer"
                onChange={(e) => setFilter({...filter, level: e.target.value})}
              >
                 {levels.map(lvl => (
                    <option key={lvl} value={lvl} className="bg-background text-foreground">{lvl}</option>
                 ))}
              </select>
           </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence mode='popLayout'>
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </AnimatePresence>
      </div>

      {filteredCourses.length === 0 && (
         <div className="text-center py-40">
            <h3 className="text-2xl font-bold text-muted-foreground">No courses found matching your criteria.</h3>
            <button 
              onClick={() => setFilter({ category: "All", level: "All", search: "" })}
              className="mt-6 text-primary font-bold underline"
            >
               Reset Filters
            </button>
         </div>
      )}
    </div>
  );
};

export default Courses;
