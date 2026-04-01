import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Background = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Parallax effects for different layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -45]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none bg-background">
      {/* Animated Mesh Gradient Layer */}
      <div className="absolute inset-0 opacity-40 mix-blend-soft-light">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-primary/20 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, -150, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full"
        />
        <motion.div
           animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full"
        />
      </div>

      {/* Grid Pattern Layer */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
      
      {/* Animated SVG Lines (Circuit-like) */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        <motion.path
          d="M -100 200 L 400 200 L 500 300 L 1200 300"
          stroke="url(#line-grad)"
          strokeWidth="1"
          fill="none"
          animate={{
            strokeDasharray: ["0, 1000", "1000, 0"],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.path
          d="M 1500 800 L 1000 800 L 900 700 L 100 700"
          stroke="url(#line-grad)"
          strokeWidth="1"
          fill="none"
          animate={{
            strokeDasharray: ["0, 1000", "1000, 0"],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        />
      </svg>

      {/* Parallax Floating Elements */}
      <motion.div 
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-[15%] left-[10%] w-32 h-32 border border-white/5 rounded-3xl rotate-12 backdrop-blur-[2px]"
      />
      <motion.div 
        style={{ y: y2, rotate: rotate2 }}
        className="absolute bottom-[20%] right-[15%] w-48 h-48 border border-primary/5 rounded-[3rem] -rotate-12 backdrop-blur-[1px]"
      />
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_0%,rgba(255,255,255,0.02)_50%,transparent_100%)] bg-[length:100%_4px] animate-scanline opacity-20" />
    </div>
  );
};

export default Background;
