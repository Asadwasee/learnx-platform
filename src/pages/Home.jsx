import { motion } from 'framer-motion';
import { Rocket, Brain, Code, Palette, ChevronRight, PlayCircle, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlurryTextReveal from '../components/BlurryTextReveal';
import CourseCard from '../components/CourseCard';

const Home = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Generative AI for Designers 2027",
      category: "AI & Design",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      duration: "12 Hours",
      level: "Intermediate",
      rating: 4.9,
    },
    {
      id: 2,
      title: "Next.js 16: The Future of Web",
      category: "Web Dev",
      image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=800",
      duration: "15 Hours",
      level: "Advanced",
      rating: 4.8,
    },
    {
      id: 3,
      title: "Neural UI: Brain-Computer Interfaces",
      category: "UI/UX",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      duration: "20 Hours",
      level: "Advanced",
      rating: 5.0,
    },
  ];

  const categories = [
    { name: 'Artificial Intelligence', icon: Brain, count: 42, color: 'text-blue-400' },
    { name: 'Web Development', icon: Code, count: 128, color: 'text-purple-400' },
    { name: 'UI/UX Design', icon: Palette, count: 64, color: 'text-pink-400' },
    { name: 'Future Tech', icon: Rocket, count: 24, color: 'text-cyan-400' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6">
        <div className="hero-glow" />
        
        <div className="max-w-5xl mx-auto text-center z-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-white/50">Next Gen Learning Platform 2027</span>
          </motion.div>

          <BlurryTextReveal className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9]">
            LEARN SKILLS <br /> <span className="gradient-text">THAT MATTER.</span>
          </BlurryTextReveal>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Master the architecture of tomorrow. From Neural Interfaces to Quantum Computing, we provide the edge you need to stay ahead.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link to="/courses" className="group relative px-10 py-5 bg-primary text-white rounded-[2rem] font-black text-xl shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all overflow-hidden">
               <span className="relative z-10 flex items-center gap-2">
                 Start Learning <ChevronRight className="group-hover:translate-x-1 transition-transform" />
               </span>
               <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
            <button className="px-10 py-5 glass rounded-[2rem] font-black text-xl hover:bg-white/10 transition-all border border-white/10 flex items-center gap-3">
               <PlayCircle className="text-primary" /> Watch Trailer
            </button>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="max-w-7xl mx-auto w-full mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 px-6 z-10 pb-20">
           {[
             { label: 'Active Students', value: '50K+', icon: Users },
             { label: 'Pro Courses', value: '250+', icon: PlayCircle },
             { label: 'Success Rate', value: '98%', icon: Trophy },
             { label: 'Skill Paths', value: '15+', icon: Rocket },
           ].map((stat, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.5 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
               className="glass p-8 rounded-[2.5rem] border border-white/5 text-center group hover:bg-white/10 transition-all"
             >
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                   <stat.icon className="text-primary w-6 h-6" />
                </div>
                <div className="text-3xl font-black mb-1">{stat.value}</div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <div className="max-w-2xl">
              <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Categories</span>
              <BlurryTextReveal className="text-4xl md:text-6xl font-black leading-tight">
                Choose Your <span className="gradient-text">Destiny</span> in the Digital Realm.
              </BlurryTextReveal>
           </div>
           <Link to="/courses" className="px-8 py-3 glass rounded-2xl font-bold flex items-center gap-2 hover:bg-primary hover:text-white transition-all">
              View All <ChevronRight size={18} />
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {categories.map((cat, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.5 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
               whileHover={{ y: -10 }}
               className="glass p-10 rounded-[3rem] border border-white/5 group cursor-pointer relative overflow-hidden"
             >
                <div className={`w-16 h-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center mb-8 ${cat.color} group-hover:scale-110 transition-transform`}>
                   <cat.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2 pr-10">{cat.name}</h3>
                <p className="text-muted-foreground text-sm font-medium">{cat.count} Courses Available</p>
                <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                   <ChevronRight />
                </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-32 px-6 bg-muted/20 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Learning Paths</span>
            <h2 className="text-4xl md:text-6xl font-black">Featured <span className="gradient-text">Masterclasses</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials (Added for complete design) */}
      <section className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
         <div className="text-center mb-20">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4 block">Success Stories</span>
            <h2 className="text-4xl md:text-6xl font-black">Join the <span className="gradient-text">Elite.</span></h2>
         </div>
         <div className="flex flex-nowrap gap-8 overflow-hidden">
            {[1, 2, 3, 4].map((i) => (
               <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="min-w-[400px] glass p-10 rounded-[3rem]"
               >
                  <p className="text-lg italic text-muted-foreground mb-8">"The curriculum is light years ahead of anything else. I went from a junior dev to a lead in 6 months using LearnX's AI tracks."</p>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-primary/20 rounded-full" />
                     <div>
                        <div className="font-bold">Alex Rivera</div>
                        <div className="text-xs text-muted-foreground">Lead Architect at CyberDyne</div>
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50 }}
          className="max-w-5xl mx-auto glass p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden group border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-purple-500/20 opacity-50" />
          <h2 className="text-4xl md:text-7xl font-black mb-8 relative z-10 leading-tight">Ready to code <br /> the <span className="gradient-text">future?</span></h2>
          <p className="text-xl text-muted-foreground mb-12 relative z-10 max-w-2xl mx-auto font-medium">
            Join 50,000+ students already shaping the technology of 2027 and beyond. The future waits for no one.
          </p>
          <div className="relative z-10">
            <Link to="/courses" className="px-12 py-6 bg-primary text-white rounded-[2.5rem] font-black text-2xl shadow-3xl shadow-primary/50 hover:scale-110 active:scale-95 transition-all inline-block">
               Join Now for Free
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
