import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-background/85 dark:bg-background/90" />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            🚀 Over 50,000 students learning
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Learn Skills{" "}
          <span className="text-gradient">That Matter</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Master in-demand tech skills with expert-led courses in AI, Web Development, and Design.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link to="/courses">
            <Button size="lg" className="bg-hero-gradient text-primary-foreground border-0 px-8 text-base gap-2 glow-primary">
              Start Learning <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="gap-2 text-base">
            <Play className="w-4 h-4" /> Watch Demo
          </Button>
        </motion.div>

        <motion.div
          className="flex items-center gap-6 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {[
            { value: "200+", label: "Courses" },
            { value: "50K+", label: "Students" },
            { value: "4.8", label: "Avg Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
