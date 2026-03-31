import { motion } from "framer-motion";
import { Users, BookOpen } from "lucide-react";
import { instructors } from "@/lib/data";

const InstructorsSection = () => (
  <section className="py-20 bg-muted/50">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Learn From the Best</h2>
        <p className="text-muted-foreground">World-class instructors with real industry experience</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {instructors.map((inst, i) => (
          <motion.div
            key={inst.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card rounded-xl border border-border p-6 text-center card-elevated"
          >
            <img
              src={inst.avatar}
              alt={inst.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-4 ring-muted transition-all duration-300 group-hover:ring-primary/30"
              loading="lazy"
              width={300}
              height={300}
            />
            <h3 className="font-semibold text-lg text-foreground">{inst.name}</h3>
            <p className="text-sm text-primary mb-3">{inst.expertise}</p>
            <div className="flex justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" /> {inst.courses} courses
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5" /> {(inst.students / 1000).toFixed(0)}K students
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default InstructorsSection;
